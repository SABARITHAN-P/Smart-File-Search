import { useState } from "react";
import "./App.css";

import SearchBar from "./SearchBar";
import ResultsList from "./ResultsList";
import { searchFiles, openFileAPI } from "./api/api";

function App() {
  const [path, setPath] = useState("");
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showPath, setShowPath] = useState(false);

  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark",
  );

  const toggleTheme = () => {
    const newTheme = !darkMode;
    setDarkMode(newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };

  const handleSearch = async () => {
    if (!path || !query) {
      alert("Please enter both path and search query");
      return;
    }

    try {
      setLoading(true);
      const results = await searchFiles(path, query);
      setResults(results);
      setLoading(false);
    } catch (err) {
      console.error(err);
      alert(err.message);
      setLoading(false);
    }
  };

  const openFile = async (file) => {
    try {
      await openFileAPI(file);
    } catch (err) {
      console.error(err);
      alert("Failed to open file");
    }
  };

  return (
    <div className={`app-container ${darkMode ? "dark" : ""}`}>
      <div className="card">
        <div className="theme-toggle">
          <span>🌙</span>
          <label className="switch">
            <input type="checkbox" checked={darkMode} onChange={toggleTheme} />
            <span className="slider"></span>
          </label>
          <span>☀️</span>
        </div>

        <h1 className="title">Smart File Search</h1>

        <SearchBar
          path={path}
          setPath={setPath}
          query={query}
          setQuery={setQuery}
          handleSearch={handleSearch}
          showPath={showPath}
          setShowPath={setShowPath}
        />

        {loading && <p className="loading">Searching...</p>}

        <ResultsList
          results={results}
          showPath={showPath}
          openFile={openFile}
        />
      </div>
    </div>
  );
}

export default App;
