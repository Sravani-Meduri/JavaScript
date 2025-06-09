function getPlayerRecordDetails(){ 
    console.log("Please wait for 4 seconds to get Player1 details")
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Player1 MS Dhoni has scored his first century against pakistan in Vizag")
        }, 4000)
    })
}

function getPlayerIPLDetails(){ 
    console.log("Please wait for 7 seconds to get Player1 IPL details")
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Player1 MS Dhoni has played for CSK in his entire IPL career")
        }, 7000)
    })
}
async function getPlayerDetails(){
    console.log("Dhoni has played very great knocks during his career")
    console.log("MS Dhoni retired from Internatioal cricket in the year of 2020")

    console.time("TotalTime")
    let PlayerRecordDetails = await getPlayerRecordDetails();
    console.log(PlayerRecordDetails)
    let PlayerIPLDetails = await getPlayerIPLDetails();
    console.log(PlayerIPLDetails);
    console.timeEnd("TotalTime")



    console.log("%cTaking all references, MS Dhoni biopic was made finally", 'color:blue')
    return "I got MS Dhoni details"
    
}
getPlayerDetails().then((result) => {
    console.log(result)
})
