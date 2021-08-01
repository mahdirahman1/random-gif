import axios from "axios";
import React, { useEffect, useState } from "react";

const API_KEY = process.env.REACT_APP_API_KEY;

const RandomGif = () => {
  const [gif, setGif] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
      const { data } = await axios.get(url);
      setGif(data.data.images.downsized_large.url);
    };
    fetchData();
  }, []);

  return (
    <div>
      <img src={gif} />
    </div>
  );
};

export default RandomGif;
