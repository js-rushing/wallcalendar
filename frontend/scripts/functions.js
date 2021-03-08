function populateDayStrip() {
  let dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  for (i = 0; i < 7; i++) {
    let dayNameCell = document.createElement('div')
    let nameCell = document.createTextNode(dayNames[i])
    dayNameCell.className = 'day-name-cell'
    dayNameCell.appendChild(nameCell)
    calDayStrip.appendChild(dayNameCell)
  }
  cal.appendChild(calDayStrip)
}

function getNumOfDays(month, daysInMonth) {
  days = daysInMonth[month]
  return days
}

function getFirstDay(year, month) {
  const dateNum = 1
  let yy = parseInt(year.toString().split('')[2] + year.toString().split('')[3])
  let century = parseInt(
    year.toString().split('')[0] + year.toString().split('')[1]
  )
  let yearCode = Math.floor((yy + yy / 4) % 7)
  let monthCode = getMonthCode(month)
  let centuryCode = getCenturyCode(century)
  let leap
  if (year % 4 === 0 && year % 100 != 0) {
    leap = true
  } else if (year % 4 === 0 && year % 100 === 0 && year % 400 === 0) {
    leap = true
  } else {
    leap = false
  }
  let dayOfWeek = (yearCode + monthCode + centuryCode + dateNum - leap) % 7

  return dayOfWeek
}
