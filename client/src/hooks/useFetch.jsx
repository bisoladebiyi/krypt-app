import React, { useEffect, useState } from "react";
import axios from "axios";

const useFetch = ({ keyword }) => { //fetch gif
  const [gif, setGif] = useState("");
  const fetchGif = async () => {
    try {
      const { data } = await axios.get(
        `https://api.giphy.com/v1/gifs/search?api_key=${
          import.meta.env.VITE_GIPHY_API
        }&q=${keyword.split(" ").join("")}&limit=1`
      );
      setGif(data?.data[0]?.images?.downsized_medium?.url);
    } catch (error) {
      console.log(error);
      setGif(
        "https://metro.co.uk/wp-content/uploads/2015/05/pokemon_crying.gif?quality=90&strip=all&zoom=1&resize=500%2C284"
      );
    }
  };

  useEffect(() => {
    if (keyword) {
      fetchGif();
    }
  }, [keyword]);

  return gif;
};

export default useFetch;
