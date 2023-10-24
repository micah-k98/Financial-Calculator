"use strict"

let depositAmount;
let interestRate;
let termLength;
let futureValue;
let interestEarned;

window.onload = init;

function init() {
    document.getElementById("calculateButton").onclick = calculateButton;
    document.getElementById("clearButton").onclick = clearButton;
}

function calculateButton() {
    depositAmount = parseFloat(document.getElementById("depositAmount").value);
    interestRate = parseFloat(document.getElementById("interestRate").value) / 100;
    termLength = parseFloat(document.getElementById("termLength").value);

    futureValue = depositAmount * Math.pow(1 + (interestRate / 12), 12 * termLength);
    interestEarned = futureValue - depositAmount;

    document.getElementById("futureValue").value = "$" + futureValue.toFixed(2);
    document.getElementById("interestEarned").value = "$" + interestEarned.toFixed(2);
    document.getElementById("depositAmount").value = "$" + depositAmount;
    document.getElementById("interestRate").value += "%";
}

function clearButton()
{
    document.getElementById("depositAmount").value = "";
    document.getElementById("interestRate").value = "";
    document.getElementById("termLength").value = "";
    document.getElementById("futureValue").value = "";
    document.getElementById("interestEarned").value = "";
}