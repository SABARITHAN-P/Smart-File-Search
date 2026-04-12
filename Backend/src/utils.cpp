#include "../include/utils.h"
#include <cctype>

using namespace std;

vector<string> tokenize(string filename) {
    vector<string> words;
    string current_word = "";

    for (char c : filename) {
        if (isalnum(c)) {
            current_word += tolower(c);
        } else {
            if (!current_word.empty()) {
                words.push_back(current_word);
                current_word.clear();
            }
        }
    }

    if (!current_word.empty()) {
        words.push_back(current_word);
    }

    return words;
}