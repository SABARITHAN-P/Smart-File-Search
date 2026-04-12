import "./App.css";

function SearchBar({
  path,
  setPath,
  query,
  setQuery,
  handleSearch,
  showPath,
  setShowPath,
}) {
  return (
    <>
      <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
        <input
          className="input"
          type="text"
          placeholder="Enter directory path"
          value={path}
          onChange={(e) => setPath(e.target.value)}
        />
      </div>

      <div className="search-row">
        <input
          className="input search-input"
          type="text"
          placeholder="Enter search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <button className="button search-btn" onClick={handleSearch}>
          Search
        </button>

        <button
          className="button toggle-btn"
          onClick={() => setShowPath(!showPath)}
        >
          {showPath ? "Hide Path" : "Show Path"}
        </button>
      </div>
    </>
  );
}

export default SearchBar;
