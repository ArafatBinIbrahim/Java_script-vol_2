// item 1
var number1 = 5;
var number2 = 6;
var result1 = number1 + number2;

function showResultVar(){
    document.getElementById('ver').innerHTML= result1;
}
// item 2
let number3 = 70;
let number4 = 80;
let result3 = number3 + number4;

function showResultLet(){
    document.getElementById('let').innerHTML=result3;
}
// item 3
const fixed = 100;

function showResultConst(){
    document.getElementById('const').innerHTML=fixed;
}
// item 4
let number5, number6;

number5 = 20;
number6 = 90;
number5 += number6;

function showLetResult(){
    document.getElementById('letResult').innerHTML=number5;
}
// item 5
var number8, number9;

number8 = 50;
number9 = 80;
number8 += number9;

function showVarResult(){
    document.getElementById('varResult').innerHTML=number8;
}
// item 6
let number10 = 70;
let number11 = 80;
number10 += number11;

function plusResult(){
    document.getElementById('plus').innerHTML=number10;
}
// item 7
let number12 = 150;
let number13 = 40;
number12 -= number13;

function minusResult(){
    document.getElementById('minus').innerHTML=number12;
}
// item 8
let number14 = 70;
let number15 = 80;
number14 *= number15;

function count(){
    document.getElementById('count').innerHTML=number14;
}
// item 9
let number16 = 90;
let number17 = 80;
number16 /= number17;

function fraction(){
    document.getElementById('fraction').innerHTML=number16;
}
// item 10
let number18 = 20;
let number19 = 20;
result = number18 == number19;

function equlTrue(){
    document.getElementById('equlTrue').innerHTML=result;
}
// item 11
let number20 = 10;
let number21 = 20;
result2 = number20 == number21;

function equlFalse(){
    document.getElementById('equlFalse').innerHTML=result2;
}
// item 12
let number22 = 20;
let number23 = "20";
show = number22 == number23;

function equlResult(){
    document.getElementById('equlResult').innerHTML=show;
}
// item 13
let number24 = 50;
let number25 = 50;
let shResult;
shResult = number24 === number25;

function indt(){
    document.getElementById('idnt').innerHTML= shResult;
}
// item 14
let text1 = "abc";
let text2 = "abc";
textResult = text1 === text2;

function resutlText(){
    document.getElementById('textResulr').innerHTML=textResult;
}
//  item 15
let number26 = 10;
let text3 = "text";
showFalse = number26 === text3;

function falseShow(){
    document.getElementById('showFalse').innerHTML=showFalse;
}
// item 16
function mouseEnter(){
    document.getElementById('box1').style.borderRadius="50%";
}
// item 17
function mouseLeave(){
    document.getElementById('box2').style.borderRadius="0%";
}
// item 18
function mouseOver(){
    document.getElementById('box3').style.borderRadius="20px";
}
// item 19
function dblClick(){
    document.getElementById('box4').style.display="block";
}
// item 20
let cars =["Lamborghini","BMW",0,true,false];

function carsResult(){
    document.getElementById('cars').innerHTML=cars[1];
}
