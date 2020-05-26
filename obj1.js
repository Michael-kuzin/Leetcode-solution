'use strict'
 let arr = [
  {
    type:"cat",
    name:"Barsik",
    color:"black"
  },
  {
    type:"cat",
    name:"Jo",
    color:"red"
  },
  {
    type:"dog",
    name:"Sharik",
    color:"white"
  },
];
// let obj = {
//   cat:[{type:"",color:""}],
//   dog:[]

// }
// let arrToobj = function(arr){
//   let obj = {};
//    arr.forEach((item, i) => {
//      if(item.type){
//        if (obj[item.type] === undefined){
//          obj[item.type] = [item]
//        } else {
//          obj[item.type].push(item)
//        }
//       console.log(item.type)
//      }
//    });
//    return obj;
// }
//
// console.log(arrToobj(arr));
//
// let arrToobj = function(arr){
//     let obj = {};
//     arr.reduce(function(result, curr) {
//
//     },{});
//     return obj;
// }
// console.log(arrToobj(arr));

function temp(accumulator, currentValue) {
  console.log(accumulator)
    return accumulator + currentValue.x;
}

var initialValue = 0;
var sum = [{x: 1}, {x:2}, {x:3}].reduce(temp, initialValue)
// sum == 6
console.log(sum);
