# 🔍 Smart File Search Engine

A high-performance **full-stack file search system** that enables fast and efficient file discovery using a **C++ indexing engine**, **Node.js API**, and a modern **React UI**.

---

## 🚀 Overview

This project provides a **fast, scalable, and user-friendly file search system** for large directories.

It combines:

- ⚡ C++ for high-performance indexing and search  
- 🌐 Node.js for API integration  
- 🎨 React for an interactive UI  

---

## ✨ Features

### 🔍 Search Capabilities
- Keyword-based file search  
- Multi-word query support (e.g., `report final`)  
- File type filtering (e.g., `report pdf`)  
- Relevance-based ranking of results  

---

### 📂 File Handling
- Recursive directory traversal  
- Efficient indexing using an inverted index  
- Skips unnecessary folders (`node_modules`, `.git`, `build`)  

---

### ⚡ Performance
- O(1) average lookup using hash maps  
- Priority queue-based ranking  
- Optimized traversal for large datasets  

---

### 🌐 Full Stack Integration
- REST API connecting C++ engine with frontend  
- React UI for seamless interaction  
- Users can **open files directly by clicking results in the UI**  

---

### 🎨 Frontend Features
- Responsive UI design  
- Clean, component-based structure  
- Displays file name and path clearly  

---

## 🛠 Tech Stack

### 🔹 Core Engine
- C++ (STL)
- std::filesystem
- unordered_map, vector, priority_queue

### 🔹 Backend
- Node.js
- Express.js
- Child Process API (exec)

### 🔹 Frontend
- React (Vite)
- JavaScript (ES6+)
- CSS (custom styling)

---

## 🧠 Core Concepts

### Data Structures
- Inverted Index → unordered_map<string, vector<string>>  
- Dynamic storage → vector  
- Ranking → priority_queue  

### Algorithms
- String tokenization  
- Hash-based indexing  
- Keyword frequency ranking  

### System Design
- Modular architecture (C++ + API + UI)  
- Separation of concerns  
- Scalable and maintainable structure  

---

## 📁 Project Structure

```
SmartFileSearch/
│
├── Backend/
│   ├── src/
│   │   ├── main.cpp
│   │   ├── indexer.cpp
│   │   ├── search.cpp
│   │   ├── utils.cpp
│   │
│   ├── include/
│   │   ├── indexer.h
│   │   ├── search.h
│   │   ├── utils.h
│   │
│   └── build/
│       └── app.exe
│
├── server/
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── main.jsx
│   │   ├── index.css
│   │   │
│   │   ├── api/
│   │   │   └── api.js
│   │   │
│   │   ├── SearchBar.jsx
│   │   ├── ResultsList.jsx
│   │   └── ResultItem.jsx
│
└── README.md
```

---

## ⚙️ Setup Instructions

### 🔹 1. Clone Repository

```bash
git clone <your-repo-link>
cd SmartFileSearch
```

---

### 🔹 2. Backend (C++ Engine)

Compile:

```bash
g++ src/*.cpp -o build/app
```

Run CLI Mode:

```bash
./build/app
```

Run API Mode:

```bash
./build/app "<directory_path>" "<search_query>"
```

Example:

```bash
./build/app "C:\Users\Desktop" "report pdf"
```

---

### 🔹 3. Node.js API

```bash
cd server
npm install
node server.js
```

Runs on:

```
http://localhost:3000
```

---

### 🔹 4. Frontend (React)

```bash
cd frontend
npm install
npm run dev
```

Open:

```
http://localhost:5173
```

---

## 📡 API Endpoints

### 🔍 Search Files
```
POST /search
```

### 📂 Open File
```
POST /open-file
```

---

## 📈 Performance

- Efficient for medium to large directories  
- Fast search using indexed data  
- Reduced traversal overhead  
- Near real-time query response  

---

## 👨‍💻 Author

**Sabarithan P**