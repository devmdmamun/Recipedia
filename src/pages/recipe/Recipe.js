import { useParams } from "react-router-dom";
import { useEffect, useState } from "react/cjs/react.development";
import { useTheme } from "../../hoocks/useTheme";
import { prejectFirestore } from "../../firebase/config";
//style
import "./Recipe.css";
export default function Recipe() {
  const { id } = useParams();
  const { mode } = useTheme();

  const [recipe, setRecipe] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsPending(true);

    const unsub = prejectFirestore
      .collection("recipe")
      .doc(id)
      .onSnapshot((doc) => {
        if (doc.exists) {
          setIsPending(false);
          setRecipe(doc.data());
        } else {
          setIsPending(false);
          setError("could not find the recipe");
        }
      });

    return () => unsub();
  }, [id]);

  const handleClick = () => {
    prejectFirestore.collection("recipe").doc(id).update({
      cookingTime: "10 minutes",
    });
  };

  return (
    <div className={`recipe ${mode}`}>
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading ...</p>}
      {recipe && (
        <>
          <h2 className="page-title">{recipe.title}</h2>
          <p> Takes {recipe.cookingTime} to cook.</p>
          <ul>
            {recipe.ingredients.map((ing) => (
              <li key={ing}>{ing}</li>
            ))}
          </ul>
          <p className="method"> {recipe.method}</p>
          <button
            onClick={() => {
              handleClick();
            }}
          >
            Update me
          </button>
        </>
      )}
    </div>
  );
}
