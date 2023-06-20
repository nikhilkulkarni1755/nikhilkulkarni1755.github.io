function trackCalories() {
    console.log('Tracking Calories!')

    var date = document.getElementById("dateInput").value

    var mealType = document.getElementById("mealType").value

    console.log(date)
    console.log(mealType)
    document.getElementById("totalCalories").innerHTML = date + ", " + mealType;
}

//save the data locally within local Storage
function saveLocally() {

}

//plot the graph for weekly calorie intake
function plot() {

}