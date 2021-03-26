import React, { useState, useEffect, createContext } from "react";

export const LiveContext = createContext();

export const LiveProvider = (data) => {
  const [live, setLive] = useState("Hello World");

  useEffect(() => {
    fetch("https://api.football-data.org/v2/matches", {
      "method:": "GET",
      headers: {
        "X-Auth-Token": "3a780b3c15f348258961995b7774e006",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return (
    <LiveContext.Provider value={[live, setLive]}>
      {data.children}
    </LiveContext.Provider>
  );
};

// export const LiveProvider = (data) => {
//   const [live, setLive] = useState([]);
//   let result = [];

//   useEffect(() => {
//     fetch("https://api.football-data.org/v2/matches", {
//       "method:": "GET",
//       headers: {
//         "X-Auth-Token": "3a780b3c15f348258961995b7774e006",
//       },
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         let match = data.matches;

//         for (let i of match) {
//           match = {
//             id: i.id,
//             home: i.homeTeam.name,
//             away: i.awayTeam.name,
//             status: i.status,
//             // winner: `${i.score.fullTime.homeTeam}:${i.score.fullTime.awayTeam}`,
//             // date: localTime(i.utcDate),
//           };

//           if (match.status === "SCHEDULED") {
//             match.winner = match.date;
//           }

//           result.push(match);
//         }

//         setLive(result);
//       });
//   }, []);

//   return (
//     <LiveContext.Provider value={[live, setLive]}>
//       {data.children}
//     </LiveContext.Provider>
//   );
// };
