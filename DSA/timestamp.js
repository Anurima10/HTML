const badgeTimes = [
    ["Paul", "1355"],
    ["Jennifer", "1910"],
    ["Jose", "835"],
    ["Jose", "830"],
    ["Paul", "1315"],
    ["Chloe", "0"],
    ["Chloe", "1910"],
    ["Jose", "1615"],
    ["Jose", "1640"],
    ["Paul", "1405"],
    ["Jose", "855"],
    ["Jose", "930"],
    ["Jose", "915"],
    ["Jose", "730"],
    ["Jose", "940"],
    ["Jennifer", "1335"],
    ["Jennifer", "730"],
    ["Jose", "1630"],
    ["Jennifer", "5"],
    ["Chloe", "1909"],
    ["Zhang", "1"],
    ["Zhang", "10"],
    ["Zhang", "109"],
    ["Zhang", "110"],
    ["Amos", "1"],
    ["Amos", "2"],
    ["Amos", "400"],
    ["Amos", "500"],
    ["Amos", "503"],
    ["Amos", "504"],
    ["Amos", "601"],
    ["Amos", "602"],
    ["Paul", "1416"]
  ];
  const obj = { }

  for(let i=0;i<badgeTimes.length;i++)
  {
const mykey = badgeTimes[i][0];
const myval = Number(badgeTimes[i][1]);

if(!obj.hasOwnProperty(mykey)){
obj[mykey]=myval; //it will create new key value if already not present
}
if (myval>obj[mykey])
{
    obj[mykey]=myval;
}


//console.log(badgeTimes[i][1],badgeTimes[i][0]);
  }

  console.log(obj);
  let brr=[];
  let arr2=[],temp=0,temp2=0;
  i=0;
  let count = 0;

  for (let key in obj)
  {count ++;
    arr2[i]=obj[key];
    brr[i]=key;
    
    i++;
  }

  for (i=0;i<=count;i++)
  {
    for(j=i+1;j<count;j++)
    {
        if (arr2[i] < arr2[j]) {
        temp = arr2[i];
        arr2[i] = arr2[j];
        arr2[j] = temp; 

        temp2 = brr[i];
        brr[i] = brr[j];
        brr[j] = temp2;
    }
}
  }

  console.log("recent 3 timestamps :");
console.log(brr[0],brr[1],brr[2]);


