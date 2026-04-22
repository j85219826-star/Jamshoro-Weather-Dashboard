// Hardcoded today's weather for Jamshoro, Sindh (April 21, 2026)
const todayWeather = {
  city: "Jamshoro",
  temp: 29,          // Current temperature in °C
  feels_like: 32,    // Feels like temperature in °C
  condition: "Sunny",
  humidity: 49,      // %
  wind: 21           // km/h
};

document.getElementById("weatherInfo").innerHTML = `
  <h3>${todayWeather.city}</h3>
  <p>Temperature: ${todayWeather.temp} °C</p>
  <p>Feels Like: ${todayWeather.feels_like} °C</p>
  <p>Condition: ${todayWeather.condition}</p>
  <p>Humidity: ${todayWeather.humidity}%</p>
  <p>Wind: ${todayWeather.wind} km/h</p>
`;
