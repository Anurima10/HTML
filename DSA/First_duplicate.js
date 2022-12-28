// First we want a array of string
// Now iterate a loop to check the element from index 0 to length.
// Run a nested loop starts from index+1 of main loop and end to lenth of array.
// Now we have to compare , before it make every string to standard case(upper/lower) as we dont want a case sensetive match.
// Give a condition if element of parent loop match with child (nested one) loop.
// if it match, print the element and stop the loop.
// if it not match then continue for other elements




let a = ["BankAccount","cat","bankaccount","dog"];
//var b = a.toLowerCase();
for(var i=0;i<=a.length;i++)
{
    for(var j=i+1;j<=a.length;j++)
    {
        a[i]=a[i].toLowerCase();
        a[j]=a[j].toLowerCase();
        if(a[i]==a[j])
        {
            console.log("First duplicate word -",a[i]);
            return
        }
    }
}

