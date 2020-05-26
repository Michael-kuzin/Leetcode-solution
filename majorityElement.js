var majorityElement = function(nums) {
    let maj = 0, count = 1;

    for(let i = 1; i < nums.length;i++){
      if(nums[i] === nums[maj]){
        count++;
      }else{
        count--;
      }
      if(count === 0){
        maj = i;
        count = 1;
      }
    }
    return nums[maj];
};
