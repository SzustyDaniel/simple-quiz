import React, { useState, useEffect } from "react";
import { Player } from "../../models";
import playerStore from "../../stores/player.store";
import { getPlayers } from "../../actions/playerActions";
import "./TopScoresPage.scss";

const TopScoresPage = () => {
  const [players, setPlayers] = useState<Player[]>();

  useEffect(() => {
    playerStore.addChangeListener(onPlayerChange);

    if (playerStore.getPlayers().length === 0) {
      getPlayers();
    } else {
      setPlayers(playerStore.getPlayers());
    }

    return () => {
      playerStore.removeChangeListener(onPlayerChange);
    };
  }, [players]);

  function onPlayerChange() {
    setPlayers(playerStore.getPlayers());
  }

  function sortByHighScore(a: Player, b: Player) {
    return a.score > b.score ? -1 : a.score < b.score ? 1 : 0;
  }

  return (
    <div className='top-score-container'>
      <h2 className='top-score-title'>Top scores</h2>
      <table id='players' className='top-score-table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {players?.sort(sortByHighScore).map((p) => {
            return (
              <tr key={p.id}>
                <td>{p.name}</td>
                <td>{p.score}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TopScoresPage;
