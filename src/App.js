import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Page component
import Home from "./pages/home/Home";
import Create from "./pages/create/Create";
import Seacrh from "./pages/search/Search";
import Recipe from "./pages/recipe/Recipe";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/search" element={<Seacrh />} />
          <Route path="/recipes" element={<Recipe />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
