const request = require('request')

const forecast = (latitude, longitude, callback) => {
        const url = 'http://api.weatherstack.com/current?access_key=8247f6e5797065a03ab56c2056265ade&query=' + latitude + ',' + longitude 

            
        request({ url, json: true}, (error, {body}) => {
            
            if(error){
                callback('Unable to connect to weather service!', undefined)
            }else if(body.error){
                callback('Unable to find location')
            }else{
                callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degrees celcius. It feels like ' + body.current.feelslike + 
                ' degrees celcius. The Precipitation is ' + body.current.precip + 'cm.' + ' The wind direction is ' + body.current.wind_dir +' and has a speed of ' + body.current.wind_speed +'km/hr.')
            }
        })
    
    

}
module.exports = forecast