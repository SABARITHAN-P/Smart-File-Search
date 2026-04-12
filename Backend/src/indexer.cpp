#include "../include/indexer.h"
#include "../include/utils.h"
#include <filesystem>
#include <algorithm>
#include <iostream>

using namespace std;
namespace fs = std::filesystem;

void indexFiles(string path, unordered_map<string, vector<string>> &indexMap) {
    try {
        for (const auto &file : fs::recursive_directory_iterator(
        path, fs::directory_options::skip_permission_denied)) {

            string full = file.path().string();
            
            if (full.find("node_modules") != string::npos ||
                full.find(".git") != string::npos ||
                full.find("build") != string::npos ||
                full.find("dist") != string::npos) {
                    continue;
            }

            if (file.is_regular_file()) {

                string file_name = file.path().filename().string();
                string full_path = file.path().string();

                vector<string> tokens = tokenize(file_name);

                for (const string &word : tokens) {
                    if (find(indexMap[word].begin(), indexMap[word].end(), full_path) 
                        == indexMap[word].end()) {
                        indexMap[word].push_back(full_path);
                    }
                }
            }
        }
    } catch (const fs::filesystem_error &e) {
        cout << "Error: " << e.what() << endl;
    }
}