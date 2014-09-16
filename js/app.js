$(document).ready( function() {
	$('.weather-getter').submit( function(event){

		// zero out results if previous search has run
		$('.results').html('');
		// get the value of the location the user submitted
		var location = $(this).find("input[name='location']").val();
		getWeather(location);
	});
	
	getWeather("Chicago");
});

// takes error string and turns it into displayable DOM element
/*var showError = function(error){
	var errorElem = $('.templates .error').clone();
	var errorText = '<p>' + error + '</p>';
	errorElem.append(errorText);
};

// http://api.openweathermap.org/data/2.5/weather?q=London,uk
// returns json:
 {
"coord":{"lon":-0.13,"lat":51.51},
"sys":{"type":1,"id":5091,"message":0.1,"country":"GB","sunrise":1410153904,"sunset":1410201058},
"weather":[{"id":701,"main":"Mist","description":"mist","icon":"50n"}],
"base":"cmc stations",
"main":{"temp":285.15,"pressure":1018,"humidity":82,"temp_min":283.15,"temp_max":288.15},
"wind":{"speed":2.6,"deg":70},
"clouds":{"all":0},
"dt":1410139068,
"id":2643743,
"name":"London",
"cod":200
}

*/

// JSON object 
var currentWeather = {
	coord:{
		lon:-0.13,
		lat:51.51
	},
	sys:{
		type:1,
		id:5091,
		message:0.1,
		country:"GB",
		sunrise:1410153904,
		sunset:1410201058
	},
	weather:{
		id:701,
		main:"Mist",
		description:"mist",
		icon:"50n"
	},
	base:"cmc stations",
	main:{
		temp:285.15,
		pressure:1018,
		humidity:82,
		temp_min:283.15,
		temp_max:288.15
	},
	wind:{
		speed:2.6,
		deg:70
	},
	clouds:{
		all:0
	},
	dt:1410139068,
	id:2643743,
	name:"London",
	cod:200
};


var showCurrentWeather = function(weatherObj){
	/*
	var currentWeatherHTML = '<h1>&nbsp;Current Conditions</h1><div class="col-md-1 col-xs-12"><img height="120" width="150" src="http://openweathermap.org/img/w/'
	+ weatherObj.weather.icon + '.png" class="image img-rounded " alt="Current Weather Icon"></div>'
	+ '<div class="col-md-2 col-xs-12"><h2>' + weatherObj.weather.main + '<br>' + weatherObj.main.temp + '</h2></div>' //70 F<br>21C</h2></div>'
	+ '<div class="col-md-3 col-xs-12"><h4>Humidity ' + weatherObj.main.humidity + '%<br>Wind Speed ' + weatherObj.wind.speed
	+ '<br>Barometer ' + weatherObj.main.pressure + ' (hPa)<br><br>Cloudiness ' + weatherObj.clouds.all + '%</h4>'
	+ '</div>';
	*/

// clone our result template code
	var currentWeatherHTML = $('.templates .current-conditions').clone();
	
	// Set the current location
	var location = currentWeatherHTML.find('.location');
	location.text(weatherObj.name);

	// Set the weather icon
	var weatherIcon= currentWeatherHTML.find('.image');
	weatherIcon.attr('src', "http://openweathermap.org/img/w/" + weatherObj.weather.icon + ".png");
	
	// Weather description
	var main = currentWeatherHTML.find('.main');
	main.text(weatherObj.weather.main);

	var temperature = currentWeatherHTML.find('.temperature');
	var tempFahr = Math.round(9/5 * (weatherObj.main.temp - 273) + 32);
	var tempCels = Math.round(weatherObj.main.temp - 273.15);
	var tempText = tempFahr + " F/" + tempCels + " C";
	temperature.text(tempText);

	var humidity = currentWeatherHTML.find('.humidity');
	humidity.text(weatherObj.main.humidity);

	var windSpeed = currentWeatherHTML.find('.wind-speed');
	windSpeed.text(Math.round(2.237 * weatherObj.wind.speed) + " mph");

	var pressure = currentWeatherHTML.find('.pressure');
	pressure.text(weatherObj.main.pressure);

	var cloudiness = currentWeatherHTML.find('.cloudiness');
	cloudiness.text(weatherObj.clouds.all);

	/*questionElem.text(question.title);

	// set the date asked property in result
	var asked = result.find('.asked-date');
	var date = new Date(1000*question.creation_date);
	asked.text(date.toString());

	// set the #views for question property in result
	var viewed = result.find('.viewed');
	viewed.text(question.view_count);

	// set some properties related to asker
	var asker = result.find('.asker');
	asker.html('<p>Name: <a target="_blank" href=http://stackoverflow.com/users/' + question.owner.user_id + ' >' +
													question.owner.display_name +
												'</a>' +
							'</p>' +
 							'<p>Reputation: ' + question.owner.reputation + '</p>'
	);
	*/
	return currentWeatherHTML;


};


