// Hardcoded today's weather for Jamshoro, Sindh
const todayWeather = {
  city: "Jamshoro",
  temp: 29,
  feels_like: 32,
  condition: "Sunny",
  humidity: 49,
  wind: 21
};

document.getElementById("weatherInfo").innerHTML = `
  <h3>${todayWeather.city}</h3>
  <p>Temperature: ${todayWeather.temp} °C</p>
  <p>Feels Like: ${todayWeather.feels_like} °C</p>
  <p>Condition: ${todayWeather.condition}</p>
  <p>Humidity: ${todayWeather.humidity}%</p>
  <p>Wind: ${todayWeather.wind} km/h</p>
`;
