#include "../include/search.h"
#include "../include/utils.h"
#include <queue>
#include <filesystem>
#include <unordered_map>
#include <vector>

using namespace std;
namespace fs = std::filesystem;

vector<string> searchWithRanking(string query, unordered_map<string, vector<string>>& indexMap) {

    unordered_map<string, int> scoreMap;
    priority_queue<pair<int, string>> pq;

    vector<string> queryWords = tokenize(query);

    if (queryWords.empty()) {
        return {};
    }

    string fileType = "";
    if (queryWords.size() > 1) {
        fileType = queryWords.back();
        queryWords.pop_back();
    }

    for (const string& word : queryWords) {

        for (const auto& entry : indexMap) {
            const string& indexedWord = entry.first;

            //  PARTIAL MATCH CONDITION
            if (indexedWord.find(word) != string::npos) {

                for (const string& file : entry.second) {

                    if (!fileType.empty()) {
                        if (fs::path(file).extension() != "." + fileType) continue;
                    }

                    scoreMap[file] += 10;
                }
            }
        }
    }

    if (scoreMap.empty()) {
        return {};
    }

    for (const auto& entry : scoreMap) {
        pq.push({entry.second, entry.first});
    }

    vector<string> results;

    while (!pq.empty()) {
        results.push_back(pq.top().second);
        pq.pop();
    }

    return results;
}