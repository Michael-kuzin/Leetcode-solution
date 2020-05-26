var searchInsert = function(nums, target) {
    for(let index = 0;index < nums.length;index++){
      if(target <= nums[index]){
        return index
      }
    }
    return nums.length;
};
console.log(searchInsert([1,2,3,4,5]),9)
