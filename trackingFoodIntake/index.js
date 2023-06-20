function trackCalories() {
    console.log('Tracking Calories!')

    var date = document.getElementById("dateInput").value

    var mealType = document.getElementById("mealType").value

    console.log(date)
    console.log(mealType)
    document.getElementById("totalCalories").innerHTML = date + ", " + mealType;
}