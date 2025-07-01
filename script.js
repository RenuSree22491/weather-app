const apiKey = "d17a8b7252aa0edb21df27bf6b4680d2"; // Replace with your key if different

function getWeather() {
  const city = document.getElementById("cityInput").value.trim();

  if (city === "") {
    document.getElementById("weatherResult").innerHTML = "❗ Please enter a city name.";
    return;
  }

  const url = https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error("City not found");
      }
      return response.json();
    })
    .then(data => {
      const result = `
        <h3>${data.name}, ${data.sys.country}</h3>
        <p>🌡 Temperature: ${data.main.temp}°C</p>
        <p>⛅ Weather: ${data.weather[0].description}</p>
      `;
      document.getElementById("weatherResult").innerHTML = result;
    })
    .catch(error => {
      document.getElementById("weatherResult").innerHTML = "❌ Error: " + error.message;
    });
}