let annualSalary
let hourlyRate
const dropdownList = document.querySelector('#dropdownList')

dropdownList.addEventListener("change",(e)=>{
    // assign value from dropdownList 
    const value = e.target.value

    // change text based on which dropdown option is selected
    if (value == "hourToAnnual"){
        document.querySelector("#conversionType").textContent = "hourToAnnual"
    }else if (value == "annualToHour"){
         document.querySelector("#conversionType").textContent = "annualToHour"
     }else {
        document.querySelector("#conversionType").textContent = "none selected"
    }
})




















































// let userCalc = document.querySelector('#dropdownList').value
// document.querySelector('#enter').addEventListener('click', changeCalc)

// changes event listener function based on dropdown selected option
// function changeCalc(){
//     if (userCalc == 'hourToAnnual'){
//         hourlyToAnnualConversion()
//     } else if (userCalc == 'annualToHour'){
//         annualToHourlyConversion()
//     }
// }

// changes text before user input depending on dropdown
// let conversionType = document.querySelector('#conversionType')
// document.querySelector('#dropdownList').onchange = handleChange
// function handleChange(e){
//     if (userCalc == 'hourToAnnual'){
//         conversionType.textContent = 'hourly rate'
//         console.log('changed to hourToAnnual')
//     } else if (userCalc == 'annualToHour'){
//         conversionType.textContent = 'annual salary'
//         console.log('changed to annualToHour')
//     }
// }

// converts hourly rate to annual salary
// function hourlyToAnnualConversion(){
//     hourlyRate = document.querySelector('#userInput').value
//     annualSalary = hourlyRate * 52 * 40
//     document.querySelector('#output').innerText = `$${annualSalary.toLocaleString("en-US")}`
// }
// convert annual salary to hourly rate
// function annualToHourlyConversion(){
//     annualSalary = document.querySelector('#userInput').value
//     hourlyRate = annualSalary / 52 / 40
//     document.querySelector('#output').innerText = `$${hourlyRate.toLocaleString("en-US")}`
// }