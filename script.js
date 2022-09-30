const calcBtn = document.getElementById('calcBtn')

calcBtn.onclick = function () {
    const result = document.getElementById("result")
    const input1 = document.getElementById("num1")
    const input2 = document.getElementById("num2")

    const num1 = input1.value;
    const num2 = input2.value;

    console.log(num1, num2)
    console.log(num1 + num2)

    // console.log(input1.value)
    // console.log(input2.value)
    const a = parseFloat(input1.value)
    const b = parseFloat(input2.value)
    const time = a / b
    text = `время в пути = ${time}`
    
    // console.log("результат сложения ", a + b)
    // text = `${a} + ${b} = ${a + b}`;
    // text += `\n${a} - ${b} = ${a - b}`;
    // text += `\n${a} / ${b} = ${a / b}`;
    // text += `\n${a} * ${b} = ${a * b}`;
    result.innerText = text
}


