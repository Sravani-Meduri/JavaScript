// const bankName = "HDFC Bank"
//       bankName = "SBI Bank"
//       console.log(bankName); //we will get runtime error because const cannot be reassigned

// let username;
// let newusername = username.toLowercase(); //run time error because username is undefined
// console.log(newusername);

//if we use the below try.catch and finally commands, the out put will be printed even if there is error

try{
    let bankName;
    if(bankName){
        console.log(`Welcome to ${bankName}`);
    }
    //const bankName = "HDFC Bank"
    //bankName = bankName.toUpperCase();
    else{
        throw new Error("Server is down, please retry after sometime")

    }
    
    //throw new Error("Server is down, please retry after sometime") // with this, we can create our own error message
    
}
catch(ex){
    console.log(ex.message);
}
finally{
    console.log("Task completed")
}


      

let transactions = ["Credit card", "Debit card", "Savings", "EMI"]
console.log(`Number of transactions: ${transactions.length}`)



