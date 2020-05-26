var missingNumber = function(nums) {
    const len = nums.length;
    let sum = (len*(len + 1)) / 2;

    for(let i = 0;i < len;i++){
      sum = sum - nums[i];
    }
    return sum
};
console.log(missingNumber([3,0,1]))
