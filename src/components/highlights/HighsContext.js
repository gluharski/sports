import React, { useState, useEffect, createContext } from "react";

export const HighsContext = createContext();

export const HighsProvider = (data) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch("https://www.scorebat.com/video-api/v1/")
      .then((res) => res.json())
      .then((data) => {
        setVideos(data);
      });
  }, []);

  return (
    <HighsContext.Provider value={[videos, setVideos]}>
      {data.children}
    </HighsContext.Provider>
  );
};
