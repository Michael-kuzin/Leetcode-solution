const removeElement1 = (nums, val) => {
    let start = 0
    let end = nums.length - 1
    let count = 0

    while (start <= end) {
        if(nums[start] === val) {
            nums.splice(start,1)
            nums.push(val)
            end--
        } else if (nums[start] !== val) {
            count++
            start++
        }
    }

    return count
};
//console.log(removeElement1([0,1,2,2,3,0,4,2],2))

const removeElement2 = function(nums,val) {
      if(nums.indexOf(val) >= 0){
        nums.splice(nums.indexOf(val),1);
        return  removeElement2(nums,val);
      } else {
        return nums.length
      }
}

let result = removeElement2([0,1,2,2,3,0,4,2],2)
console.log(result)





const removeElement2 = function(nums,val) {
    let temp = 0;
    if(nums.indexOf(val) >= 0){
        let index = nums.indexOf(val);
        temp = temp + index;
        nums.splice(index,1);
        temp = temp + removeElement2(nums.splice(index),val);
    } else {
        temp = nums.length
    }
    return temp
};

let result = removeElement2([0,2,6,7,7,2],2);
console.log(result);
