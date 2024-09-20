function calc(){
    let a = document.getElementById("num1").value;
    let b = document.getElementById("num2").value;
    let oper = document.getElementById("operation").value;

    let sum = "";

    if(isNaN(a) || isNaN(b)){
        alert("Enter valid numbers for both inputs, my friend");
        return;
    }

    switch (oper) {
        case "+":
            sum = Number(a) + Number(b);
            break;

        case "-":
            sum = Number(a) - Number(b);
            break;
        
        case "*":
            sum = (Number(a) * Number(b)).toFixed(2);
            break;

        case "/":
            if(b == 0){
                alert("Cannot divide by zero, babe")
            }
            sum = (Number(a) / Number(b)).toFixed(2);
            break;
    
        default:
            alert("Insert a valid operation, comrade: + - * /")
            return;
    }

    

    document.getElementById("sum").value = sum;

}