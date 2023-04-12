var city;
var weatherKey = config.OPEN_WEATHER_KEY;
var ipKey = config.IP_INFO_KEY;
//these keys don't show up even when printing them. Clearly we need to use a server to send the hidden API keys and then send to the frontend. 

async function init() {
	//var x = document.getElementById("cityInput").value;
     const request = await fetch("https://ipinfo.io/json?token="+ipKey)
     const json = await request.json()

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
     $.getJSON("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&APPID=" + weatherKey, function(data) {

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
