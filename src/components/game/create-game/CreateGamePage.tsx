import React, { useState, useEffect } from "react";
import RadioSelectControl from "../../common/RadioSelectControl";
import SelectControl from "../../common/SelectControl";
import { Category, Difficulty, Player } from "../../../models";
import TextInput from "../../common/TextInput";
import "./CreateGame.scss";
import { getPlayers, createNewPlayer } from "../../../actions/playerActions";
import gameStore from "../../../stores/game.store";
import playerStore from "../../../stores/player.store";
import {
  getQuestionsCategories,
  createNewGame,
} from "../../../actions/gameActions";

function CreateGamePage(props: any) {
  const TOTAL_NAME_SIZE = 30;
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedDifficulty, setSelectedDifficulty] = useState(Difficulty.Easy);
  const [playerName, setPlayerName] = useState("");
  const [errors, setErrors] = useState<string[]>([]);

  useEffect(() => {
    gameStore.addChangeListener(onQuestionsChange);
    if (gameStore.getCategories().length === 0) {
      getQuestionsCategories();
    } else {
      setCategories(gameStore.getCategories());
    }

    // if no players were loaded load them for future operations
    if (playerStore.getPlayers().length === 0) {
      getPlayers();
    }

    return () => {
      gameStore.removeChangeListener(onQuestionsChange);
    };
  }, [categories]);

  // on pub-sub update set the categories for the selection
  function onQuestionsChange() {
    setCategories(gameStore.getCategories());
    setSelectedCategory(gameStore.getCategories()[0].name);
  }

  function handleCategoryChange(event: any) {
    setSelectedCategory(event.target.value);
  }

  function handleDifficultyChange(event: any) {
    setSelectedDifficulty(event.target.value);
  }

  function handleNameChange(event: any) {
    let value: string = event.target.value;
    setPlayerName(value);
  }

  function handleFormSubmit(event: React.FormEvent<HTMLElement>) {
    event.preventDefault();

    if (isFormValid()) {
      setErrors([]);

      // check if player name exists
      const playerId = playerStore
        .getPlayers()
        .reduce((a, b, i) => (a.id > b.id ? a : b)).id;
      const player = new Player(playerId + 1, playerName, 0);
      createNewPlayer(player);
      createNewGame({
        gameCategory: categories.find((c) => c.name === selectedCategory),
        gameDifficulty: selectedDifficulty,
        player,
      }).then(() => props.history.push("/game/board"));
    } else {
      setErrors(["Missing player name"]);
    }
  }

  function isFormValid(): boolean {
    return playerName.trim() !== "";
  }

  return (
    <form className='create-game-form' onSubmit={handleFormSubmit}>
      <h3 className='create-game-title'>Create New Game</h3>
      <TextInput
        label='Enter your name'
        value={playerName}
        onChange={handleNameChange}
        maxLength={TOTAL_NAME_SIZE}
        errors={errors}
      />
      <SelectControl
        selectedOption={selectedCategory}
        label='Select category'
        options={categories.map((c) => c.name)}
        onChange={handleCategoryChange}
      />
      <RadioSelectControl
        label='Select difficulty'
        options={Object.keys(Difficulty)}
        selectedOption={selectedDifficulty}
        onOptionChange={handleDifficultyChange}
      />
      <button className='submit-button' type='submit'>
        Start game
      </button>
    </form>
  );
}

export default CreateGamePage;
