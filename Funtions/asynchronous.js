function stepone(){
    setTimeout(() => {
        console.log("Printing StepOne");
    }, 6000)
}

function steptwo(){
    setTimeout(() => {
        console.log("Printing StepTwo");
    }, 1000)
}

function stepThree(){
    setTimeout(() => {
        console.log("Printing StepThree");
    }, 4000)
}

function stepFour(){
    setTimeout(() => {
        console.log("Printing StepFour");
    }, 9000)
}

console.time("Total execution time")
stepone();
steptwo();
stepThree();
stepFour();
console.timeEnd("Total execution time")