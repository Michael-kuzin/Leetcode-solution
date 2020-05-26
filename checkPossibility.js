var checkPossibility = function(nums) {
    let result
    let mistakes = 0
    let min = 0
    let max = 0
    for (let i = 1; i <= nums.length-1; i++) {
        if((nums[i] >= nums[i - 1]) && (nums[i] > max) ){
            result = true;
            max = nums[i]
        }else{
            mistakes++
        }
            if(mistakes == 2){
                result = false;
                break;
          }
    }
   return result;
};
let arr = [3,4,2,6];
let result = checkPossibility(arr);
//console.log(result);


let ckeck = function(nums) {
  let mistakes = 0
  let min = 0
  let max = 0
  let i = 1
  while((mistakes < 2) && (i <= nums.length-1)){
    if((nums[i] >= nums[i - 1]) && (nums[i] > max) ){
        max = nums[i]
    }else{
        mistakes++
    }
    i++
  }
  //let result = mistakes < 2 ? true : false;
  let result = mistakes < 2;
 return result;
};

let result1 = ckeck(arr);
console.log(result1);













//copy
var toSum1 = function(nums,target) {
  let result
  let i = 0
  let k = i
  while((i < nums.length) && (k < nums.length-1)){
    let sum = nums[i] + nums[k + 1]
    if(sum == target){
      result = [i,k + 1]
    }
    i++
    k++
  }
  return result
}
console.log(toSum1([1,8],9))
