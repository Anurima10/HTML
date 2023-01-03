let arr = [10,2,8,9,0,7];
console.log("original arr",arr);
arr.shift();
console.log("shift",arr);
arr.shift(3,4);
console.log("shift multiple no effect given parameter",arr);

var g= 10;
arr.unshift();
console.log("giving no parameters unshift",arr);
arr.unshift(3,4,"M",g);
console.log("unshift multiple",arr);

//ways to create array

