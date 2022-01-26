const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=b07e68566e737fa311e70eaf3ac3971d&query=' + encodeURIComponent(latitude) + ',' + encodeURIComponent(longitude) + '&units=f'
    
    request({ url, json: true }, (error, {body}) => {
        
        if(error){
            callback('Unable to connect to weather service', undefined)
            
        } else if(body.error){
            callback('Unable to find', undefined)
            
        } else {
            const current = body.current
            callback(undefined, 
                current.weather_descriptions[0] + '. It is currently ' + current.temperature + ' F and it feels like ' + current.feelslike + ' F'
            )
        }
    })
}

module.exports = forecast
