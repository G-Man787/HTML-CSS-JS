"use strict";
const assert = require("assert");
const test = require("./JavascriptExercise");

/*eslint-disable*/

// 1. A porcupine number is a prime number whose last digit is 9 and the next prime number that
// follows it also ends with the digit 9. For example, 139 is a porcupine number because:
// a. it is a prime
// b. it ends in a 9
// c. The next prime number after it is 149 which also ends in 9.
// Write a method named findPorcupineNumber which takes an integer argument n and
// returns the first porcupine number that is greater than n. So findPorcupineNumber(0)
// would return 139 (because 139 happens to be the first porcupine number) and so would
// findPorcupineNumber(138). But findPorcupineNumber(139) would return 409 which
// is the second porcupine number.

describe("porcupine number", function () {
    it("the first porcupine number is 139", function () {
      function findPorcupineNumber(num) {}
      assert.strictEqual(test.findPorcupineNumber(3), 139);
    });
  
    it("the second porcupine number is 409", function () {
      function findPorcupineNumber(num) {}
      assert.strictEqual(test.findPorcupineNumber(139), 409);
    });
  
    it("the first porcupine number is 139", function () {
      function findPorcupineNumber(num) {}
      assert.strictEqual(test.findPorcupineNumber(138), 139);
    });
  });
  
  // 2. Given an array of integers nums and an integer target, return indices of the two numbers such
  // that they add up to target.
  // You may assume that each input would have exactly one solution, and you may not use the
  // same element twice. You can return the answer in any order.
  
  describe("sum to target", function () {
    it("Index of the numbers whose sum is 9 is [0,1]", function () {
      assert.deepStrictEqual(test.addToTarget([2, 7, 11, 15], 9), [0, 1]);
    });
  
    it("Index of the numbers whose sum is 6 is [0,2]", function () {
      assert.deepStrictEqual(test.addToTarget([2, 3, 4], 6), [0, 2]);
    });
  
    it("Index of the numbers whose sum is 6 is [0,1]", function () {
      assert.deepStrictEqual(test.addToTarget([3, 3], 6), [0, 1]);
    });
  });
  
  // 3. Write a function named mostFrequent() that given an array, finds the most frequent element
  // in it. If there are multiple elements that appear maximum number of times, returns any one of
  // them
  
  describe("Most frequent", function () {
    it("The most frequent in the list is 4", function () {
      assert.strictEqual(test.mostFrequent([4, 3, 6, 8, 3, 8, 4, 9, 6, 4]), 4);
    });
  });
  
  // 4. Given an array of integers, write a function that finds the pair in array whose sum is closest to 0.
  // If there are more than one pair, return any pair.
  // For e.g., [4,2, -1,3,-2,-3] → [2,-2]
  
  describe("sum closest to zero", function () {
    it("pair whose sum is closest to zero is [2,-2]", function () {
      assert.deepStrictEqual(test.closestToZero([4, 2, -1, 3, -2, -3]), [2, -2]);
    });
  
    it("pair whose sum is closest to zero is [1, -1] ", function () {
      assert.deepStrictEqual(test.closestToZero([1, 4, -1, -2, -5]), [1, -1]);
    });
  });
  //6. Given two binary strings, return their sum (also a binary string).
  // The input strings are both non-empty and contains only characters 1 and 0.
  // #add_binary
  
  describe("add binary", function () {
    it("adding the binary strings '11' and '1' should give '100 ", function () {
      assert.strictEqual(test.addBinary("11", "1"), "100");
    });
  
    it("adding the binary strings '1010' and '1011' should give '10101 ", function () {
      assert.strictEqual(test.addBinary("1010", "1011"), "10101");
    });
  });
  
  // 7. Given a positive integer, return its corresponding column title as appear in an Excel Sheet.
  // For example:
  // 1 →A, 2→B, 3→C,…,26→z,27→AA, →28->AB, …
  // #excel_sheet_column_title
  
  describe("columnTitle ", function () {
    it("26 should return Z", function () {
      assert.strictEqual(test.columnTitle(26), "Z");
    });
  
    it("28 should return AB", function () {
      assert.strictEqual(test.columnTitle(28), "AB");
    });
  
    it("701 should return ZY", function () {
      assert.strictEqual(test.columnTitle(701), "ZY");
    });
  });
  
  // 9.  A strobogrammatic number is a number that looks the same when rotated 180 degree (looked
  //   upside down)
  //   Write a function to determine if a number is strobogrammatic. The number is represented as
  //   string.
  //   #strobogrammatic_number
  
  describe("strobogrammatic_number", function () {
    it("868 is not a strobogrammatic number", function () {
      assert.strictEqual(test.strobogrammaticNumber("868"), false);
    });
  });
  
  // 10. Given an array containing n distinct numbers taken from 0,1,2,…,n, find the one that is missing
  // from the array.
  // #missing_number
  
  describe("find the missing number", function () {
    it("the missing number from the given array is 2", function () {
      assert.strictEqual(test.missingNumber([3, 0, 1]), 2);
    });
  
    it("the missing number from the given array is 8", function () {
      assert.strictEqual(test.missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]), 8);
    });
  });
  
  // 11. Given a sorted array and a target value, return the index if the target is found. If not, return the
  // index where it would be if it were inserted in order.
  // You may assume no duplicates in the array.
  // #search_insert_position
  
  describe("search_insert_position of target", function () {
    it("5 exists in the given array at index of 2", function () {
      assert.strictEqual(test.searchInsertPosition([1, 3, 5, 6], 5), 2);
    });
  
    it("2 should go in the given array at index of 1", function () {
      assert.strictEqual(test.searchInsertPosition([1, 3, 5, 6], 2), 1);
    });
  
    it("7 should go in the given array at index of 4", function () {
      assert.strictEqual(test.searchInsertPosition([1, 3, 5, 6], 7), 4);
    });
  
    it("0 should go in the given array at index of 0", function () {
      assert.strictEqual(test.searchInsertPosition([1, 3, 5, 6], 0), 0);
    });
  });
  // 13. Given an array of integers and an integer k, find out whether there are two distinct indices i and
  // j in the array such that nums[i] = nums[j] and the absolute difference between i and j is at most
  // k.
  // #contains_duplicate_ii
  
  describe("contains duplicates at indices with max diiference of k", function () {
    it("[1, 2, 3, 1, 2, 3] has duplicate elements whose difference is larger than the given max", function () {
      assert.strictEqual(test.containsDuplicates([1, 2, 3, 1, 2, 3], 2), false);
    });
  });
  // 16. Write a function that takes a string as input and reverse only the vowels of a string.
  // # reverse_vowels_of_a_string
  
  describe("reverse vowels", function () {
    it("given 'hello', reversing the vowels gives 'holle'", function () {
      assert.strictEqual(test.reverseVowels("hello"), "holle");
    });
    it("given 'leetcode', reversing the vowels gives 'leotcede'", function () {
      assert.strictEqual(test.reverseVowels("leetcode"), "leotcede");
    });
  });
  
  // 17. Write a function summaryRanges, such that given a sorted integer array nums, returns the
  // smallest sorted list of ranges that cover all the numbers in the array exactly. That is, each
  // element of nums is covered by exactly one of the ranges, and there is no integer x such that x is
  // in one of the ranges but not in nums.
  // Each range [a,b] in the list should be output as:
  // "a->b" if a != b
  // "a" if a == b
  // #summary_ranges
  
  describe("summary_ranges", function () {
    it("summerize and show range the array of numbers are sorted", function () {
      assert.deepStrictEqual(test.summaryRanges([0, 1, 2, 4, 5, 7]), [
        "0->2",
        "4->5",
        "7",
      ]);
    });
    it("summerize and show range the array of numbers are sorted", function () {
      assert.deepStrictEqual(test.summaryRanges([0, 2, 3, 4, 6, 8, 9]), [
        "0",
        "2->4",
        "6",
        "8->9",
      ]);
    });
  });
  
  // 18. For two strings s and t, we say "t divides s" if and only if s = t + ... + t (t concatenated with itself
  //   1 or more times)
  //   Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.
  //   #greatest_common_divisor_of_strings
  
  describe("greatest_common_divisor_of_strings", function () {
    it("find the greatest common divisor of the strings", function () {
      assert.strictEqual(test.gcfStrings("ABCABC", "ABC"), "ABC");
    });
    it("find the greatest common divisor of the strings", function () {
      assert.strictEqual(test.gcfStrings("ABABAB", "AB"), "AB");
    });
  });