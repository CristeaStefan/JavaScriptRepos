let length;
let width;

function calculateArea() {
 length = parseFloat(document.getElementById("length").value);
 width = parseFloat(document.getElementById('width').value);

 let area = length*width;
  document.getElementById('result').innerText = `The area of the rectangle is: ${area}`;
}

let Amount1;
let Amount2;
let Amount3;

function CalculateAmount() {
    Amount1 = parseFloat(document.getElementById("grocery1"
    ).value);
    Amount2 = parseFloat(document.getElementById("grocery2").value);
    Amount3 = parseFloat(document.getElementById("grocery3").value);
let TotalAmount = Amount1 + Amount2 + Amount3;
document.getElementById("result1").innerText = `The total amount is ${TotalAmount}`;
}
