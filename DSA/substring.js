let s = "abcabcbb";
let count = 0;
let maxm = 0;
for (let i = 0; i < s.length; i++) {
    count = 1;
    const obj= {[s[i]]:true};
  for (let j = i + 1; j < s.length; j++) {
    if (obj.hasOwnProperty(s[j])) {
      //console.log(count, s[i]);
      if (count > maxm) {
        maxm = count;
      }
     
      count = 0;
      break;
    }
obj[s[j]]=true;
    count = count + 1;
  }
}

console.log(maxm);
