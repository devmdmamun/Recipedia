import "./Navbar.css";
import { Link } from "react-router-dom";
import Searchbar from "./Searchbar";
import { useTheme } from "../hoocks/useTheme";

export default function Navbar() {
  const { color } = useTheme();

  return (
    <div className="navbar" style={{ background: color }}>
      <nav>
        <Link className="brand" to="/">
          <h1>Recipedia</h1>
        </Link>
        <Searchbar />
        <Link to="/create"> Create</Link>
      </nav>
    </div>
  );
}
