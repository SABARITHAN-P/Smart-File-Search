import "./App.css";
import ResultItem from "./ResultItem";

function ResultsList({ results, showPath, openFile, loading, hasSearched }) {
  if (!loading && hasSearched && results.length === 0) {
    return (
      <div className="empty-state">
        <p className="empty-title">No results found</p>
        <p className="empty-subtitle">
          Try adjusting your search or check the directory path.
        </p>
      </div>
    );
  }

  return (
    <ul className="results">
      {results.map((file, index) => (
        <ResultItem
          key={index}
          file={file}
          showPath={showPath}
          openFile={openFile}
        />
      ))}
    </ul>
  );
}

export default ResultsList;
