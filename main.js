/*
var box = document.getElementById("inputa");
console.log(box)
document.getElementById('inputa').textContent = ("frooooo");


function clr(){
    box.textContent = (" ")
 }
    
function back(){

}
    
function divide(){
    box.textContent = (box.textContent + "/")
}
    
function asev(){
    box.textContent = (box.textContent + "7")
}
    
function aegt(){
    box.textContent = (box.textContent + "8")
}
    
function anin(){
    box.textContent = (box.textContent + "9")
}
    
function multi(){
    box.textContent = (box.textContent + "*")
}
    
function afor(){
    box.textContent = (box.textContent + "4")
}
    
function afiv(){
    box.textContent = (box.textContent + "5")
}
    
function asix(){
    box.textContent = (box.textContent + "6")
 }
    
function sub(){
    box.textContent = (box.textContent + "-")
}
    
function aone(){
    box.textContent = (box.textContent + "1")
}
    
function atwo(){
    box.textContent = (box.textContent + "2")
}
    
function atre(){
    box.textContent = (box.textContent + "3")
}
    
function add(){
    box.textContent = (box.textContent + "+")
}
    
function zero(){
    box.textContent = (box.textContent + "0")
}
    
function deci(){
    box.textContent = (box.textContent + ".")
}

function solve(){
    console.log(box.textContent)
    var nam = box.textContent
    console.logMath.floor(nam)
    var solution = Math.floor(nam)
    console.log(solution)
}
*/

const inp = document.getElementById('result')

function ada(value){
    inp.value += value;
}

function solu(){
    inp.value = eval(inp.value);
}

function clean() {
    inp.value = '';
}