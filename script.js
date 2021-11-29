// window.onload = function () {
//     weather.fetchWeather(citys[rand])
// } 

// let citys = ['London', 'Moscow', 'New York', 'Paris', 'Warsaw', 'Minsk']
// let rand = Math.floor(Math.random() * citys.length);


let weather = {
    'keyAPI': '0f2cf9fdf696a18cb7089fa0c5557d5e',
    fetchWeather: function(city) {
        fetch('https://api.openweathermap.org/data/2.5/weather?q='+ city +'&appid=' + this.keyAPI)
            .then(response => response.json())
            .then(data => this.displayWeather(data))
    },
    displayWeather: function(data) {
        const { name } = data;
        const {icon, description} = data.weather[0];
        const {temp, humidity} = data.main;
        const {speed} = data.wind;
        const {country} = data.sys
        console.log(name, icon, description, temp, humidity, speed);
        document.querySelector('.city').innerText = 'Weather in ' + name + '   ' + country;
        document.querySelector('.icon').src = "https://openweathermap.org/img/wn/"+ icon +"@2x.png";
        document.querySelector('.description').innerText = description;
        document.querySelector('.humidity').innerText = 'Humidity: ' + humidity + '%';
        document.querySelector('.temp').innerText = Math.floor(temp - 273.15) + '°C';
        document.querySelector('.wind').innerText = 'Wind speed: ' + speed + ' km/h';
        var url = "";

        switch(country) {
            case 'GB':
                url = "url('./backgrounds/GB.jpg')"
                break
                case 'PL': 
                    url="url('./backgrounds/PL.jpg')"
                    break
                    case 'DE': 
                    url="url('./backgrounds/DE.jpg')"
                    break
                    case 'RU': 
                    url="url('./backgrounds/RU.jpg')"
                    break
                    case 'CZ': 
                    url="url('./backgrounds/CZ.jpg')"
                    break
                    case 'LT': 
                    url="url('./backgrounds/LT.jpg')"
                    break

                    default :
                    url='./backgrounds/default.jpg'
                    break
        }
        document.querySelector('body').style.background = url + '0 0/cover no-repeat';
        
        
    },
    startWeather: function() {
        this.fetchWeather(document.querySelector('.callWeather').value)
        document.querySelector('.callWeather').value = ''
    }
}



document.getElementById('btnWeather').addEventListener('click', function() {
    weather.startWeather()
})

document.querySelector('.callWeather').addEventListener('keyup', function(event) {
    if (event.key == 'Enter') {
        weather.startWeather()
    }
})