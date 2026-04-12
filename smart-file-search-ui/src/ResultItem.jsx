import "./App.css";

function ResultItem({ file, showPath, openFile }) {
  const fileName = file.split("\\").pop();

  return (
    <li className="result-item">
      <span className="file-name" onClick={() => openFile(file)}>
        {fileName}
      </span>

      {showPath && (
        <>
          <br />
          <span className="file-path">{file}</span>
        </>
      )}
    </li>
  );
}

export default ResultItem;
