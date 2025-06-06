// function sleep(){
//     var startDateTime = new Date().getTime();
//     var endDateTime = startDateTime + 7000
//     while(new Date().getTime() < endDateTime){

//     }
// }
// function stepone(){
//     sleep(5000);
//     console.log("Step one")
// }

// function steptwo(){
//     sleep(7000);
//     console.log("Step two")
// }

// function stepthree(){
//     sleep(2000);
//     console.log("Step three")
// }

// function stepfour(){
//     sleep(4000);
//     console.log("Step four")
// }

// console.time("Total time for task completion")
// stepone();
// steptwo();
// stepthree();
// stepfour();
// console.timeEnd("Total time for task completion")
// console.log("All tasks completed")


function sleep(milliseconds){
    var startDateTime = new Date().getTime()
    var endDateTime = new Date().getTime() + milliseconds
    while(new Date().getTime() < endDateTime){

    }
}

function OpenNetflix(SearchforMoviecallbackfn){
    sleep(5000);
    console.log("Take your Mobile and open netflix");
    SearchforMoviecallbackfn();
}

function SearchforMovie(ClickDownloadcallbackfn){
    sleep(8000);
    console.log("Search for the movie you want to see");
    ClickDownloadcallbackfn();
}

function ClickDownload(SeeifCompletecallbackfn){
    sleep(2000);
    console.log("Click on download option");
    SeeifCompletecallbackfn();
}

function SeeifComplete(){
    sleep(5000);
    console.log("The movie download is done");
}

console.time("Time taken for total execution");
OpenNetflix(() => {
    SearchforMovie(() => {
        ClickDownload(() => {
            SeeifComplete()
        })
    })


})
console.timeEnd("Time taken for total execution")

