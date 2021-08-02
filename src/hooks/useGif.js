import axios from "axios";
import { useEffect, useState } from "react";
const API_KEY = process.env.REACT_APP_API_KEY;

const useGif = (searchTerm) => {
  const [gif, setGif] = useState(null);
  const [error, setError] = useState(null);
  const fetchGif = async (searchTerm) => {
    if (searchTerm) {
      const randomOffset = Math.floor(Math.random() * 500);
      const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${searchTerm}&offset=${randomOffset}`;
      try {
        const response = await axios.get(url);
        setError(null);
        if (response.data.data.length < 1) {
          setError("No results, try again!");
        } else {
          setGif(response.data.data[0].images.downsized_large.url);
        }
      } catch (error) {
        console.log(error);
        setError("Something went wrong!");
      }
    } else {
      const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
      try {
        const response = await axios.get(url);
        setError(null);
        setGif(response.data.data.images.downsized_large.url);
      } catch (error) {
        setError("Something went wrong!");
      }
    }
  };
  useEffect(() => {
    fetchGif(searchTerm);
  }, []);

  return { gif, fetchGif, error };
};

export default useGif;
