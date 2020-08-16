import React, { useState } from "react";
import RadioSelectControl from "../../common/RadioSelectControl";
import { Category, Difficulty } from "../../../models/enums";
import TextInput from "../../common/TextInput";
import "./CreateGame.scss";

function CreateGame(props: any) {
  const TOTAL_NAME_SIZE = 30;

  const [selectedCategory, setSelectedCategory] = useState(Category.Mixed);
  const [selectedDifficulty, setSelectedDifficulty] = useState(Difficulty.Easy);
  const [playerName, setPlayerName] = useState("");

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
    } else {
      console.log("missing player name");
    }
  }

  function isFormValid(): boolean {
    return playerName.trim() !== "";
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <h3>Create New Game</h3>
      <TextInput
        label='Enter your name'
        value={playerName}
        onChange={handleNameChange}
        maxLength={TOTAL_NAME_SIZE}
      />
      <RadioSelectControl
        label='Category Select'
        options={Object.keys(Category)}
        selectedOption={selectedCategory}
        onOptionChange={handleCategoryChange}
      />
      <RadioSelectControl
        label='Difficulty'
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

export default CreateGame;
