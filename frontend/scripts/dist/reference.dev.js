"use strict";

var daysInMonth = {
  Jan: 31,
  Feb: 28,
  Mar: 31,
  Apr: 30,
  May: 31,
  Jun: 30,
  Jul: 31,
  Aug: 31,
  Sep: 30,
  Oct: 31,
  Nov: 30,
  Dec: 31
};

function convertMonthToString(monthNum) {
  switch (monthNum) {
    case 0:
      return 'Jan';
      break;

    case 1:
      return 'Feb';
      break;

    case 2:
      return 'Mar';
      break;

    case 3:
      return 'Apr';
      break;

    case 4:
      return 'May';
      break;

    case 5:
      return 'Jun';
      break;

    case 6:
      return 'Jul';
      break;

    case 7:
      return 'Aug';
      break;

    case 8:
      return 'Sep';
      break;

    case 9:
      return 'Oct';
      break;

    case 10:
      return 'Nov';
      break;

    case 11:
      return 'Dec';
      break;
  }
}

function getMonthCode(month) {
  switch (month) {
    case 'Jan':
    case 'Oct':
      return 0;
      break;

    case 'Feb':
    case 'Mar':
    case 'Nov':
      return 3;
      break;

    case 'Apr':
    case 'Jul':
      return 6;
      break;

    case 'May':
      return 1;
      break;

    case 'Jun':
      return 4;
      break;

    case 'Aug':
      return 2;
      break;

    case 'Sep':
    case 'Dec':
      return 5;
      break;
  }
}

function getCenturyCode(century) {
  switch (century) {
    case 17:
      return 4;
      break;

    case 18:
      return 2;
      break;

    case 19:
      return 0;
      break;

    case 20:
      return 6;
      break;

    case 21:
      return 4;
      break;

    case 22:
      return 2;
      break;

    case 23:
      return 0;
      break;
  }
}