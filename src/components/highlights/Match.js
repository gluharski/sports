import React from "react";

function Match({ data }) {
  const { title, embed, side1 } = data;

  return (
    <>
      <a className="link" target="_blank" href={embed.slice(137, 181)}>
        {title}
      </a>
    </>
  );
}

export default Match;
