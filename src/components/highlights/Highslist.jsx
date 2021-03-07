import React, { useContext } from "react";
import { HighsContext } from "./HighsContext";

import Match from "./Match"; // component that renders highlights

function Highlist() {
  const [videos, setVideos] = useContext(HighsContext);

  return (
    <>
      {videos.map((data, id) => (
        <Match data={data} key={id} />
      ))}
    </>
  );
}

export default Highlist;
