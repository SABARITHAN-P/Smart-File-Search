const express = require("express");
const cors = require("cors");
const { execFile } = require("child_process");
const pathModule = require("path");

const app = express();
app.use(cors());
app.use(express.json());

const exePath = pathModule.resolve(
  __dirname,
  "..",
  "Backend",
  "build",
  "app.exe",
);

app.get("/", (req, res) => {
  res.send("Smart File Search API is running");
});

app.post("/search", (req, res) => {
  const { path, query } = req.body;

  execFile(exePath, [path, query], (error, stdout, stderr) => {
    if (error) {
      return res.status(500).json({ error: "Execution failed" });
    }

    const results = stdout.split("\n").filter((line) => line.trim() !== "");

    res.json({ results });
  });
});

app.post("/open-file", (req, res) => {
  const { filePath } = req.body;

  console.log("Opening file:", filePath);

  if (!filePath || filePath.trim() === "") {
    return res.status(400).json({ error: "Invalid file path" });
  }

  execFile("cmd", ["/c", "start", "", filePath], (err) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Failed to open file" });
    }
    res.json({ success: true });
  });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
