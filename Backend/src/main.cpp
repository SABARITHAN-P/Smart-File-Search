#include <iostream>
#include <filesystem>
#include <unordered_map>
#include <vector>
#include <cstdlib>
#include <limits>
#include "../include/indexer.h"
#include "../include/search.h"

using namespace std;
namespace fs = std::filesystem;

int main(int argc, char* argv[]) {

    unordered_map<string, vector<string>> indexMap;

    // API MODE
    if (argc >= 3) {
        string path = argv[1];
        string query = argv[2];

        if (!fs::exists(path)) {
            cout << "Invalid path\n";
            return 0;
        }

        indexFiles(path, indexMap);
        vector<string> results = searchWithRanking(query, indexMap);

        for (const auto& file : results) {
            cout << file << endl;
        }

        return 0;
    }

    // CLI MODE
    string path;
    cout << "Enter directory to index: ";
    getline(cin, path);

    if (!fs::exists(path)) {
        cout << "Invalid path!\n";
        return 0;
    }

    cout << "Indexing files...\n";
    indexFiles(path, indexMap);
    cout << "Indexing completed!\n";

    while (true) {
        string query;

        cout << "\nEnter search (or type 'exit'): ";
        getline(cin, query);

        if (query.empty()) continue;
        if (query == "exit") break;

        vector<string> results = searchWithRanking(query, indexMap);

        if (results.empty()) {
            cout << "No results found\n";
            continue;
        }

        // Show indexed results
        for (int i = 0; i < results.size(); i++) {
            cout << i + 1 << ". "
                 << fs::path(results[i]).filename().string()
                 << endl;
        }

        // SAFE INPUT HANDLING
        int choice;

        while (true) {
            cout << "Enter file number to open (0 to skip): ";

            if (cin >> choice) {
                break;
            } else {
                cout << "Invalid input! Please enter a number.\n";
                cin.clear();
                cin.ignore(numeric_limits<streamsize>::max(), '\n');
            }
        }

        cin.ignore(); // clear newline

        // RANGE CHECK
        if (choice < 0 || choice > results.size()) {
            cout << "Invalid choice!\n";
            continue;
        }

        if (choice > 0) {
            string filePath = results[choice - 1];

#ifdef _WIN32
            system(("start \"\" \"" + filePath + "\"").c_str());
#else
            system(("xdg-open \"" + filePath + "\"").c_str());
#endif
        }
    }

    return 0;
}