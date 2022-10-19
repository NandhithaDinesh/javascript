//var
//let
//const

// var cname="luminar technolab";
// console.log(cname);

// for(var i=1;i<=5;i++){

// }
// console.log(i);
// ......................................................
// var a=10
// if(a>0){
//     console.log(`${a} positive`);
// }
// else if(a<0){
//     console.log(`${a} negative`);
// }
// else{
//     console.log(`${a} zero`);
// }
// ......................................................
// var num=4
// console.log(num%2==0?"even":"odd");
// ......................................................
// var i=1
// while(i<=10){
//     console.log(i);
//     i++;
// }
// ..........................................................
// for(let i=0;i<=10;i++){
//     console.log(i);
// }
// ..................................
// var num=7
// var isPrime=true
// for(let i=2;i<num;i++){
//     if(num%2==0){
//         isPrime=false
//         break
//     }
// }
// console.log(isPrime?"prime number":"not prime");
// ........................................................
// function addNum(n1,n2) {
//     return n1+n2

// }
// console.log(addNum(10,20));

// function cube(num){
//     return num*3
// }
// console.log(cube(3));
//...........................................................
// function smartSub(n1,n2){
//     return n1>n2?n1-n2:n2-n1
// } 
// console.log(smartSub(12,98));
// ..................................................
// var addNums=(n1,n2)=>n1+n2
// console.log(addNums(10,20));

// var mulNums=(n1,n2)=>n1*n2
// console.log(mulNums(10,20));

// var divNums=(n1,n2)=>n1/n2
// console.log(divNums(10,20));
// ......................................................
// var num=10
// var num1="10"
// console.log(num==num1); //compairing the content 
// console.log(num===num1);//strict match coercion
// ......................................................
// var scores=[100,34,56,67,89,20];
// for(let score of scores){  //if we use in instead of of the index position of elements will be printed
//     console.log(score);
// }
//........................................................
var scores=[100,56,78,34,90,1110,45,23,34]
// scores.sort((n1,n2)=>n1<n2?-1:1)
// console.log(scores);
// scores.sort((n1,n2)=>n1>n2?-1:1)//ascending
// console.log(scores);
// scores.sort((n1,n2)=>n1-n2)//another method
// console.log(scores);
// scores.sort((n1,n2)=>n2-n1)
// console.log(scores);
// scores.push(1000)
// console.log(scores);
// scores.pop()
// console.log(scores);
// ................................................
// var student={
//     name:"nandhitha",
//     roll_no:34,
//     dept:"ca"
// }
// console.log(student.name);
// student["mark"]=60
// console.log(student);
// student.roll_no=45
// console.log(student);
// console.log("gender" in student);
// ....................................................
// word count
// var text="hello hai hello hai";
// var words=text.split(" ")
// var wc={}
// for(let w of words){
//     if(w in wc){
//         wc[w]+=1
//     }
//     else{
//         wc[w]=1
//     }
// }
// console.log(wc);
//...................................................................
var text="hello hai hello hai";
var wc={}
text.split(" ").map(w=>w in wc ? wc[w]+=1 : wc[w]=1)
console.log(wc);