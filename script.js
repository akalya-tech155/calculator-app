function getNumbers() {
    const num1 = Number(document.getElementById("num1").value);
    const num2 = Number(document.getElementById("num2").value);

    return { num1, num2 };
}



//add division code

function divide() {
    const { num1, num2 } = getNumbers();
    document.getElementById("result").innerText =
        "Result: " + (num1 / num2);
}
