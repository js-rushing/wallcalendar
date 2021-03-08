// Create Elements
const calCon = document.createElement('div')
calCon.id = 'cal-con'
const cal = document.createElement('div')
cal.id = 'calendar'
const calHeader = document.createElement('div')
calHeader.id = 'cal-header'
const calDayStrip = document.createElement('div')
calDayStrip.id = 'cal-day-strip'
const calBody = document.createElement('div')
calBody.id = 'cal-body'

// Create Red X

// Declare Variables
const dateNow = new Date(Date.now())
var year = dateNow.getFullYear()
var monthNum = dateNow.getMonth()
var month = convertMonthToString(monthNum)
var numOfDays = getNumOfDays(month, daysInMonth)
var dayOfWeekAdjustment = getFirstDay(year, month)
var alternateColor = true
// var checked = false
var dayArray = []

// Build Page
document.body.appendChild(calCon)
cal.appendChild(calHeader)
populateDayStrip()
cal.appendChild(calBody)
calCon.appendChild(cal)

calHeader.innerHTML = `<div id='month'>${month}</div><div id='year'>${year}</div>`

// Populate Calendar
for (i = 0; i < numOfDays + dayOfWeekAdjustment; i++) {
  let dayCell = document.createElement('div')
  let dayNum = document.createElement('div')
  if (i >= dayOfWeekAdjustment) {
    let dayNumDigits = document.createTextNode(i - dayOfWeekAdjustment + 1)
    dayNum.className = 'day-num'
    dayNum.appendChild(dayNumDigits)
    dayCell.appendChild(dayNum)
    dayCell.id = `day-cell-${i - dayOfWeekAdjustment + 1}`
  }
  dayCell.className = 'day-cell'

  calBody.appendChild(dayCell)
  if (alternateColor) {
    dayCell.style.backgroundColor = 'lightblue'
    alternateColor = false
  } else {
    dayCell.style.backgroundColor = 'lightcyan'
    alternateColor = true
  }
}

// Put An X On It
// const fifteen = document.getElementById('day-cell-15')
// fifteen.style.backgroundImage = `url('./images/redX.png')`

calBody.addEventListener('click', (e) => {
  let clickedCell
  if (e.target.className == 'day-num') {
    clickedCell = e.target.parentElement
  } else if (e.target.className == 'day-cell') {
    clickedCell = e.target
  } else {
    clickedCell = null
  }

  let day
  if (clickedCell) {
    if (clickedCell.id.split('-').length > 2) {
      day = parseInt(clickedCell.id.split('-')[2])
    } else {
      day = null
    }
  } else {
    day = null
  }

  if (day != null) {
    if (
      !clickedCell.style.backgroundImage ||
      clickedCell.style.backgroundImage === 'none'
    ) {
      clickedCell.style.backgroundImage = `url('./images/redX.png')`
      dayArray.push(day)
    } else {
      clickedCell.style.backgroundImage = 'none'
      dayArray.splice(dayArray.indexOf(day), 1)
    }
  }

  console.log(dayArray)
})
