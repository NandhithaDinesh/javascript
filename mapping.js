"use strict"
var arr=[12,7,2,10,3,5]
var cube=arr.map(n=>n**3)
console.log(cube);

// if  num>5 map to num+1 num<5 map to num-1
var narray=arr.map(n=>n>5?n+1:n-1)
console.log(narray);
//filter
var odds=arr.filter(n=>n%2!=0)
console.log(odds);
// reduce
var total=arr.reduce((n1,n2)=>n1+n2)
console.log(total);

var max=arr.reduce((n1,n2)=>n1>n2?n1:n2)
console.log(max);