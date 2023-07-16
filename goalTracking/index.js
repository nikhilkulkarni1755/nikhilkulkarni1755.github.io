function calculateDays() {
  var d = new Date()
  var year = d.getFullYear()
  var month = d.getMonth() + 1

  var days = 0
  switch(month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        days += 31
        break
    case 4:
    case 6:
    case 9:
    case 11:
        days += 30
        break
    case 2:
        if(year % 4 == 0) {
            days += 29
        }
        else {
            days += 28
        }
        break
  }

  console.log(year + ", " + month + ", " + days)

//   let clone = document.getElementById("day").cloneNode(true)
//   clone.innerHTML = window.localStorage.getItem(0 + '')
//   document.getElementById("day").appendChild(clone)

}