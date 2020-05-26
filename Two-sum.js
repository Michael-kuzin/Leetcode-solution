var twoSum = function(nums, target) {
    let result
    for(let i = 0;i < nums.length;i++) {
        for(let k = i;k < nums.length-1;k++){
           let sum = nums[i] + nums[k + 1]
           if(sum == target){
             result = [i, k + 1]
           }
        }
    }
    return result
};

//console.log(twoSum([1,8],9))

var toSum1 = function(nums,target) {
  let result
  let i = 0;
  while(i < nums.length){
    let k = i;
    while(k < nums.length-1){
      let sum = nums[i] + nums[k + 1]
      if(sum == target){
        result = [i, k + 1]
      }
      k++
    }
    i++
  }
  console.log(typeof result)
  return result
}
console.log(toSum1([1,7,8,4,5],9))
