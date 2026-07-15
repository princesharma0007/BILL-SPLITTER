let mainFrame = document.getElementById("main-frame"); 
mainFrame.className = "border-2 border-black flex justify-center items-start gap-12 min-h-screen bg-gray-100 p-10";
 
let amountSection = document.getElementById("amount-section");
amountSection.className ="w-[420px] rounded-lg p-6 flex flex-col gap-5"; 
 
let amountHeading = document.querySelector("#heading");
amountHeading.className = "text-3xl font-bold text-center";
let amountInput = document.getElementById("amount");
amountInput.className ="border-2 border-black rounded p-2 w-full";
 
let peopleInput = document.getElementById("people");
peopleInput.className = "border-2 border 2 border-black rounded p-2 w-full h-20";

let buttonSection = document.getElementById("button-section");
buttonSection.className = "grid grid-cols-2 gap-3";

let button1 = document.getElementById("percentage1");
let button2 = document.getElementById("percentage2");
let button3 = document.getElementById("percentage3");
let button4 = document.getElementById("percentage4"); 
let button5 = document.getElementById("percentage5");


button1.className = "border-2 border-black rounded py-2";

button2.className ="border-2 border-black rounded py-2";

button3.className = "border-2 border-black rounded py-2";

button4.className = "border-2 border-black rounded py-2";
button5.className = "border-2 border-black rounded py-2";


let calculate = document.getElementById("calculate");
calculate.className =" border-2 text-lg font-bold border-black rounded py-2 w-40 self-end";

let resultSection = document.getElementById("result-section");
resultSection.className = "w-[260px] text-lg rounded-lg p-6 flex flex-col gap-6"; 

let tipResult = document.getElementById("tip-result");
tipResult.className = "border-2 text-lgfont-bold border-black rounded text-center text-3xl py-3";

let splitResult = document.getElementById("split-result");
splitResult.className = "border-2 border-black rounded text-center text-3xl py-3";


let tip = 0;

button1.onclick = function () {
    tip = 0.05;
};

button2.onclick = function () {
    tip = 0.10;
};

button3.onclick = function () {
    tip = 0.25;
};

button4.onclick = function () {
    tip = 0.50;
};
customTipInput = document.createElement("input");
customTipInput.type = "number";
customTipInput.placeholder = "Enter Custom Tip %";
customTipInput.className = "border-2 border-black rounded p-2 w-full";
button5.onclick = function () {
    let customTip = parseFloat(prompt("Enter Custom Tip Percentage:"));
    if (isNaN(customTip) || customTip < 0) {
        alert("Enter valid tip percentage");
        return;
    }
    tip = customTip / 100;
}

calculate.onclick = function () {

    let amount = parseFloat(amountInput.value);
    let people = parseInt(peopleInput.value);

    if (isNaN(amount) || amount <= 0) {
        alert("Enter valid amount");
        return;
    }

    if (isNaN(people) || people <= 0) {
        alert("Enter valid number of people");
        return;
    }

    let tipAmount = amount * tip;
    let total = amount + tipAmount;
    let perPerson = total / people;

    tipResult.innerHTML = "₹" + tipAmount.toFixed(2);
    splitResult.innerHTML = "₹" + perPerson.toFixed(2);
};
