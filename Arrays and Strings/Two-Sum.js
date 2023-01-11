// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target using javaScript

function twoSum(nums, target) {
  // Create an empty object to store the complement of each number
  const complements = {};

  // Iterate through the array of nums
  for (let i = 0; i < nums.length; i++) {
    // If the current number's complement is already in the complements object, return the indices of the current number and its complement
    if (complements[nums[i]] !== undefined) {
      return [complements[nums[i]], i];
    }
    // Otherwise, add the complement of the current number to the complements object
    complements[target - nums[i]] = i;
  }
}