// find the current weather
var getCurrentWeather = function(city){

		$('.results').append(showCurrentWeather(currentWeather));

/*
	var request = {page: '1',
					pagesize: '100',
								site: 'stackoverflow'
								};
	var result = $.ajax({
		url: "http://api.stackexchange.com/2.2/tags/" + tags + "/top-answerers/all_time",
		data: request,
		dataType: "jsonp",
		type: "GET",
		})

	.done(function(result){
		var searchResults = showSearchResults(tags, result.items.length);

		$('.search-results').html(searchResults);

		$.each(result.items, function(i, item) {
			var tag_score = showTagScore(item);
			$('.results').append(tag_score);
		});
	})

	.fail(function(jqXHR, error, errorThrown){
		var errorElem = showError(error);
		$('.search-results').append(errorElem);
	});


*/

};

// JSON object
var hourlyWeather = {
	"cod":"200",
	"message":0.0045,
	"city":{
		"id":1851632,
		"name":"Shuzenji",
		"coord":{
			"lon":138.933334,
			"lat":34.966671
		},
		"country":"JP"
	},
	"cnt":38,
	"list":[
		{
        	"dt":1406106000,
        	"main":{
            	"temp":298.77,
            	"temp_min":298.77,
            	"temp_max":298.774,
            	"pressure":1005.93,
            	"sea_level":1018.18,
            	"grnd_level":1005.93,
            	"humidity":87
            },
        	"weather":[
        		{
        			"id":804,
        			"main":"Clouds",
        			"description":"overcast clouds",
        			"icon":"04d"
        		}
        	],
        	"clouds":{
        		"all":88
        	},
        	"wind":{
        		"speed":5.71,
        		"deg":229.501
        	},
        	"sys":{
        		"pod":"d"
        	},
        	"dt_txt":"2014-07-23 09:00:00"
        },
        {
        	"dt":1406106000,
        	"main":{
            	"temp":300.00,
            	"temp_min":298.77,
            	"temp_max":298.774,
            	"pressure":1005.93,
            	"sea_level":1018.18,
            	"grnd_level":1005.93,
            	"humidity":87
            },
        	"weather":[
        		{
        			"id":804,
        			"main":"Storms",
        			"description":"overcast clouds",
        			"icon":"04n"
        		}
        	],
        	"clouds":{
        		"all":88
        	},
        	"wind":{
        		"speed":5.71,
        		"deg":229.501
        	},
        	"sys":{
        		"pod":"d"
        	},
        	"dt_txt":"2014-07-23 12:00:00"
        }
    ]
}

var showHourlyWeather = function(weatherObj){

	var hourlyColumn = $('.templates .hourly-column').clone();

	// Set the time
	var time = hourlyColumn.find('.time');
	time.text(weatherObj.dt_txt.substring(11));

	// Set the weather icon
	var weatherIcon= hourlyColumn.find('.image');
	weatherIcon.attr('src', "http://openweathermap.org/img/w/" + weatherObj.weather[0].icon + ".png");

	var temperature = hourlyColumn.find('.temperature');
	var tempFahr = Math.round(9/5 * (weatherObj.main.temp - 273) + 32);
	var tempCels = Math.round(weatherObj.main.temp - 273.15);
	var tempText = tempFahr + " F/" + tempCels + " C";
	temperature.text(tempText);

	var main = hourlyColumn.find('.main');
	main.text(weatherObj.weather[0].main);

	return hourlyColumn;

};

