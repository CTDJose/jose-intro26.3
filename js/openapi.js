async function getTemperature() {
    const url =
        `https://api.open-meteo.com/v1/forecast` +
        `?latitude=32.7831` +
        `&longitude=-96.8067` +
        `&hourly=temperature_2m`+
        `&temperature_unit=fahrenheit`;

    const response = await fetch(url);
    const data = await response.json();

    console.log(data);

    const temperature =
        data.hourly.temperature_2m[0];

    document.getElementById("weatherData").innerHTML =
        `<h2>Temperature</h2>
         <p>${temperature}°F</p>`;
}

document
    .getElementById("temperatureButton")
    .addEventListener("click", getTemperature);


async function getPrecipitation() {
    const url =
        `https://api.open-meteo.com/v1/forecast` +
        `?latitude=32.7831` +
        `&longitude=-96.8067` +
        `&hourly=precipitation_probability`;

    const response = await fetch(url);
    const data = await response.json();

    console.log(data);

    const precipitation =
        data.hourly.precipitation_probability[0];

    document.getElementById("weatherData").innerHTML =
        `<h2>Precipitation Probability</h2>
         <p>${precipitation}%</p>`;
}

document
    .getElementById("precipitationButton")
    .addEventListener("click", getPrecipitation);