const arr =[1,2,3,4,5,6,7,8];
let arr2 = arr.filter(threemultiple);

console.log("after filtering:",arr2);

function threemultiple(arr)
{
  return arr%3 === 0;
}
const arr3 = arr2.map((item) => (item*2));

console.log("after multiple:", arr3);
