import axios from "axios";
import React, { useEffect, useState } from "react";

const API_KEY = process.env.API_KEY;

const RandomGif = () => {
  useEffect(() => {
    const fetchGif = async () => {
      const url = `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}`;
      const { data } = await axios.get(url);
      console.log(data);
    };

    fetchGif();
  }, []);
  return <div></div>;
};

export default RandomGif;
