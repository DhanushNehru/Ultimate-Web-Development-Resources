import React, { useState } from "react";

const Leaderboard = () => {
  const [players, setPlayers] = useState([
    {
      rank: 1,
      name: "Player A",
      image: "/path-to-player-image-1.jpg",
      pointsWon: 1000,
      pointsLost: 300,
      coinsWon: 500,
    },
    {
      rank: 2,
      name: "Player B",
      image: "/path-to-player-image-2.jpg",
      pointsWon: 800,
      pointsLost: 200,
      coinsWon: 400,
    },
    {
      rank: 3,
      name: "Player C",
      image: "/path-to-player-image-3.jpg",
      pointsWon: 700,
      pointsLost: 250,
      coinsWon: 300,
    },
    // Add more players and their data
  ]);

  return (
    <div className="bg-gray-100 p-4">
      <h2 className="text-2xl font-bold mb-4">Leaderboard</h2>
      <table className="w-full">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2">Rank</th>
            <th className="p-2">Player</th>
            <th className="p-2">Points Won</th>
            <th className="p-2">Points Lost</th>
            <th className="p-2">Coins Won</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player, index) => (
            <tr key={index}>
              <td className="p-2">{player.rank}</td>
              <td className="p-2 flex items-center">
                <img
                  src={player.image}
                  alt={player.name}
                  className="w-8 h-8 rounded-full mr-2"
                />
                {player.name}
              </td>
              <td className="p-2">{player.pointsWon}</td>
              <td className="p-2">{player.pointsLost}</td>
              <td className="p-2">{player.coinsWon}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
