const mongoose = require("mongoose");
const Question = require("./models/questionModel");

mongoose.connect("mongodb://localhost:27017/gamified_dsa", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const questions = [
  {
    statement: "Given an integer n, return whether it is a prime number.",
    difficulty: "easy",
    testCases: [
      { input: "5", expectedOutput: "true" },
      { input: "4", expectedOutput: "false" },
    ],
  },
  {
    statement: "Implement a function to reverse a linked list.",
    difficulty: "medium",
    testCases: [
      { input: "[1,2,3,4,5]", expectedOutput: "[5,4,3,2,1]" },
    ],
  },
  {
    statement: "Find the missing number in an array containing n distinct numbers taken from 0 to n.",
    difficulty: "easy",
    testCases: [
      { input: "[3,0,1]", expectedOutput: "2" },
      { input: "[9,6,4,2,3,5,7,0,1]", expectedOutput: "8" },
    ],
  },
  {
    statement: "Given a binary tree, return its inorder traversal.",
    difficulty: "medium",
    testCases: [
      { input: "[1,null,2,3]", expectedOutput: "[1,3,2]" },
    ],
  },
  {
    statement: "Implement a function to find the first non-repeating character in a string.",
    difficulty: "easy",
    testCases: [
      { input: "\"leetcode\"", expectedOutput: "l" },
      { input: "\"aabb\"", expectedOutput: "-1" },
    ],
  },
  {
    statement: "Given two strings s and t, determine if they are anagrams of each other.",
    difficulty: "easy",
    testCases: [
      { input: "\"anagram\", \"nagaram\"", expectedOutput: "true" },
      { input: "\"rat\", \"car\"", expectedOutput: "false" },
    ],
  },
  {
    statement: "Find the longest palindromic substring in a given string.",
    difficulty: "medium",
    testCases: [
      { input: "\"babad\"", expectedOutput: "\"bab\"" },
      { input: "\"cbbd\"", expectedOutput: "\"bb\"" },
    ],
  },
  {
    statement: "Merge two sorted linked lists and return it as a new sorted list.",
    difficulty: "medium",
    testCases: [
      { input: "[1,2,4], [1,3,4]", expectedOutput: "[1,1,2,3,4,4]" },
    ],
  },
  {
    statement: "Given a binary tree, find its maximum depth.",
    difficulty: "easy",
    testCases: [
      { input: "[3,9,20,null,null,15,7]", expectedOutput: "3" },
    ],
  },
  {
    statement: "Find the Kth largest element in an unsorted array.",
    difficulty: "medium",
    testCases: [
      { input: "[3,2,1,5,6,4], 2", expectedOutput: "5" },
      { input: "[3,2,3,1,2,4,5,5,6], 4", expectedOutput: "4" },
    ],
  },
  {
    statement: "Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.",
    difficulty: "medium",
    testCases: [
      { input: "[\"MinStack\",\"push\",\"push\",\"push\",\"getMin\",\"pop\",\"top\",\"getMin\"], [[],[-2],[0],[-3],[],[],[],[]]", expectedOutput: "[null,null,null,null,-3,null,0,-2]" },
    ],
  },
  {
    statement: "Find the intersection of two arrays and return the common elements.",
    difficulty: "easy",
    testCases: [
      { input: "[1,2,2,1], [2,2]", expectedOutput: "[2,2]" },
    ],
  },
  {
    statement: "Given a string, find the length of the longest substring without repeating characters.",
    difficulty: "medium",
    testCases: [
      { input: "\"abcabcbb\"", expectedOutput: "3" },
      { input: "\"bbbbb\"", expectedOutput: "1" },
    ],
  },
  {
    statement: "Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.",
    difficulty: "easy",
    testCases: [
      { input: "[1,3,5,6], 5", expectedOutput: "2" },
      { input: "[1,3,5,6], 2", expectedOutput: "1" },
    ],
  },
  {
    statement: "Implement a function to check if a binary tree is balanced.",
    difficulty: "medium",
    testCases: [
      { input: "[3,9,20,null,null,15,7]", expectedOutput: "true" },
      { input: "[1,2,2,3,3,null,null,4,4]", expectedOutput: "false" },
    ],
  },
  {
    statement: "You are given two integers x and y. Compute the power of x raised to y.",
    difficulty: "easy",
    testCases: [
      { input: "2, 3", expectedOutput: "8" },
      { input: "3, 0", expectedOutput: "1" },
    ],
  },
  {
    statement: "Given a list of intervals, merge all overlapping intervals.",
    difficulty: "medium",
    testCases: [
      { input: "[[1,3],[2,6],[8,10],[15,18]]", expectedOutput: "[[1,6],[8,10],[15,18]]" },
    ],
  },
  {
    statement: "Given a linked list, remove the nth node from the end of the list and return its head.",
    difficulty: "medium",
    testCases: [
      { input: "[1,2,3,4,5], 2", expectedOutput: "[1,2,3,5]" },
    ],
  },
  {
    statement: "Find the maximum subarray sum in an integer array.",
    difficulty: "easy",
    testCases: [
      { input: "[-2,1,-3,4,-1,2,1,-5,4]", expectedOutput: "6" },
    ],
  },
  {
    statement: "Determine if a string is a valid palindrome.",
    difficulty: "easy",
    testCases: [
      { input: "\"A man, a plan, a canal: Panama\"", expectedOutput: "true" },
      { input: "\"race a car\"", expectedOutput: "false" },
    ],
  },
  {
    statement: "Given an array of meeting time intervals, find the minimum number of conference rooms required.",
    difficulty: "medium",
    testCases: [
      { input: "[[0,30],[5,10],[15,20]]", expectedOutput: "2" },
    ],
  },
  {
    statement: "Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.",
    difficulty: "medium",
    testCases: [
      { input: "[-2,1,-3,4,-1,2,1,-5,4]", expectedOutput: "6" },
    ],
  },
  {
    statement: "Given an integer array nums, move all 0's to the end while maintaining the relative order of the non-zero elements.",
    difficulty: "easy",
    testCases: [
      { input: "[0,1,0,3,12]", expectedOutput: "[1,3,12,0,0]" },
    ],
  },
  {
    statement: "Given an array of integers and a target, return the indices of the two numbers such that they add up to the target.",
    difficulty: "easy",
    testCases: [
      { input: "[2,7,11,15], 9", expectedOutput: "[0,1]" },
    ],
  },
  {
    statement: "Implement an algorithm to determine if a string has all unique characters.",
    difficulty: "easy",
    testCases: [
      { input: "\"abcde\"", expectedOutput: "true" },
      { input: "\"hello\"", expectedOutput: "false" },
    ],
  },
  {
    statement: "Design a queue using stacks.",
    difficulty: "medium",
    testCases: [
      { input: "[\"MyQueue\", \"push\", \"push\", \"peek\", \"pop\", \"empty\"], [[],[1],[2],[],[],[]]", expectedOutput: "[null,null,null,1,1,false]" },
    ],
  },
  {
    statement: "Write a function that detects if a cycle exists in a linked list.",
    difficulty: "easy",
    testCases: [
      { input: "[3,2,0,-4], pos = 1", expectedOutput: "true" },
      { input: "[1], pos = -1", expectedOutput: "false" },
    ],
  },
  {
    statement: "Given two sorted arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.",
    difficulty: "easy",
    testCases: [
      { input: "[1,2,3,0,0,0], 3, [2,5,6], 3", expectedOutput: "[1,2,2,3,5,6]" },
    ],
  },
  {
    statement: "Given a string containing digits, return all possible letter combinations that the number could represent.",
    difficulty: "medium",
    testCases: [
      { input: "\"23\"", expectedOutput: "[\"ad\",\"ae\",\"af\",\"bd\",\"be\",\"bf\",\"cd\",\"ce\",\"cf\"]" },
    ],
  },
  {
    statement: "Write a function that determines whether a given binary tree is symmetric.",
    difficulty: "easy",
    testCases: [
      { input: "[1,2,2,3,4,4,3]", expectedOutput: "true" },
      { input: "[1,2,2,null,3,null,3]", expectedOutput: "false" },
    ],
  },
  {
    statement: "Find all possible permutations of a list of integers.",
    difficulty: "medium",
    testCases: [
      { input: "[1,2,3]", expectedOutput: "[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]" },
    ],
  },
  {
    statement: "Find the number of islands in a 2D grid of 1s (land) and 0s (water).",
    difficulty: "medium",
    testCases: [
      { input: "[[1,1,0,0,0],[1,1,0,0,0],[0,0,1,0,0],[0,0,0,1,1]]", expectedOutput: "3" },
    ],
  },
  {
    statement: "Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.",
    difficulty: "easy",
    testCases: [
      { input: "[1,2,3,1]", expectedOutput: "true" },
      { input: "[1,2,3,4]", expectedOutput: "false" },
    ],
  },
  {
    statement: "Find the first missing positive integer in an unsorted array.",
    difficulty: "hard",
    testCases: [
      { input: "[1,2,0]", expectedOutput: "3" },
      { input: "[3,4,-1,1]", expectedOutput: "2" },
    ],
  },
  {
    statement: "Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.",
    difficulty: "medium",
    testCases: [
      { input: "[[1,2,3],[4,5,6],[7,8,9]]", expectedOutput: "[1,2,3,6,9,8,7,4,5]" },
    ],
  },
  {
    statement: "Determine if a 9x9 Sudoku board is valid. Only the filled cells need to be validated.",
    difficulty: "medium",
    testCases: [
      { input: "[[\"5\",\"3\",\".\",\".\",\"7\",\".\",\".\",\".\",\".\"],[\"6\",\".\",\".\",\"1\",\"9\",\"5\",\".\",\".\",\".\"],[\".\",\"9\",\"8\",\".\",\".\",\".\",\".\",\"6\",\".\"],[\"8\",\".\",\".\",\".\",\"6\",\".\",\".\",\".\",\"3\"],[\"4\",\".\",\".\",\"8\",\".\",\"3\",\".\",\".\",\"1\"],[\"7\",\".\",\".\",\".\",\"2\",\".\",\".\",\".\",\"6\"],[\".\",\"6\",\".\",\".\",\".\",\".\",\"2\",\"8\",\".\"],[\".\",\".\",\".\",\"4\",\"1\",\"9\",\".\",\".\",\"5\"],[\".\",\".\",\".\",\".\",\"8\",\".\",\".\",\"7\",\"9\"]]", expectedOutput: "true" },
    ],
  },
  {
    statement: "Find the maximum product of two integers in an array.",
    difficulty: "easy",
    testCases: [
      { input: "[1,2,3]", expectedOutput: "6" },
      { input: "[1,5,4,5]", expectedOutput: "25" },
    ],
  },
  {
    statement: "Write an algorithm to rotate an array to the right by k steps.",
    difficulty: "medium",
    testCases: [
      { input: "[1,2,3,4,5,6,7], 3", expectedOutput: "[5,6,7,1,2,3,4]" },
    ],
  },
  {
    statement: "Write a function that reverses words in a string.",
    difficulty: "easy",
    testCases: [
      { input: "\"the sky is blue\"", expectedOutput: "\"blue is sky the\"" },
      { input: "\"  hello world!  \"", expectedOutput: "\"world! hello\"" },
    ],
  },
  {
    statement: "Find the longest consecutive sequence in an unsorted array of integers.",
    difficulty: "hard",
    testCases: [
      { input: "[100,4,200,1,3,2]", expectedOutput: "4" },
    ],
  },
  {
    statement: "Determine if an integer is a palindrome without converting it into a string.",
    difficulty: "easy",
    testCases: [
      { input: "121", expectedOutput: "true" },
      { input: "-121", expectedOutput: "false" },
    ],
  },
  {
    statement: "Write an algorithm to climb stairs. Each time you can climb 1 or 2 steps. In how many distinct ways can you climb to the top?",
    difficulty: "easy",
    testCases: [
      { input: "2", expectedOutput: "2" },
      { input: "3", expectedOutput: "3" },
    ],
  },
  {
    statement: "Write an algorithm to find the minimum path sum in a grid of non-negative numbers.",
    difficulty: "medium",
    testCases: [
      { input: "[[1,3,1],[1,5,1],[4,2,1]]", expectedOutput: "7" },
    ],
  },
  {
    statement: "Given an integer n, generate the nth Fibonacci number.",
    difficulty: "easy",
    testCases: [
      { input: "5", expectedOutput: "5" },
      { input: "10", expectedOutput: "55" },
    ],
  },
  {
    statement: "Given a 2D grid of characters and a word, return true if the word exists in the grid. The word can be constructed from letters of sequentially adjacent cells.",
    difficulty: "medium",
    testCases: [
      { input: "[[\"A\",\"B\",\"C\",\"E\"],[\"S\",\"F\",\"C\",\"S\"],[\"A\",\"D\",\"E\",\"E\"]], \"ABCCED\"", expectedOutput: "true" },
    ],
  },
  {
    statement: "Write an algorithm to check if two strings are one edit away from each other (insert, remove, or replace a character).",
    difficulty: "medium",
    testCases: [
      { input: "\"pale\", \"ple\"", expectedOutput: "true" },
      { input: "\"pales\", \"pale\"", expectedOutput: "true" },
      { input: "\"pale\", \"bale\"", expectedOutput: "true" },
      { input: "\"pale\", \"bake\"", expectedOutput: "false" },
    ],
  },
  {
    statement: "Write a function that checks if a binary tree is a valid binary search tree.",
    difficulty: "medium",
    testCases: [
      { input: "[2,1,3]", expectedOutput: "true" },
      { input: "[5,1,4,null,null,3,6]", expectedOutput: "false" },
    ],
  },
  {
    statement: "Implement a trie (prefix tree) with insert, search, and startsWith functions.",
    difficulty: "medium",
    testCases: [
      { input: "[\"Trie\", \"insert\", \"search\", \"search\", \"startsWith\", \"insert\", \"search\"], [[],[\"apple\"],[\"apple\"],[\"app\"],[\"app\"],[\"app\"],[\"app\"]]", expectedOutput: "[null,null,true,false,true,null,true]" },
    ],
  },
  {
    statement: "Given two strings word1 and word2, return the minimum number of operations required to convert word1 to word2.",
    difficulty: "hard",
    testCases: [
      { input: "\"horse\", \"ros\"", expectedOutput: "3" },
      { input: "\"intention\", \"execution\"", expectedOutput: "5" },
    ],
  },
  {
    statement: "Find the shortest path from the top-left corner to the bottom-right corner of a grid.",
    difficulty: "medium",
    testCases: [
      { input: "[[0,1],[1,0]]", expectedOutput: "2" },
    ],
  },
  {
    statement: "Write a function that takes a string and returns the longest valid parentheses substring.",
    difficulty: "hard",
    testCases: [
      { input: "\"(()\"", expectedOutput: "2" },
      { input: "\")()())\"", expectedOutput: "4" },
    ],
  },
  {
    statement: "Given an array of integers, find the contiguous subarray (containing at least one number) which has the largest sum.",
    difficulty: "medium",
    testCases: [
      { input: "[-2,1,-3,4,-1,2,1,-5,4]", expectedOutput: "6" },
    ],
  },
  {
    statement: "Write an algorithm to find the maximum depth of a binary tree.",
    difficulty: "easy",
    testCases: [
      { input: "[3,9,20,null,null,15,7]", expectedOutput: "3" },
    ],
  },
  {
    statement: "Given a string, find the length of the longest substring without repeating characters.",
    difficulty: "medium",
    testCases: [
      { input: "\"abcabcbb\"", expectedOutput: "3" },
    ],
  },
  {
    statement: "You are given a sorted array and a target value. Write a function to search for the target and return its index.",
    difficulty: "easy",
    testCases: [
      { input: "[1,2,3,4,5,6], 4", expectedOutput: "3" },
    ],
  },
  {
    statement: "Given an integer array nums and an integer k, return the k most frequent elements.",
    difficulty: "medium",
    testCases: [
      { input: "[1,1,1,2,2,3], 2", expectedOutput: "[1,2]" },
    ],
  },
  {
    statement: "Given an integer n, return whether it is a prime number.",
    difficulty: "easy",
    testCases: [
      { input: "5", expectedOutput: "true" },
      { input: "4", expectedOutput: "false" },
    ],
  },
  {
    statement: "Implement a function to reverse a linked list.",
    difficulty: "medium",
    testCases: [
      { input: "[1,2,3,4,5]", expectedOutput: "[5,4,3,2,1]" },
    ],
  },
  {
    statement: "Find the missing number in an array containing n distinct numbers taken from 0 to n.",
    difficulty: "easy",
    testCases: [
      { input: "[3,0,1]", expectedOutput: "2" },
      { input: "[9,6,4,2,3,5,7,0,1]", expectedOutput: "8" },
    ],
  },
  {
    statement: "Given a binary tree, return its inorder traversal.",
    difficulty: "medium",
    testCases: [
      { input: "[1,null,2,3]", expectedOutput: "[1,3,2]" },
    ],
  },
  {
    statement: "Implement a function to find the first non-repeating character in a string.",
    difficulty: "easy",
    testCases: [
      { input: "\"leetcode\"", expectedOutput: "l" },
      { input: "\"aabb\"", expectedOutput: "-1" },
    ],
  },
  {
    statement: "Given two strings s and t, determine if they are anagrams of each other.",
    difficulty: "easy",
    testCases: [
      { input: "\"anagram\", \"nagaram\"", expectedOutput: "true" },
      { input: "\"rat\", \"car\"", expectedOutput: "false" },
    ],
  },
  {
    statement: "Find the longest palindromic substring in a given string.",
    difficulty: "medium",
    testCases: [
      { input: "\"babad\"", expectedOutput: "\"bab\"" },
      { input: "\"cbbd\"", expectedOutput: "\"bb\"" },
    ],
  },
  {
    statement: "Merge two sorted linked lists and return it as a new sorted list.",
    difficulty: "medium",
    testCases: [
      { input: "[1,2,4], [1,3,4]", expectedOutput: "[1,1,2,3,4,4]" },
    ],
  },
  {
    statement: "Given a binary tree, find its maximum depth.",
    difficulty: "easy",
    testCases: [
      { input: "[3,9,20,null,null,15,7]", expectedOutput: "3" },
    ],
  },
  {
    statement: "Find the Kth largest element in an unsorted array.",
    difficulty: "medium",
    testCases: [
      { input: "[3,2,1,5,6,4], 2", expectedOutput: "5" },
      { input: "[3,2,3,1,2,4,5,5,6], 4", expectedOutput: "4" },
    ],
  },
  {
    statement: "Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.",
    difficulty: "medium",
    testCases: [
      { input: "[\"MinStack\",\"push\",\"push\",\"push\",\"getMin\",\"pop\",\"top\",\"getMin\"], [[],[-2],[0],[-3],[],[],[],[]]", expectedOutput: "[null,null,null,null,-3,null,0,-2]" },
    ],
  },
  {
    statement: "Find the intersection of two arrays and return the common elements.",
    difficulty: "easy",
    testCases: [
      { input: "[1,2,2,1], [2,2]", expectedOutput: "[2,2]" },
    ],
  },
  {
    statement: "Given a string, find the length of the longest substring without repeating characters.",
    difficulty: "medium",
    testCases: [
      { input: "\"abcabcbb\"", expectedOutput: "3" },
      { input: "\"bbbbb\"", expectedOutput: "1" },
    ],
  },
  {
    statement: "Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.",
    difficulty: "easy",
    testCases: [
      { input: "[1,3,5,6], 5", expectedOutput: "2" },
      { input: "[1,3,5,6], 2", expectedOutput: "1" },
    ],
  },
  {
    statement: "Implement a function to check if a binary tree is balanced.",
    difficulty: "medium",
    testCases: [
      { input: "[3,9,20,null,null,15,7]", expectedOutput: "true" },
      { input: "[1,2,2,3,3,null,null,4,4]", expectedOutput: "false" },
    ],
  },
  {
    statement: "You are given two integers x and y. Compute the power of x raised to y.",
    difficulty: "easy",
    testCases: [
      { input: "2, 3", expectedOutput: "8" },
      { input: "3, 0", expectedOutput: "1" },
    ],
  },
  {
    statement: "Given a list of intervals, merge all overlapping intervals.",
    difficulty: "medium",
    testCases: [
      { input: "[[1,3],[2,6],[8,10],[15,18]]", expectedOutput: "[[1,6],[8,10],[15,18]]" },
    ],
  },
  {
    statement: "Given a linked list, remove the nth node from the end of the list and return its head.",
    difficulty: "medium",
    testCases: [
      { input: "[1,2,3,4,5], 2", expectedOutput: "[1,2,3,5]" },
    ],
  },
  {
    statement: "Find the maximum subarray sum in an integer array.",
    difficulty: "easy",
    testCases: [
      { input: "[-2,1,-3,4,-1,2,1,-5,4]", expectedOutput: "6" },
    ],
  },
  {
    statement: "Determine if a string is a valid palindrome.",
    difficulty: "easy",
    testCases: [
      { input: "\"A man, a plan, a canal: Panama\"", expectedOutput: "true" },
      { input: "\"race a car\"", expectedOutput: "false" },
    ],
  },
  {
    statement: "Given an array of meeting time intervals, find the minimum number of conference rooms required.",
    difficulty: "medium",
    testCases: [
      { input: "[[0,30],[5,10],[15,20]]", expectedOutput: "2" },
    ],
  },
  {
    statement: "Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.",
    difficulty: "medium",
    testCases: [
      { input: "[-2,1,-3,4,-1,2,1,-5,4]", expectedOutput: "6" },
    ],
  },
  {
    statement: "Given an integer array nums, move all 0's to the end while maintaining the relative order of the non-zero elements.",
    difficulty: "easy",
    testCases: [
      { input: "[0,1,0,3,12]", expectedOutput: "[1,3,12,0,0]" },
    ],
  },
  {
    statement: "Given an array of integers and a target, return the indices of the two numbers such that they add up to the target.",
    difficulty: "easy",
    testCases: [
      { input: "[2,7,11,15], 9", expectedOutput: "[0,1]" },
    ],
  },
  {
    statement: "Implement an algorithm to determine if a string has all unique characters.",
    difficulty: "easy",
    testCases: [
      { input: "\"abcde\"", expectedOutput: "true" },
      { input: "\"hello\"", expectedOutput: "false" },
    ],
  },
  {
    statement: "Design a queue using stacks.",
    difficulty: "medium",
    testCases: [
      { input: "[\"MyQueue\", \"push\", \"push\", \"peek\", \"pop\", \"empty\"], [[],[1],[2],[],[],[]]", expectedOutput: "[null,null,null,1,1,false]" },
    ],
  },
  {
    statement: "Write a function that detects if a cycle exists in a linked list.",
    difficulty: "easy",
    testCases: [
      { input: "[3,2,0,-4], pos = 1", expectedOutput: "true" },
      { input: "[1], pos = -1", expectedOutput: "false" },
    ],
  },
  {
    statement: "Given two sorted arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.",
    difficulty: "easy",
    testCases: [
      { input: "[1,2,3,0,0,0], 3, [2,5,6], 3", expectedOutput: "[1,2,2,3,5,6]" },
    ],
  },
  {
    statement: "Given a string containing digits, return all possible letter combinations that the number could represent.",
    difficulty: "medium",
    testCases: [
      { input: "\"23\"", expectedOutput: "[\"ad\",\"ae\",\"af\",\"bd\",\"be\",\"bf\",\"cd\",\"ce\",\"cf\"]" },
    ],
  },
  {
    statement: "Write a function that determines whether a given binary tree is symmetric.",
    difficulty: "easy",
    testCases: [
      { input: "[1,2,2,3,4,4,3]", expectedOutput: "true" },
      { input: "[1,2,2,null,3,null,3]", expectedOutput: "false" },
    ],
  },
  {
    statement: "Find all possible permutations of a list of integers.",
    difficulty: "medium",
    testCases: [
      { input: "[1,2,3]", expectedOutput: "[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]" },
    ],
  },
  {
    statement: "Find the number of islands in a 2D grid of 1s (land) and 0s (water).",
    difficulty: "medium",
    testCases: [
      { input: "[[1,1,0,0,0],[1,1,0,0,0],[0,0,1,0,0],[0,0,0,1,1]]", expectedOutput: "3" },
    ],
  },
  {
    statement: "Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.",
    difficulty: "easy",
    testCases: [
      { input: "[1,2,3,1]", expectedOutput: "true" },
      { input: "[1,2,3,4]", expectedOutput: "false" },
    ],
  },
  {
    statement: "Find the first missing positive integer in an unsorted array.",
    difficulty: "hard",
    testCases: [
      { input: "[1,2,0]", expectedOutput: "3" },
      { input: "[3,4,-1,1]", expectedOutput: "2" },
    ],
  },
  {
    statement: "Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.",
    difficulty: "medium",
    testCases: [
      { input: "[[1,2,3],[4,5,6],[7,8,9]]", expectedOutput: "[1,2,3,6,9,8,7,4,5]" },
    ],
  },
  {
    statement: "Determine if a 9x9 Sudoku board is valid. Only the filled cells need to be validated.",
    difficulty: "medium",
    testCases: [
      { input: "[[\"5\",\"3\",\".\",\".\",\"7\",\".\",\".\",\".\",\".\"],[\"6\",\".\",\".\",\"1\",\"9\",\"5\",\".\",\".\",\".\"],[\".\",\"9\",\"8\",\".\",\".\",\".\",\".\",\"6\",\".\"],[\"8\",\".\",\".\",\".\",\"6\",\".\",\".\",\".\",\"3\"],[\"4\",\".\",\".\",\"8\",\".\",\"3\",\".\",\".\",\"1\"],[\"7\",\".\",\".\",\".\",\"2\",\".\",\".\",\".\",\"6\"],[\".\",\"6\",\".\",\".\",\".\",\".\",\"2\",\"8\",\".\"],[\".\",\".\",\".\",\"4\",\"1\",\"9\",\".\",\".\",\"5\"],[\".\",\".\",\".\",\".\",\"8\",\".\",\".\",\"7\",\"9\"]]", expectedOutput: "true" },
    ],
  },
  {
    statement: "Find the maximum product of two integers in an array.",
    difficulty: "easy",
    testCases: [
      { input: "[1,2,3]", expectedOutput: "6" },
      { input: "[1,5,4,5]", expectedOutput: "25" },
    ],
  },
  {
    statement: "Write an algorithm to rotate an array to the right by k steps.",
    difficulty: "medium",
    testCases: [
      { input: "[1,2,3,4,5,6,7], 3", expectedOutput: "[5,6,7,1,2,3,4]" },
    ],
  },
  {
    statement: "Write a function that reverses words in a string.",
    difficulty: "easy",
    testCases: [
      { input: "\"the sky is blue\"", expectedOutput: "\"blue is sky the\"" },
      { input: "\"  hello world!  \"", expectedOutput: "\"world! hello\"" },
    ],
  },
  {
    statement: "Find the longest consecutive sequence in an unsorted array of integers.",
    difficulty: "hard",
    testCases: [
      { input: "[100,4,200,1,3,2]", expectedOutput: "4" },
    ],
  },
  {
    statement: "Determine if an integer is a palindrome without converting it into a string.",
    difficulty: "easy",
    testCases: [
      { input: "121", expectedOutput: "true" },
      { input: "-121", expectedOutput: "false" },
    ],
  },
  {
    statement: "Write an algorithm to climb stairs. Each time you can climb 1 or 2 steps. In how many distinct ways can you climb to the top?",
    difficulty: "easy",
    testCases: [
      { input: "2", expectedOutput: "2" },
      { input: "3", expectedOutput: "3" },
    ],
  },
  {
    statement: "Write an algorithm to find the minimum path sum in a grid of non-negative numbers.",
    difficulty: "medium",
    testCases: [
      { input: "[[1,3,1],[1,5,1],[4,2,1]]", expectedOutput: "7" },
    ],
  },
  {
    statement: "Given an integer n, generate the nth Fibonacci number.",
    difficulty: "easy",
    testCases: [
      { input: "5", expectedOutput: "5" },
      { input: "10", expectedOutput: "55" },
    ],
  },
  {
    statement: "Given a 2D grid of characters and a word, return true if the word exists in the grid. The word can be constructed from letters of sequentially adjacent cells.",
    difficulty: "medium",
    testCases: [
      { input: "[[\"A\",\"B\",\"C\",\"E\"],[\"S\",\"F\",\"C\",\"S\"],[\"A\",\"D\",\"E\",\"E\"]], \"ABCCED\"", expectedOutput: "true" },
    ],
  },
  {
    statement: "Write an algorithm to check if two strings are one edit away from each other (insert, remove, or replace a character).",
    difficulty: "medium",
    testCases: [
      { input: "\"pale\", \"ple\"", expectedOutput: "true" },
      { input: "\"pales\", \"pale\"", expectedOutput: "true" },
      { input: "\"pale\", \"bale\"", expectedOutput: "true" },
      { input: "\"pale\", \"bake\"", expectedOutput: "false" },
    ],
  },
  {
    statement: "Write a function that checks if a binary tree is a valid binary search tree.",
    difficulty: "medium",
    testCases: [
      { input: "[2,1,3]", expectedOutput: "true" },
      { input: "[5,1,4,null,null,3,6]", expectedOutput: "false" },
    ],
  },
  {
    statement: "Implement a trie (prefix tree) with insert, search, and startsWith functions.",
    difficulty: "medium",
    testCases: [
      { input: "[\"Trie\", \"insert\", \"search\", \"search\", \"startsWith\", \"insert\", \"search\"], [[],[\"apple\"],[\"apple\"],[\"app\"],[\"app\"],[\"app\"],[\"app\"]]", expectedOutput: "[null,null,true,false,true,null,true]" },
    ],
  },
  {
    statement: "Given two strings word1 and word2, return the minimum number of operations required to convert word1 to word2.",
    difficulty: "hard",
    testCases: [
      { input: "\"horse\", \"ros\"", expectedOutput: "3" },
      { input: "\"intention\", \"execution\"", expectedOutput: "5" },
    ],
  },
  {
    statement: "Find the shortest path from the top-left corner to the bottom-right corner of a grid.",
    difficulty: "medium",
    testCases: [
      { input: "[[0,1],[1,0]]", expectedOutput: "2" },
    ],
  },
  {
    statement: "Write a function that takes a string and returns the longest valid parentheses substring.",
    difficulty: "hard",
    testCases: [
      { input: "\"(()\"", expectedOutput: "2" },
      { input: "\")()())\"", expectedOutput: "4" },
    ],
  },
  {
    statement: "Given an array of integers, find the contiguous subarray (containing at least one number) which has the largest sum.",
    difficulty: "medium",
    testCases: [
      { input: "[-2,1,-3,4,-1,2,1,-5,4]", expectedOutput: "6" },
    ],
  },
  {
    statement: "Write an algorithm to find the maximum depth of a binary tree.",
    difficulty: "easy",
    testCases: [
      { input: "[3,9,20,null,null,15,7]", expectedOutput: "3" },
    ],
  },
  {
    statement: "Given a string, find the length of the longest substring without repeating characters.",
    difficulty: "medium",
    testCases: [
      { input: "\"abcabcbb\"", expectedOutput: "3" },
    ],
  },
  {
    statement: "You are given a sorted array and a target value. Write a function to search for the target and return its index.",
    difficulty: "easy",
    testCases: [
      { input: "[1,2,3,4,5,6], 4", expectedOutput: "3" },
    ],
  },
  {
    statement: "Given an integer array nums and an integer k, return the k most frequent elements.",
    difficulty: "medium",
    testCases: [
      { input: "[1,1,1,2,2,3], 2", expectedOutput: "[1,2]" },
    ],
  },
];

const seedDatabase = async () => {
  await Question.insertMany(questions);
  console.log("Database seeded with questions!");
  mongoose.connection.close();
};

seedDatabase();
