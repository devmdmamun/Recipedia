import { Link } from "react-router-dom";
import { useTheme } from "../hoocks/useTheme";
import Trashcan from "../assets/Trashcan.svg";
import { prejectFirestore } from "../firebase/config";
// styles
import "./RecipeList.css";

export default function RecipeList({ recipes }) {
  const { mode } = useTheme();
  const handleClick = (id) => {
    prejectFirestore.collection("recipe").doc(id).delete();
  };

  if (recipes.length === 0) {
    return <div className="error">No recipes to load...</div>;
  }

  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <div key={recipe.id} className={`card ${mode}`}>
          <h3>{recipe.title}</h3>
          <p>{recipe.cookingTime} to make</p>
          <div>{recipe.method.substring(0, 100)}...</div>
          <Link to={`/recipes/${recipe.id}`}> Cook This</Link>
          <img
            className="delete"
            src={Trashcan}
            onClick={() => handleClick(recipe.id)}
            alt="Delete"
          />
        </div>
      ))}
    </div>
  );
}
