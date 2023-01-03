/*algorithm

- first check if input is all alphabet or not.
- check condition 65 to 90 (uppercase) & 97 to 122 (lowercase).
- If it is not in the given range. return message as not an alphabet.
- If its alphabet then check the vowel give condition in OR statement.(a,e,i,o,u)
- If condition not true it will run else part giving output as consonent.
*/



const strinput = 'A';
const check=charCodeAt(strinput);
console.log(check);
if ((check>=65 && check<=90) || (check>=97 && check<=122))
{
 if(strinput==='a' || strinput==='e' || strinput==='i' || strinput==='o' || strinput==='u' || strinput==='A' ||strinput==='E' || strinput==='I' ||strinput==='O' || strinput==='U')
{
    console.log("vowel");

}
else{
    console.log("consonent"); 
}
}

else{
    console.log("not valid");  
}

