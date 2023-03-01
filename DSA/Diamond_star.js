let num = 5;
let str='';
for(let i=1;i<=num;i++){
    for(let j=i;j<=num;j++)
    {
        str+=' ';
    }
for (let k=0;k<i*2-1;k++){
    str+="*";
}
console.log(str);
str='';
console.log();
}

let str2='';
for(let i=0;i<=num;i++){
    for (let j = 0; j <=
        i; j++) 
    {
        str2+=' ';
    }
    for (let k=0; k<2*(num-i)-1; k++){
    str2+="*";
}
console.log(str2);
str2='';
console.log();
}