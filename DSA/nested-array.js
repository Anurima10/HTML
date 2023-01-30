//create a recursive function
//iterate a loop give condition as element with have type number will add and store in a sum variable.
//for checking nested array logic check with object prototype.

	var inputArray = [1, 2, [3, [4], [5, 6]], [7]]; // Input 
	console.log(nestedArraySum(inputArray)); 


function nestedArraySum(arr){ 
	var sum = 0; 
	for(var i=0; i<arr.length; i++){ 
		if(typeof arr[i] === "number"){
			sum += arr[i]; 
		} 
		else if(Object.prototype.toString.call(arr[i]) === '[object Array]'){ // else if it's an array recursively call the nestedArraySum() function 
			sum += nestedArraySum(arr[i]); 
		} 
	} 
	return sum; 
} 
 
