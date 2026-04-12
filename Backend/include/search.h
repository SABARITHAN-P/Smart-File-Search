#pragma once
#include <string>
#include <vector>
#include <unordered_map>

std::vector<std::string> searchWithRanking(
    std::string query,
    std::unordered_map<std::string, std::vector<std::string>>& indexMap
);