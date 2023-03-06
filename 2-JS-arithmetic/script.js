function multiplyBy(){
    let num1 = document.getElementById("firstnumber").value;
    let num2 = document.getElementById("secondnumber").value;
    document.getElementById("result").innerHTML = num1 * num2;

}
function divideBy(){
    let num1 = document.getElementById("firstnumber").value;
    let num2 = document.getElementById("secondnumber").value;
    document.getElementById("result").innerHTML = num1 / num2;

}
function modulusBy(){
    let num1 = document.getElementById("firstnumber").value;
    let num2 = document.getElementById("secondnumber").value;
    document.getElementById("result").innerHTML = num1 % num2;

}
function subtractBy(){
    let num1 = document.getElementById("firstnumber").value;
    let num2 = document.getElementById("secondnumber").value;
    document.getElementById("result").innerHTML = num1 - num2;

}
function sumBy(){
    let num1 = document.getElementById("firstnumber").value;
    let num2 = document.getElementById("secondnumber").value;
    document.getElementById("result").innerHTML = Number(num1) + Number(num2);

}
