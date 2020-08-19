import React, { useState, useEffect } from "react";
import RadioSelectControl from "../../common/RadioSelectControl";
import { Difficulty } from "../../../models/enums";
import { Category } from "../../../models";
import TextInput from "../../common/TextInput";
import "./CreateGame.scss";
import * as questionService from "../../../services/questions.service";
import SelectControl from "../../common/SelectControl";
import questionsStore from "../../../stores/questions.store";
import { getQuestionsCategories } from "../../../actions/questionsActions";

function CreateGamePage() {
  const TOTAL_NAME_SIZE = 30;
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedDifficulty, setSelectedDifficulty] = useState(Difficulty.Easy);
  const [playerName, setPlayerName] = useState("");
  const [errors, setErrors] = useState<string[]>([]);

  useEffect(() => {
    questionsStore.addChangeListener(onQuestionsChange);
    if (questionsStore.getCategories().length === 0) {
      getQuestionsCategories();
    }
    return () => {
      questionsStore.removeChangeListener(onQuestionsChange);
    };
  }, [categories]);

  function onQuestionsChange() {
    setCategories(questionsStore.getCategories());
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

    questionService.getQuestions(5);
    questionService.getQuestions(5, { id: 10, name: "" });
    if (isFormValid()) {
      setErrors([]);
      // TODO create game store action
    } else {
      setErrors(["Missing player name"]);
    }
  }

  function isFormValid(): boolean {
    return playerName.trim() !== "";
  }

  return (
    <form className='create-game-form' onSubmit={handleFormSubmit}>
      <h3>Create New Game</h3>
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
