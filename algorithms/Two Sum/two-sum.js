
/**
 * 两数之和
 * 
 * 题目描述：
 * 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整
 * 数，并返回他们的数组下标。
 * 你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。
 * 
 * 示例：
 * 给定 nums = [2, 7, 11, 15], target = 9
 * 因为 nums[0] + nums[1] = 2 + 7 = 9
 * 所以返回 [0, 1]
 * 
 * Source : https://leetcode.com/problems/two-sum/
 */


/**
 * 以 nums = [2, 11, 15, 7], target = 9 为例, 执行过程如下：
 * i = 0 => nums[i] = 2, tmp = 7, a = {2: 0};
 * i = 1 => nums[i] = 11, tmp = -2, a = {2: 0, 11: 1};
 * i = 2 => nums[i] = 15, tmp = -6, a = {2: 0, 11: 1, 15: 2};
 * i = 3 => nums[i] = 7, tmp = 2 => [0, 3];
 * 
 * 复杂度为 O(n)
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  var a = {};
  for (var i = 0, len = nums.length; i < len; i++) {
    var tmp = target - nums[i];
    if (a[tmp] !== undefined) return [a[tmp], i];
    a[nums[i]] = i;
  }
};

// ============  测试start  =================

var nums = [2, 11, 15, 7], target = 9;
twoSum(nums, target); // [0, 3]

// ============  测试end  =================