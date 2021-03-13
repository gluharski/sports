import React from "react";

function Match({ data }) {
  console.log(data);

  return (
    <>
      <a href="#" className="link">
        {data.home} - {data.away}
      </a>
    </>
  );
}

export default Match;
