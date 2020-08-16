import React from "react";
import RadioSelectControl from "../../common/RadioSelectControl";
import { Category, Difficulty } from "../../../models/enums";

function CreateGame(props: any) {
  function handleCategoryChange(event: any) {
    console.log(event);
  }

  return (
    <>
      <h3>Create New Game</h3>
      <RadioSelectControl
        label='Category Select'
        options={Object.keys(Category)}
        selectedOption={Category.Mixed}
        onOptionChange={handleCategoryChange}
      />
      <hr />
      <RadioSelectControl
        label='Difficulty'
        options={Object.keys(Difficulty)}
        selectedOption={Difficulty.Easy}
        onOptionChange={handleCategoryChange}
      />
    </>
  );
}

export default CreateGame;
