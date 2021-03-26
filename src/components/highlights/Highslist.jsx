import React, { useContext } from "react";
import { HighsContext } from "./HighsContext";
import Match from "./Match"; // component that renders highlights

function Highlist() {
  const [videos, setVideos] = useContext(HighsContext);

  return (
    <table className="highs">
      <thead>
        <tr>
          <th>Home</th>
          <th>Away</th>
          <th></th>
        </tr>
      </thead>
      {videos.map((data, id) => (
        <Match data={data} key={id} />
      ))}
    </table>
  );
}

export default Highlist;
