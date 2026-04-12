#pragma once
#include <unordered_map>
#include <vector>
#include <string>

void indexFiles(std::string path, 
    std::unordered_map<std::string, std::vector<std::string>> &indexMap);