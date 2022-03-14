import React from "react";

function Recipe({
  index,
  name,
  cuisine,
  photo,
  ingredients,
  preparation,
  handleDeleteRecipe,
}) {
  return (
    <>
      <td>
        <p>{name}</p>
      </td>
      <td>
        <p>{cuisine}</p>
      </td>
      <td>
        <img src={photo} alt={name} />
      </td>
      <td className="content_td">
        <p>{ingredients}</p>
      </td>
      <td className="content_td">
        <p>{preparation}</p>
      </td>
      <td>
        <button name="delete" onClick={() => handleDeleteRecipe(index)}>
          Delete
        </button>
      </td>
    </>
  );
}

export default Recipe;