var getHourlyWeather = function(city){
/*
api.openweathermap.org/data/2.5/forecast?q=London,us&mode=xml
*/
		var hourlyHeader = $('.templates .hourly-header').clone();
		$('.results').append(hourlyHeader);

		$.each(hourlyWeather.list, function(i, item) {
			var hourlyColumn = showHourlyWeather(item);
			$('.results .hourly-header .row').append(hourlyColumn);
		});

};


var extendedWeather = {
	cod:"200",
	message:0.0032,
	city:{
		id:1851632,
		name:"Shuzenji",
		coord:{
			lon:138.933334,
			lat:34.966671
		},
		country:"JP"
	},
	cnt:10,
	list:[
		{
    		dt:1406080800,
    		temp:{
        		day:297.77,
        		min:293.52,
        		max:297.77,
        		night:293.52,
        		eve:297.77,
        		morn:297.77
        	},
    		pressure:925.04,
    		humidity:76,
    		weather:[
    			{
    				id:803,
    				main:"Clear Sky",
    				description:"broken clouds",
    				icon:"01d"
    			}
    		],
    	},
    	{
    		dt:1406080800,
    		temp:{
        		day:297.77,
        		min:293.52,
        		max:297.77,
        		night:293.52,
        		eve:297.77,
        		morn:297.77
        	},
    		pressure:925.04,
    		humidity:76,
    		weather:[
    			{
    				id:803,
    				main:"Few Clouds",
    				description:"broken clouds",
    				icon:"02d"
    			}
    		],
    	},
    	{
    		dt:1406080800,
    		temp:{
        		day:297.77,
        		min:293.52,
        		max:297.77,
        		night:293.52,
        		eve:297.77,
        		morn:297.77
        	},
    		pressure:925.04,
    		humidity:76,
    		weather:[
    			{
    				id:803,
    				main:"Thunderstorm",
    				description:"broken clouds",
    				icon:"11d"
    			}
    		],
    	}
    ]
}


var showExtendedWeather = function(weatherObj, weatherDate){

	var extendedColumn = $('.templates .extended-column').clone();

	// Set the day
	var day = extendedColumn.find('.day');
	day.text(weatherDate.toDateString());

	// Set the weather icon
	var weatherIcon= extendedColumn.find('.image');
	weatherIcon.attr('src', "http://openweathermap.org/img/w/" + weatherObj.weather[0].icon + ".png");


	var temperature = extendedColumn.find('.temperature');
	var tempFahr = Math.round(9/5 * (weatherObj.temp.max - 273) + 32);
	var tempCels = Math.round(weatherObj.temp.max - 273.15);
	var tempText = tempFahr + " F/" + tempCels + " C";

	temperature.text(tempText);

	var main = extendedColumn.find('.main');
	main.text(weatherObj.weather[0].main);


	return extendedColumn;

};

var getExtendedWeather = function(city){
/*
 api.openweathermap.org/data/2.5/forecast/daily?q=London&mode=xml&units=metric&cnt=7
*/

		var extendedHeader = $('.templates .extended-header').clone();
		$('.results').append(extendedHeader);

		var weatherDate = new Date();
		$.each(extendedWeather.list, function(i, item) {
			var extendedColumn = showExtendedWeather(item,weatherDate);
			$('.results .extended-header .row').append(extendedColumn);
			weatherDate.setDate(weatherDate.getDate() + 1);
		});

};

var getCity = function(location){
	return "Valparaiso";
};

// takes a zipcode/city 
// to send to weathermap for results
var getWeather = function(location) {

	var city = getCity(location);

	if (city != ''){
		getCurrentWeather(city);
		getHourlyWeather(city);
		getExtendedWeather(city);
	};
	
};
	