import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData";

function App() {
  const [recipes, setRecipes] = useState(RecipeData);

  // TODO: Add the ability for the <RecipeList /> component to list and delete an existing recipe.
  // TODO: Add the ability for the <RecipeCreate /> component to create new recipes.

  const createRecipe = (formData) => {
    setRecipes([...recipes, formData.formData]);
  };

  const deleteRecipe = (indexToDelete) => {
    console.log("delete recipe called");
    console.log("indexToDelete", typeof indexToDelete, indexToDelete);
    setRecipes((currentRecipes) => {
      let filteredRecipes = currentRecipes.filter(
        (ignored, index) => index !== indexToDelete
      );
      console.log("filteredRecipes", filteredRecipes);
      return filteredRecipes;
    });
  };

  console.log("recipes", recipes);

  return (
    <div className="App">
      <header>
        <h1>Delicious Food Recipes</h1>
      </header>
      <RecipeList recipes={recipes} handleDeleteRecipe={deleteRecipe} />
      <RecipeCreate handleCreateRecipe={createRecipe} />
    </div>
  );
}

export default App;
