const BASE_URL = "http://localhost:3000";

// 🔍 Search API
export const searchFiles = async (path, query) => {
  const res = await fetch(`${BASE_URL}/search`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ path, query }),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.error || "Search failed");
  }

  return data.results;
};

// 📂 Open file API
export const openFileAPI = async (filePath) => {
  const res = await fetch(`${BASE_URL}/open-file`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ filePath }),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.error || "Failed to open file");
  }

  return data;
};
