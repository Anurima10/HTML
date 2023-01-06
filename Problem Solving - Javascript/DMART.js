
function cart()
{
    const mycart = new Object();
   let arr=[];
   let arr2=[];
return function add (id,name){
arr.push(id);
arr2.push(name);
 mycart.name=arr2;
 mycart.id=arr;
return mycart

}

}

var a = cart();
var result = a(1,"OIL");
result=a(2,"RING");
result=a(4,"AC");
result=a(5,"TV");
result=a(6,"RICE");
result=a(7,"SOAP");
result=a(9,"CHIPS");
result=a(10,"COOKIES");
console.log(result);
