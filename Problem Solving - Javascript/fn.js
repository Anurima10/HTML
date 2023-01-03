function myfn(obj,name)
{
return "name" in obj;
}

let obj={
    name:"anu",
    city:"vds"
}
console.log(myfn(obj,"name"));
