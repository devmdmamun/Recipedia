import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Page component
import Home from "./pages/home/Home";
import Create from "./pages/create/Create";
import Seacrh from "./pages/search/Search";
import Recipe from "./pages/recipe/Recipe";
import Navbar from "./component/Navbar";
import ThemeSelector from "./component/ThemeSelector";
import { useTheme } from "./hoocks/useTheme";

function App() {
  const { mode } = useTheme();

  return (
    <div className={`App ${mode}`}>
      <BrowserRouter>
        <Navbar />
        <ThemeSelector />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/search" element={<Seacrh />} />
          <Route path="/recipes/:id" element={<Recipe />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
