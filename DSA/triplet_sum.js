//run three loops ,add the numbers and match it




let arr = [6,3,12,9,0,4];
let r = 24;
for (i=0;i<arr.length;i++)
{
    for(j=i+1;j<arr.length;j++)
    {
        for(k=j+1;k<arr.length;k++)
        {
            if (arr[i]+arr[j]+arr[k]===r){
            console.log(arr[i],arr[j],arr[k]);
            return 0;
            }
        }
 
    }
}