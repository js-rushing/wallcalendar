"use strict";

function populateDayStrip() {
  var dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  for (i = 0; i < 7; i++) {
    var dayNameCell = document.createElement('div');
    var nameCell = document.createTextNode(dayNames[i]);
    dayNameCell.className = 'day-name-cell';
    dayNameCell.appendChild(nameCell);
    calDayStrip.appendChild(dayNameCell);
  }

  cal.appendChild(calDayStrip);
}

function getNumOfDays(month, daysInMonth) {
  days = daysInMonth[month];
  return days;
}

function getFirstDay(year, month) {
  var dateNum = 1;
  var yy = parseInt(year.toString().split('')[2] + year.toString().split('')[3]);
  var century = parseInt(year.toString().split('')[0] + year.toString().split('')[1]);
  var yearCode = Math.floor((yy + yy / 4) % 7);
  var monthCode = getMonthCode(month);
  var centuryCode = getCenturyCode(century);
  var leap;

  if (year % 4 === 0 && year % 100 != 0) {
    leap = true;
  } else if (year % 4 === 0 && year % 100 === 0 && year % 400 === 0) {
    leap = true;
  } else {
    leap = false;
  }

  var dayOfWeek = (yearCode + monthCode + centuryCode + dateNum - leap) % 7;
  return dayOfWeek;
}