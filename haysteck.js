let strStr = function(haystack, needle) {
    let result = -1
    let arr1 = haystack.split('');
    let arr2 = needle.split('');
    for(let i = 0;i < (arr1.length - arr2.length); i++){
        if(arr1[i] === arr2[0]){
          result = i;
          for(let k = 1;k < arr2.length;k++){
            if(arr2[k] !== arr1[i + k]){
              result = -1
              break
            }
          }
        }
        if(result >= 0){
          break
        }
    }
    return result
};
let haystack = 'dsasidhwy73y3d7y893yd7yhusyhda8syd89sdy98usdyh89suyh89wdy9asdyu892yd73yd93y7d9y83d893dyu2893yd89u3ioduo9u'
let needle =   '73'//['n','d','u','i','3','h']
//console.log(strStr(haystack,needle))


let str = function(haystack, needle) {
  let result = -1;
  let arr1 = haystack.split('');
  let arr2 = needle.split('');
  let i = 0;
  while(i < (arr1.length - arr2.length)){
    if(arr1[i] === arr2[0]){
      result = i;
      let k = 1;
      while(k < arr2.length){
        if(arr2[k] !== arr1[i + k]){
          result = -1
          break
        }
        k++
      }
    }
    if(result >= 0){
      break
    }
    i++
  }
  return result
};
console.log(str(haystack,needle))
