const result = document.querySelector("#result")
const userInput = document.getElementById('userinput')
const inputType = document.querySelector("#tempType")
const outputType = document.querySelector("#outputType")
const convert = document.querySelector('#convert')
convert.addEventListener('click',resultvalue)
function resultvalue(){
    // checking if input is other than number or empty
    if(isNaN(userInput.value) || userInput.value ===""){
        alert("please Enter number")
        return;
    }
    inputVal = parseFloat(userInput.value)  // parsing in float
    inpType = inputType.value
    outType = outputType.value
    if(inpType === "Celsius")
        if(outType==="Fahrenheit"){
            const resultValue = (inputVal*1.8 + 32).toFixed(2)
            result.innerHTML = `<span>${resultValue}&deg;F</span>`
        }
        else if(outType==="Kelvin"){
            const resultValue = (inputVal+273.15).toFixed(2)
            result.innerHTML = `<span>${resultValue}&deg;K</span>`
        }
        else{
            result.innerHTML = `<span>${inputVal}&deg;C</span>`
        }
    else if(inpType === "Fahrenheit")
        if(outType==="Celsius"){
            const resultValue = ((inputVal-32)/1.8).toFixed(2)
            result.innerHTML = `<span>${resultValue}&deg;C</span>`
        }
        else if(outType==="Kelvin"){
            const resultValue = ((inputVal-32)/1.8 + 273.15).toFixed(2)
            result.innerHTML = `<span>${resultValue}&deg;K</span>`
        }
        else{
            result.innerHTML = `<span>${inputVal}&deg;F</span>`
        }
    else{
        if(outType==="Celsius"){
            const resultValue = (inputVal - 273.15).toFixed(2)
            result.innerHTML = `<span>${resultValue}&deg;C</span>`
        }
        else if(outType==="Fahrenheit"){
            const resultValue = (1.8*(inputVal-273.15)+32).toFixed(2)
            result.innerHTML = `<span>${resultValue}&deg;F</span>`
        }
        else{
            result.innerHTML = `<span>${inputVal}&deg;K</span>`
        }
    }
   }
