import { useNavigate } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import "./Searchbar.css";

export default function Searchbar() {
  const [turn, setTurn] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    navigate(`/search?q=${turn}`);
  };

  return (
    <div className="searchbar">
      <form onSubmit={handleSubmit}>
        <label htmlFor="search">Search:</label>
        <input
          type="text"
          id="search"
          onChange={(e) => setTurn(e.target.value)}
          value={turn}
          required
        />
      </form>
    </div>
  );
}
