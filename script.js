// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  const container = document.getElementById('container-fluid');
  const textarea = document.getElementById('textarea')
  const saveBtn = document.getElementById('saveBtn')
  const saveBtn = document.getElementById('saveBtn');
  saveBtn.addEventListener('click', (saveBtn)) 
    const dataToSave = {
    }
saveBtn.addEventListener('click (event)'), 
  {
window.location.href = ("index.html")}


  //   window.location.href = "index.html";
  // }

  const formData = {
    message: messageInput.value

  }
  let button saveBtn = "fas fa-save"
  saveBtn = ("Save");{
  saveBtn.addEventListener("click", (fas fa - save);

function saveData(data){
  const jsonData = JSON. stringdata);

  const link = document.createElement("row time-block"); 
  link.href =index.html(window.location);
  link.saveBtn = textarea;

  link.dispatchEvent(new MouseEvent (click,));

}




//TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage. HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?
//save button



// TODO: Add code to apply the past, present, or future class to each time
// block by comparing the id to the current hour. HINTS: How can the id
// attribute of each time-block be used to conditionally add or remove the
// past, present, and future classes? How can Day.js be used to get the
// current hour in 24-hour time?
//

// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?
//
// TODO: Add code to display the current date in the header of the page.

// ref line 30 in the index.HTML

dayjs().format('L LT')
const currentDate = document.querySelector(".current-date");
const date = new Date(),
  currentYear = date.getFullYear(),
  currentMonth = date.getMonth();
currentTime = date.getTime();
console.log(date, currentYear, currentMonth)
let isToday = dayjs('April 19, 20223');
setInterval(function () {
  let isToday = dayjs().format('MMM D, YYYY h :mm :ss A')
  $("#currentDay").text(isToday)
}, 1000)
dateDisplayEl.text(rightNow);
})
