
const inputBox = document.getElementById("inputBox");

function getValues(){

    const numbers = [];

    let splittedValues;
    
    const values = document.getElementById("inputBox").value;
    const result = document.getElementById("result");
    const ascendingButton = document.getElementById("ascendingButton");
    const descendingButton = document.getElementById("descendingButton");
    const resultDiv = document.getElementById("resultDiv");


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

    console.log("tu mosz numbers:");
    console.log(numbers);
    console.log(numbers.length);
    

    if(numbers.length == 0){
        resultDiv.style.display = "block";
        result.textContent = "Please type any numbers."
    }
    else if(numbers.includes(NaN)){
        result.textContent = "Incorrect input format!";
    }
    else if(!ascendingButton.checked && !descendingButton.checked){
        resultDiv.style.display = "block";
        result.textContent = "Please choose at least one option between ascending or descending order.";
    }
    else if(ascendingButton.checked){
        const sortedValuesAscending = sortValuesDescending([...numbers]);
        displayValues(numbers, sortedValuesAscending);
    }
    else{
        const sortedValuesDescending = sortValuesDescending([...numbers]);
        displayValues(numbers, sortedValuesDescending);
    }
    
}


function sortValuesDescending(numbers){

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

function sortValuesDescending(numbers){

    let sortedValues = [];
    let minValue;
    let minIndex;

    while(numbers.length > 0){
        minIndex = 0;
        minValue = numbers[0];

        for(let i = 1; i < numbers.length; i++){
            if(minValue < numbers[i]){
                minValue = numbers[i];
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