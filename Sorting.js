
const inputBox = document.getElementById("inputBox");

function getValues(){

    const numbers = [];

    let splittedValues;
    
    const values = document.getElementById("inputBox").value;
    const result = document.getElementById("result");

    console.log(values.length);


    if(values.includes(",")){
        console.log(values.split(","));
        splittedValues = values.split(",");
        for (let i = 0; i < splittedValues.length; i++) {
            if(splittedValues[i] === ""){
                console.log("Do not add the value to the array");
            }
            else{
                const element = splittedValues[i].trim();
                numbers.push(Number(element));
            } 
        }
    }
    else{
        console.log(values.split(" "));
        splittedValues = values.split(" ");
        for (let i = 0; i < splittedValues.length; i++) {
            console.log(typeof splittedValues[i]);
            if(splittedValues[i] === ""){
                console.log("Do not add the value to the array");
            }
            else{
                const element = splittedValues[i].trim();
                numbers.push(Number(element));
            } 
        }
    } 

    numbers.forEach(element => {
        console.log(element);
        console.log(typeof element);
    });
    
    if(numbers.includes(NaN)){
        result.textContent = "Incorrect input format!";
    }
    else{
        const sortedValues = sortValues([...numbers]);
        displayValues(numbers, sortedValues);
    }
    
}


function sortValues(numbers){

    let sortedValues = [];
    let minValue;
    let minIndex;

    //minvalue = i
    //if minvalue < j || minvalue === j = push
    //if minvalue > j | minvalue === numbersj

    // 5 6 4 2 

    while(numbers.length > 0){
        minValue = numbers[0]
        minIndex = 0;

        for (let i = 1; i < numbers.length; i++) {
            if(minValue > numbers[i]){
                minValue = numbers[i]
                minIndex = i
            }
        }  

        sortedValues.push(minValue);

        numbers.splice(minIndex, 1);
    }
    
    return sortedValues;

}

function displayValues(numbers, sortedValues) {

    const providedNumbers = document.getElementById("providedNumbers");
    const result = document.getElementById("result");
    const resultDiv = document.getElementById("resultDiv");

    resultDiv.style.display = "block";

    const providedNumbersString = numbers.join(", ");
    const sortedValuesString = sortedValues.join(", ");

    const numberRegex = /\d+(\.\d+)?/g;

    const formattedProvidedNumbers = providedNumbersString.replace(numberRegex, '<span class="number-background">$&</span>');
    const formattedSortedValues = sortedValuesString.replace(numberRegex, '<span class="number-background">$&</span>');

    providedNumbers.innerHTML = `Numbers provided by user: ${formattedProvidedNumbers}`;
    result.innerHTML = `Sorted numbers: ${formattedSortedValues}`;
}


inputBox.addEventListener("keydown", event =>{
    if(event.key == "Enter"){
        getValues();
    }
})



// 1 2 3 4 =/ 1,2,3,4,5