let obj ={
    city:"bhpl",
    place :"vds",
    b:"90"
};
let i = "b"
obj[i]="45";
obj[i]="i";
obj["a"]="18";
for (let key in obj){
    value = obj[key];
    console.log(value);
}