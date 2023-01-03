let a =[3,7,8,9,7,'c',null];
let h = a.push(9); //return length
console.log("h value =",h);
console.log("array of a",a);
a.push(10,undefined);
console.log("after push value",a);
a.pop()
console.log("after pop",a);
const b = a[3];
console.log("assigning to other variable",b);
console.log("try 9th index = ",a[9]);
a.length = 0;
console.log("empty array by length method",a);

let x = [10,9,8,7];
for (var i = 0;i<=x.length;i++)
{
    x.length = x.length-1;
    x.pop();

}
console.log("x array empty by loop pop- ",x);

let y = [10,9,8,4];
y[20]=80;   // will not give error simply insert empty in between
console.log("assigning unbounded index value=",y);
let v = y.pop();
let w= y.push(10,20);
console.log("v =",v,"w =",w);

console.log("trying to access empty = ",y[9]);
