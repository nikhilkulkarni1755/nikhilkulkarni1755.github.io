function trackCalories() {
    console.log('Tracking Calories!')

    var date = document.getElementById("dateInput").value

    var mealType = document.getElementById("mealType").value

    console.log(date)
    console.log(mealType)
    document.getElementById("totalCalories").innerHTML = date + ", " + mealType;
}

//save the data locally within local Storage
function saveLocally(date, mealType, calories, foodName) {


    //console.log('storing in ' + number)
    //window.localStorage.setItem(number + '', post)

    window.localStorage.setItem(date + '', mealType + "/" + calories + "/" + foodName)
    
    //can we change items? I think we can

    //we need to add multiple food mealtimes per day. how can we make it efficient?

    //clearScreen()
    //populate()
}

/*
    mm/dd/yyyymealType, "mealType"
    mm/dd/yyyycalories, x calories
    mm/dd/yyyyfoodName, "foodName"
*/
function postData() {

    //let size = window.localStorage.getItem(0 + '')

    date = document.getElementById("dateInput").value
    mealType = document.getElementById("mealType").value
    calories = document.getElementById("calories").value
    foodName = document.getElementById("foodName").value

    saveLocally(date, mealType, calories, foodName)
    //document.getElementById("postIt").value = ""
    //console.log(post)
    //let clone = document.getElementById("post").cloneNode(true);
    //clone.innerHTML = post
    //clone.style.backgroundColor = "lightgreen"
    //document.getElementById("post").appendChild(clone)

    //added new item, need to change the size
    //let size = window.localStorage.getItem(0 + '')
    //if (size == '0') {
    //    console.log('in postIt method and size is 0')
    //    size = 1
    //}
    //else {
    //    size = Math.floor(size)
    //    size += 1
    //}

    //window.localStorage.setItem(0 + '', size)

    saveLocally(size, post)
}

function populate() {
    
}

//plot the graph for weekly calorie intake
function plot() {

}