var city;

async function init() {
	//var x = document.getElementById("cityInput").value;

    const request = await fetch("https://ipinfo.io/json?token=319a65acfd0824");
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

function newCity(city) {
     $.getJSON("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&APPID=1606253280c81f3eeef2dde78882f19a", function(data) {

          //const createDiv = (icon, weather, temp, city, country) =>`<div class="WeatherInfo" id="city${}">`;
          //The API provides pics for the specific weather.
          //Therefore we try and obtain said pics.
		var icon = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";

          	var weather = data.weather[0].description;

          	var temp = Math.ceil(data.main.temp) + "\xB0 F";

          	var city = data.name;

          	var country = data.sys.country;

          	$('.icon').attr('src', icon);
          	$('.weather').append(weather);
          	$('.temp').append(temp);
          	$('.city').append(city);
          	$('.country').append(country);



	});
}
