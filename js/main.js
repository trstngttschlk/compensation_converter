// hide output text until user selects a conversion type
document.querySelector("#userInputs").style.display = "none"
document.querySelector("#userInput").value = ''

const dropdownList = document.querySelector('#dropdownList')
const userInput = document.querySelector('#userInput').value



dropdownList.addEventListener("change",(e)=>{
    // assign value from dropdownList 
    const value = e.target.value
    const conversionType = document.querySelector("#conversionType")
    const converstionText = document.querySelector("#conversionText")
    // display user text on change
    document.querySelector("#userInputs").style.display = "block"
    // change text based on which dropdown option is selected
    if (value == "hourToAnnual"){
        conversionType.textContent = "hourly rate"
        converstionText.textContent = 
        "annual salary"
    }else if (value == "annualToHour"){
         conversionType.textContent = "annual salary"
         converstionText.textContent = 
         "hourly rate"
     }
})






// converts hourly rate to annual salary
function hourlyToAnnualConversion(userInput){
    annualSalary = userInput * 52 * 40
    document.querySelector('#output').innerText = `$${annualSalary.toLocaleString("en-US")}`
}
// convert annual salary to hourly rate
function annualToHourlyConversion(userInput){
    hourlyRate = userInput / 52 / 40
    document.querySelector('#output').innerText = `$${hourlyRate.toLocaleString("en-US")}`
}