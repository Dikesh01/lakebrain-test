const apiKey = "840de593b7028de6e424162454790fe5";
const searchButton = document.getElementById("searchButton");
const overlay = document.getElementById("overlay");
const cityName = document.getElementById("cityName");
const temperature = document.getElementById("temperature");
const weatherDescription = document.getElementById("weatherDescription");

searchButton.addEventListener("click", () => {
    const cityInput = document.getElementById("cityInput").value;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&units=metric&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            cityName.innerText = "City: " + data.name;
            temperature.innerText = "Temperature: " + data.main.temp + "°C";
            weatherDescription.innerText = "Weather: " + data.weather[0].main + ", " + data.weather[0].description;
            overlay.style.display = "flex";
        })
        .catch(error => console.error("Error fetching data:", error));
});

function closeOverlay() {
    overlay.style.display = "none";
}
