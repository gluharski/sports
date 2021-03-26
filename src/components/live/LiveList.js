import React, { useContext } from "react";
import { LiveContext } from "./LiveContext";

import Match from "./Match";

function LiveList() {
  const [live, setLive] = useContext(LiveContext);

  console.log(live);

  return <>{live}</>;
}

export default LiveList;
