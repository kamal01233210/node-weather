const yargs = require('yargs');

const geocode = require('./geocode/geocode');
const weather = require('./weatherdir/weather');

const argv = yargs
	.options({
		a:{
			demand:true,
			alias:'address',
			describe:'Addres to be fetched',
			string:true
		}
	})
	.help()
	.alias('help','h')
	.argv;


geocode.geocodeAddress(argv.address,(errorMessage,results)=>{
	if(errorMessage){
		console.log(errorMessage);
	}else{
		console.log(results.address);
		weather.getWeather(results.latitude,results.longitude,(errorMessage,weatherResults)=>{
			if(errorMessage){
				console.log(errorMessage);
			}else{
				console.log(JSON.stringify(weatherResults,undefined,2));
			}
		});
	}
});

