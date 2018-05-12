var request = require('request');

var getWeather = (lat,lang,callback)=>{
	request({
		url:'https://api.darksky.net/forecast/936616e91ef8ec385fb3b39a365e59f3/'+lat+','+lang,
		json:true
	},(error,response,body)=>{
		if(error){	
			callback("Unable to connect to forecast server");
		}else if(response.statusCode===400){
			callback("bad request");
		}else{
			callback(undefined,{temperature:body.currently.temperature,
								apparentTemperature:body.currently.apparentTemperature
			});	
		}	
	});	
};


module.exports.getWeather = getWeather;
