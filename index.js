
document.getElementById("btn").onclick=function (){

let d1 = document.getElementById("day").value;
let m1 = document.getElementById("month").value;
let y1 = document.getElementById("year").value;

let date= new Date();
let d2= date.getDate();
let m2= 1+date.getMonth();
let y2= date.getFullYear();
let month =[31,28,31,30,31,30,31,31,30,31,30,31];



if(d1>d2){
    d2 = d2+month[m2-1];
    m2 = m2-1;
}

if(m1>12){
    document.getElementById("hey2").innerText='must be a valid month';
    return false 
}else{
    document.getElementById("hey2").innerText='';
}
if(d1>month[m1-1]){
    document.getElementById("hey").innerText='must be a valid day';
    return false   
}else{
    document.getElementById("hey").innerText='';
}
if(y1>2024){
    document.getElementById("hey3").innerText='must be in the past';
    return false 
}else{
    document.getElementById("hey3").innerText='';
}

if(m1>m2){
    m2=m2+12;
    y2=y2-1;
}

let d= d2-d1;
let m= m2-m1;
let y= y2-y1;

document.getElementById("yearnum")
.innerText=y;
document.getElementById("monthnum")
.innerText=m;
document.getElementById("daynum")
.innerText=d;    

}
