let config = document.getElementById('config');
let schedule = document.getElementById('schedule');

let addFile = document.getElementById('add-file');
addFile.addEventListener('click', () => {
  document.getElementById('selectedFile').click();
})

let scheduleDate = document.getElementById('schedule-date');
scheduleDate.addEventListener('click', () => {
  document.getElementById('new-schedule').style.display = "block";

})

let setNewSchedule = document.getElementById('set-new-schedule');
setNewSchedule.addEventListener('click', () => {
  document.getElementById('new-schedule').style.display = "none";
  let newTime = document.getElementById('newTime').value;
  let newDate = document.getElementById('newDate').value;

  document.getElementById('schedule-h6').innerHTML = `AHU Daily Inspection Checklist | At ${newTime} , only on ${newDate}`;




})





config.addEventListener('click', () => {
  document.getElementById('schedule-h6').innerHTML = `AHU Daily Inspection Checklist | At 10:00 AM, only on Monday`;
  config.classList.add('config-border');
  schedule.classList.add('schedule-border-none');
  schedule.classList.remove('schedule-border');
})



schedule.addEventListener('click', () => {
  document.getElementById('schedule-h6').innerHTML = `AHU Daily Inspection Checklist | At 07:00 AM, only on Sunday`;
  config.classList.remove('config-border');
  schedule.classList.add('schedule-border');
  schedule.classList.remove('schedule-border-none');
})