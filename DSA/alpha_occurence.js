/*Algorithm :
- First convert the string to identical case upper or lower ,so the conditions would be satisfied for all.
- Create a function to check the testcases i.e input should be string with no special characters or numbers.
- If the input paes the testcase, call a function to check the occurence of characters.
- For this create a obj which will store the alphabet as key and count of alpha as value. Iterate a loop for this.
- Now after storing the values in obj, find the maximum value.
- for this create variable and intialise with zero.
- if value is greater than variable, then change it with max value.
- At the end print the key and higher count.

NOTE : object automatically handle the below "a" case as if key is already present then it will be overwrite by updated values in object.
 case : aaaabbaa - first "a" count is 4
                   Then again "a" key comes, so at last the count of "a" becomes 2.

*/
// input checking (valid string)
function check_string (input){
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    const Numeral = input.match(/(\d+)/)
    if (input.length == 0){
        console.log("Please provide your input");
    }

else if(specialChars.test(input) == true){
    console.log("please enter valid input without special characters");
}
    else if (Numeral){
        console.log("please enter only alphabets");
    }

    else {

        occurance(input);
    }
    
}

// main logic
function occurance(input){
    let count = 0;
    var objt = { };
    let k='';
    for(i=0;i<=input.length;i++){
       
        for(j=i;j<input.length;j++){
            //console.log("i",i);
            //console.log("j",j);
            if(input[i]==input[j]){
                count=count+1;
            }
            else{
                k=input[i];

objt[k]=count;
//console.log(objt);
count = 0;
i=j;
j--;
            }
        }
    }
    console.log(objt);
    let max= 0;
    let Mkey='';
    for (let key in objt){
        value = objt[key];
        if(value>max){
            max = value;
           Mkey = key;
        }
    }
   // const Mkey = getObjectKey(objt,"m");
    console.log("character is :",Mkey);
    console.log("count is :",max);
}

let input1 = "aaAabbaacccccccccde"
let input = input1.toLowerCase();
check_string(input);