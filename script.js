function getNumbers() {
    const num1 = Number(document.getElementById("num1").value);
    const num2 = Number(document.getElementById("num2").value);

    return { num1, num2 };
}
//added multiplication code 


 multiplication

function add() {
    const { num1, num2 } = getNumbers();
    document.getElementById("result").innerText =

        "Result: " + (num1 + num2);
}

// Added new code for javascript

function subtract() {
    const { num1, num2 } = getNumbers();
    document.getElementById("result").innerText =
        "Result: " + (num1 - num2);
}







       