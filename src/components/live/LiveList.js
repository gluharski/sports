import React, { useContext } from "react";
import { LiveContext } from "./LiveContext";

import Match from "./Match";

function LiveList() {
  const [live, setLive] = useContext(LiveContext);

  console.log(live);

  return (
    <>
      <div className="live-list">
        {live.map((data, id) => (
          <Match data={data} key={id} />
        ))}
      </div>
    </>
  );
}

export default LiveList;
