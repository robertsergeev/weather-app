const tempTxt = document.getElementById('temp');

const API_KEY = 'YOUR_API_KEY';

async function getTemperature(lat, lon) {
  let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`);

  let data = await response.json();

  let tempKelvin = data.main.temp;
  let celsium = KelvintoCelsius(tempKelvin);
  
  return celsium;
}


function KelvintoCelsius(kelvin) {
  return kelvin - 273.15;
}


function showTemp() {
  navigator.geolocation.getCurrentPosition(async (position) => { 
    
    let currentTemp = await getTemperature(position.coords.latitude, position.coords.longitude);
    
    tempTxt.innerHTML = currentTemp.toFixed(0);
  });
}


showTemp();
