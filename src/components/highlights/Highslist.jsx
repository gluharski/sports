import React, { useContext } from "react";
import { HighsContext } from "./HighsContext";

import Match from "./Match"; // component that renders highlights

function Highlist() {
  const [videos, setVideos] = useContext(HighsContext);

  return (
    <div className="hs-list">
      {videos.map((data, id) => (
        <Match data={data} key={id} />
      ))}
    </div>
  );
}

export default Highlist;
