var saveBtn =$(".saveBtn");
//tells the current date
 var currentDay = moment()
 console.log(currentDay)
$("#currentDay").text(currentDay.format('dddd, MMMM Do'));

//tells the current hour
var timeNow= moment().hour();
console.log(timeNow)
 
//save button which stores the data to the local storage
 $(".saveBtn").on("click", function () {
    var textValue =$(this).siblings(".color-block").val()
    var timeKey = $(this).parent().attr("id")
    localStorage.setItem(timeKey, textValue)
 });

//how the data stays on the screen
$("#time9 .color-block").val(localStorage.getItem("time9"))
$("#time10 .color-block").val(localStorage.getItem("time10"))
$("#time11 .color-block").val(localStorage.getItem("time11"))
$("#time12 .color-block").val(localStorage.getItem("time12"))
$("#time1 .color-block").val(localStorage.getItem("time1"))
$("#time2 .color-block").val(localStorage.getItem("time2"))
$("#time3 .color-block").val(localStorage.getItem("time3"))
$("#time4 .color-block").val(localStorage.getItem("time4"))
$("#time5 .color-block").val(localStorage.getItem("time5"))






//  function usePlanner() {

//     $(".hour").each(function() {
//         var currHour = $(this).text();
//         var currPlan = localStorage.getItem(currHour);

//         // console.log(this);
//         // console.log(currHour);

//         if(currPlan !== null) {
//             $(this).siblings(".plan").val(currPlan);
//         }
//     });
// }

// usePlanner();






// $(document).ready(function () {// tells engine to load 1)html & 2)css first.
//     //display current day & time.
//     $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a")); // use of moment.js
//     //assign saveBtn click listener for user input and time stamp??
//     $(".saveBtn").on("click", function () {
//         //get nearby values.
//         console.log("save");
//         var text =JSON.parse(localStorage.getItem(".description"))
//         // var text = $(this).parent(".description").val(); // taken the change from the sibling html description attribute
//         var time= JSON.parse(localStorage.getItem("time-block"))
//         // var time = $(this).parent().attr("id"); // taken the change from the parent html id attribute

//         //set items in local storage.
//         localStorage.setItem(time, text);

   

// })

//     function hourTracker() {
//         //get current number of hours.
//         var currentHour = moment().hour(); // use of moment.js

//         // loop over time blocks
//         $(".time-block").each(function () {
//             var blockHour = parseInt($(this).attr("id").split("hour")[1]);
//             console.log( blockHour, currentHour)

//             //check if we've moved past this time, click into css/html given classes of past, present, or future
//             if (blockHour < currentHour) {
//                 $(this).addClass("past");
//                 $(this).removeClass("future");
//                 $(this).removeClass("present");
//             }
//             else if (blockHour === currentHour) {
//                 $(this).removeClass("past");
//                 $(this).addClass("present");
//                 $(this).removeClass("future");
//             }
//             else {
//                 $(this).removeClass("present");
//                 $(this).removeClass("past");
//                 $(this).addClass("future");
//             }
//         })
//     }
//     hourTracker(); //re-run function
// })





// // var timeBlock= $("hour");
// // console.log (timeBlock)

// // console.log(saveBtn)
// // var description= localStorage.getItem("description");
// // console.log(description);







// // // $(document).ready(function () {
// // function savedItem() {
// //     var description = localStorage.getItem ("description");
// //     localStorage.setItem("event", description)
// // }
// //     var saveBtn = $('.saveBtn');
// //     //   saveBtn.hide();
// //     $('.saveBtn').click(function (e) {
// //         saveBtn.animate({
// //             'opacity': 'toggle'
// //         });
// //     // });
// // });
// // $(saveBtn).on("click", function saveEvent(){
// //     alert("helloworld")
//     // var initials = initialsEl.value.trim();
//     // if (initials !== "") {
//     //   var highscores =
//     //     JSON.parse(localStorage.getItem("highscores")) || [];
//     //   var newScore = {
//     //     score: timerSec,
//     //     initials: initials
//     //   };
//     //   highscores.push(newScore);
//     //   localStorage.setItem("highscores", JSON.stringify(highscores));
//     //   renderHighScore ()
//     // }
//     // })


// var timeNow= moment().hour();
// console.log(timeNow)

// if (timeNow<timeBlock) {
//     console.log("green")

// }else if (timeNow===timeBlock)

// function setColors()
   
    
// if (timeNow > timeBlock){
//     console.log(green)
// }
    
// function setColor() {
//     var b = new Date();
//     var bNow = b.getHours();
//     if (bNow >= 9 && bNow < 10) {
//         taskNineInput.addClass("present")
//     }
// } setColor()
    


//if current hour > time block hour set it to past
    //else if current hour === time block hour set it to present
    //else set time blocks to future


// var saveBtn = $(".saveBtn");
// saveBtn.on("click", function (){
//     var text =$(this).siblings(".description").val();
//     var time =$(this).parent().attr("id");
// })

//the point of this assignment is using the bootstrap and figuring out the logic for javascript
// make sure all the links to CDNs are working properly


//html

//Create basic HTML to resemble mockup-using CSS
    //create 9 rows with 3 columns each 
    //use container and row
    //(hour column use col-md-1, description column col-md-10, save column col-md-1)

//3 columns and 9 rows
//color coding for functionality
//date at the top
//need to  connect current time
//past times are grey, current time is red, future time is green

//The css file is giving us lots of hints on what needs to be used by their class names
//Everything is styled for me in CSS

// set up an event listener for our save button
    //listen for clicks on each time blocks save button then save to local storage
    //pull saved data from local storage and display it on the webpage

//figut out how to create our text area for the description-where we write

//display the day of week, month and day of month-look at moment.js and see how they got that exact format
//moment.js figure out formatting
    //How to track hours
    //startOf function?--to maybe track hours

// color coding of time blocking
    //function to track our hours if, else, if, else
    //if current hour > time block hour set it to past
    //else if current hour === time block hour set it to present
    //else set time blocks to future





