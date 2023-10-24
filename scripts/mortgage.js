"use strict"

let loanAmount;
let monthlyRate;
let monthlyNumberOfPayments;
let monthlyPayment;
let interestPaid;

window.onload = init;

function init() {
    document.getElementById("calculateButton").onclick = calculateButton;
    document.getElementById("clearButton").onclick = clearButton;
}

function calculateButton() {
    loanAmount = parseFloat(document.getElementById("loanAmount").value);
    monthlyRate = parseFloat(document.getElementById("interestRate").value) / 1200;
    monthlyNumberOfPayments = parseFloat(document.getElementById("loanTerm").value) * 12;
    
    monthlyPayment =(loanAmount * monthlyRate) / (1 - (Math.pow(1 + monthlyRate, -monthlyNumberOfPayments)));
    interestPaid = (monthlyPayment * monthlyNumberOfPayments) - loanAmount;
    
    document.getElementById("monthlyPayment").value = "$" + monthlyPayment.toFixed(2);
    document.getElementById("interestPaid").value = "$" + interestPaid.toFixed(2);
    document.getElementById("loanAmount").value = "$" + loanAmount;
    document.getElementById("interestRate").value += "%";
}

function clearButton()
{
    document.getElementById("loanAmount").value = "";
    document.getElementById("interestRate").value = "";
    document.getElementById("loanTerm").value = "";
    document.getElementById("monthlyPayment").value = "";
    document.getElementById("interestPaid").value = "";
}
