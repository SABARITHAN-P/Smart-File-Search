import "./App.css";
import ResultItem from "./ResultItem";

function ResultsList({ results, showPath, openFile }) {
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
