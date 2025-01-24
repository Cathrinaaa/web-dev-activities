function plus() {
    const num1 = document.getElementById('display1').value;
    const num2 = document.getElementById('display2').value;
    const ope = document.getElementById('operator').value="+";
    let ans;
    
    if (ope == "+") {
        ans = Number(num1) + Number(num2);
        document.getElementById('display2').value=ans;
        document.getElementById('display1').value="";
    }
    
    
}
function minus() {
    const ope = document.getElementById('operator').value="-";
    const num1 = document.getElementById('display1').value;
    const num2 = document.getElementById('display2').value;
    
    let ans;
    if (ope == "-") {
        ans = Number(num1) - Number(num2);
        document.getElementById('display2').value=ans;
        document.getElementById('display1').value="";
        
        
    }
}
function times() {
    const ope = document.getElementById('operator').value="x";
    const num1 = document.getElementById('display1').value;
    const num2 = document.getElementById('display2').value;
    let ans;
    if (ope == "x") {
        ans = Number(num1) * Number(num2);
        document.getElementById('display2').value=ans;
        document.getElementById('display1').value="";
    }
}
function divide() {
    const ope = document.getElementById('operator').value="/";
    const num1 = document.getElementById('display1').value;
    const num2 = document.getElementById('display2').value;

    let ans;
    if (ope == "/") {
        ans = Number(num2) / Number(num1);
        document.getElementById('display2').value=ans;
        document.getElementById('display1').value="";
        
    }
}
function equal(){
    const num1 = document.getElementById('display1').value;
    const num2 = document.getElementById('display2').value;
    const ope = document.getElementById('operator').value;

    let ans;
    if (ope == "+"){
        ans = Number(num2) + Number(num1);    
    }
    if (ope == "-"){
        ans = Number(num2) - Number(num1);
    }
    if (ope == "x"){
        ans = Number(num2) * Number(num1);
    }
    if (ope == "/"){
        ans = Number(num2) / Number(num1);
    }
    
    document.getElementById('display1').value=ans;
    document.getElementById('display2').value="";
    document.getElementById('operator').value="";
};