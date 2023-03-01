let num = 5;
let str='';
for(let i=0;i<=num;i++){
    for (let j = 0; j < i; j++) 
    {
        str+=' ';
    }
    for (let k=0; k<2*(num-i)-1; k++){
    str+="*";
}
console.log(str);
str='';
console.log();
}