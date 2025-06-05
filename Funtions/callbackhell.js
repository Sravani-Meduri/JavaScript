// function stepone(callbackfn){
//     console.log("Step One")
//     callbackfn();
// }

// function steptwo(callbackfn){
//     console.log("Step two")
//     callbackfn();
// }

// function stepthree(){
//     console.log("Step three")
// }

// stepone(() => {
//     steptwo(() => {
//         stepthree();
//     });
// });


function sleep(){
    var startDateTime = new Date().getTime()
    var endDateTime = startDateTime + 5000

while(new Date().getTime() < endDateTime){

}
}

function watchingInstareels(chattingcallbackfn){
    sleep(5000);
    console.log("I am watching reels")
    chattingcallbackfn();
}

function Chattingwithfriends(filecallbackfn){
    sleep(5000);
    console.log("I am chatting with friends")
    filecallbackfn();
}

function FileDownload(){
    sleep(5000);
    console.log("I am downloading files")

}

watchingInstareels(() => {
    Chattingwithfriends(() => {
        FileDownload()

    })

});



