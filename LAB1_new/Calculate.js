function calculate() {
    const sumLine = document.querySelector("#sum");
    const avgLine = document.querySelector("#avg");
    const minLine = document.querySelector("#min");
    const maxLine = document.querySelector("#max");

    let insert = document.querySelectorAll("input[type='text']");
    let num = [];

    let sum = 0;
    let value = 0;

    for (let i = 0; i < insert.length; i++) {
        value = insert[i].value;
        sum += parseInt(value);
        num.push(parseInt(value));
    }

    let avg = sum / num.length;
    let max = Math.max(...num);
    let min = Math.min(...num);

    sumLine.innerHTML = "Sum: " + sum;
    avgLine.innerHTML = "Avg: " + avg;
    minLine.innerHTML = "Min: " + min;
    maxLine.innerHTML = "Max: " + max;
}

function addField(){
    let field = document.querySelector("#temp").cloneNode();
    field.value = 0;
    document.querySelector("#input").appendChild(field);
}

function removeField(){
    document.querySelector("#input").removeChild(document.querySelector("#input").lastChild);
    calculate();
}

var calc = document.querySelectorAll("#input");
for (const c of calc) {
    c.addEventListener("input", calculate);
} 

