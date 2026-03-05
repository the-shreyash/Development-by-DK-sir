let age;
age = 18

if(age>=18){
    console.log("vote");
}
else{
    console.log("no")
}

shre();
// console.log(shre)    //it print the whole function
// console.log(shre()) //print the output and undefined (because an function not return anything it's return undefined)
function shre(){
    console.log("hello")
}

const sum = function(a,b){
    return a+b;
}

console.log