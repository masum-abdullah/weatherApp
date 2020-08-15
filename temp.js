


const enterLocation = document.getElementById('enter-location');
const button = document.getElementById('button');
const weatherIcon = document.getElementById('weather-icon');
const yourLocation = document.getElementById('y-location');
const temp = document.getElementById('temp');
const skyCondition = document.getElementById('sky-condition');
const kelvin = 273;

const getWeather = button.addEventListener('click', function(){
    document.getElementById('button');
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+ enterLocation.value +'&appid=677bc43da6e1bd6091619e71da09d7dd')
        .then(res => res.json())
        .then(data => {
            let yourLocationValue = data['name'];
            let weatherIconValue = data.weather[0].icon;
            let tempvalue = Math.floor(data['main']['temp']- kelvin);
            let skyConditionValue = data['weather']['0']['description'];

            yourLocation.innerHTML = yourLocationValue;
            weatherIcon.innerHTML = `<img src="http://openweathermap.org/img/w/${weatherIconValue}.png">`;
            temp.innerHTML = tempvalue;
            skyCondition.innerHTML = skyConditionValue;


        })
    
    .catch(err => alert("Wrong city name!"))
})



