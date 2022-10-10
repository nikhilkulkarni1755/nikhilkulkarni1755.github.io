var city;

async function init() {
	//var x = document.getElementById("cityInput").value;

    
    const json = await request.json();

    //console.log(jsonResponse.ip, jsonResponse.city);
    //city = jsonResponse.city;
    console.log(json.ip, json.city);
    city = json.city;
    console.log(city + " logged.");

    var place = city + ",us";
    console.log(place);

    newCity(place);
}

//jQuery to add data from api to html
function newCity(city) {
     $.getJSON("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial", function(data) {

          //const createDiv = (icon, weather, temp, city, country) =>`<div class="WeatherInfo" id="city${}">`;
          //The API provides pics for the specific weather.
          //Therefore we try and obtain said pics.
		var icon = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";

          	var weather = data.weather[0].description;

          	var temp = Math.ceil(data.main.temp) + "\xB0 F";

          	var city = data.name;

          	var country = data.sys.country;

          	$('.icon').attr('src', icon);
               $('.weather').html(weather);
               $('.temp').html(temp);
               $('.city').html(city);
               $('.country').html(country);
          	//$('.weather').append(weather);
          	//$('.temp').append(temp);
          	//$('.city').append(city);
          	//$('.country').append(country);



	});
}
