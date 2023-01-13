let srt = "This is a string";
console.log(srt);
let position = srt.indexOf('is');
console.log(position);
position = srt.lastIndexOf('is');
console.log(position);
let substr = srt.slice(1,6);
console.log(substr);
let substr1 = srt.substring(1,4);
console.log(substr1);
let substr2 = srt.substr(1,5);
console.log(substr2);
let replace = srt.replace('string','Huzaifa');
console.log(replace);

console.log(srt.toUpperCase());
console.log(srt.toLowerCase());

let newstring = srt.concat('String');
console.log(newstring);

let strWWS = "    this content     string   ";
console.log(strWWS);
console.log(strWWS.trim());


let char3 = srt.charAt(3);
console.log(char3);

// document.getElementById('box').innerHTML = `<b>this is a heaing</b>`