import React from "react";

function Match({ data }) {
  return (
    <tbody>
      <tr className="teams">
        <td className="team">{data.side1.name}</td>
        <td className="team">{data.side2.name}</td>
        <td className="view-button">
          <a target="_blank" href={data.embed.slice(137, 181)}>
            VIEW
          </a>
        </td>
      </tr>
    </tbody>
  );
}

export default Match;
