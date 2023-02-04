const API_KEY = "7fed750b52141baa5b2fa7f80c96fd79"; // Klucz API
const cityForm = document.getElementById("cityForm");
const cityInput = document.getElementById("city");
const cityContainer = document.getElementById("cities");

// Fetching data from openweathermap
async function getWeather(city) {
    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    );
    return await response.json();
}

// Creating container for city
function cityCreator(city) {
    const cityContainer = document.createElement("div");
    const cityName = document.createElement("h2");
    const weatherContainer = document.createElement("div");

    cityContainer.classList.add("city");
    cityName.textContent = city;
    weatherContainer.classList.add("weather");

    getWeather(city).then((data) => {
        // Getting appropriate icon for weather type
        const icon = data.weather[0].icon;
        const img = document.createElement("img");
        img.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;

        // Getting temperature
        const temp = data.main.temp - 273.15;
        const tempContainer = document.createElement("p");
        tempContainer.textContent = `Temperatura: ${temp.toFixed(1)}°C`;

        // Getting humidity
        const humidity = data.main.humidity;
        const humidityContainer = document.createElement("p");
        humidityContainer.textContent = `Wilgotność: ${humidity}%`;

        weatherContainer.append(img, tempContainer, humidityContainer);
    });

    // Creating delete button
    const delButton = document.createElement("button");
    delButton.textContent = "Usuń";
    delButton.addEventListener("click", () => {
        deleteCity(city);
    });

    cityContainer.append(cityName, weatherContainer, delButton);
    return cityContainer;
}

let cities = getSavedCities();
renderCities();

// City input form
cityForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const city = cityInput.value;
    cityInput.value = "";

    if (city) {
        addCity(city);
    }
});

// Adding city to array and preventing from adding more then 10
function addCity(city) {
    if (cities.length >= 10) {
        alert("You can't add more then 10 cities");
        return;
    }
    cities.push(city);
    saveCities();
    renderCities();
}

// Removing city from the array
function deleteCity(city) {
    cities = cities.filter((loc) => loc !== city);
    saveCities();
    renderCities();
}

// Saving city array in localStorage
function saveCities() {
    localStorage.setItem("cities", JSON.stringify(cities));
}

// Getting saved cities from localStorage
function getSavedCities() {
    const savedCities = localStorage.getItem("cities");
    if (savedCities) {
        return JSON.parse(savedCities);
    } else {
        return [];
    }
}

// Rendering cities
function renderCities() {
    cityContainer.innerHTML = "";

    cities.forEach((city) => {
        const cityEl = cityCreator(city);
        cityContainer.append(cityEl);
    });
}