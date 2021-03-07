import React, { useContext } from "react";
import { LiveContext } from "./LiveContext";

import Match from "./Match";

function LiveList() {
  const [live, setLive] = useContext(LiveContext);

  return (
    <>
      <Match data={live} />
    </>
  );
}

export default LiveList;
