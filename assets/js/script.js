var buttonEl = document.querySelector(".button")
var cityInputEl = document.querySelector(".city")
var ulEl = document.querySelector(".search-history")
HISTORY_KEY = ""
var citInput = ""
var inputs = JSON.parse(localStorage.getItem(HISTORY_KEY)) ?? [];

buttonEl.addEventListener("click", function () {
    var containerEl = document.querySelector(".current")
    containerEl.classList.add("borderr")
    var h2El = document.createElement("h2")
    var tempEl = document.createElement("h4")
    var milesEl = document.createElement("h4")
    var humidityEl = document.createElement("h4")
    var iconEl = document.createElement("h4")

    cityInput = cityInputEl.value
    cityInputEl.value = "";

    // 5 day forecast
    cardContainerEl = document.querySelector(".results-2")
    forecastTitleEl = document.querySelector(".forecast-title")
    forecastTitleEl.textContent = "5-Day Forecast:"

    card1El = document.createElement("section")
    card1El.classList.add("card")
    card1DateEl = document.createElement("h5")
    card1DateEl.textContent = moment().add(1, 'days').format(' (M/DD/YYYY)')
    card1TempEl = document.createElement("h5")
    card1WindEl = document.createElement("h5")
    card1HumidityEl = document.createElement("h5")

    card2El = document.createElement("section")
    card2El.classList.add("card")
    card2DateEl = document.createElement("h5")
    card2DateEl.textContent = moment().add(2, 'days').format(' (M/DD/YYYY)')
    card2TempEl = document.createElement("h5")
    card2WindEl = document.createElement("h5")
    card2HumidityEl = document.createElement("h5")

    card3El = document.createElement("section")
    card3El.classList.add("card")
    card3DateEl = document.createElement("h5")
    card3DateEl.textContent = moment().add(3, 'days').format(' (M/DD/YYYY)')
    card3TempEl = document.createElement("h5")
    card3WindEl = document.createElement("h5")
    card3HumidityEl = document.createElement("h5")

    card4El = document.createElement("section")
    card4El.classList.add("card")
    card4DateEl = document.createElement("h5")
    card4DateEl.textContent = moment().add(4, 'days').format(' (M/DD/YYYY)')
    card4TempEl = document.createElement("h5")
    card4WindEl = document.createElement("h5")
    card4HumidityEl = document.createElement("h5")

    card5El = document.createElement("section")
    card5El.classList.add("card")
    card5DateEl = document.createElement("h5")
    card5DateEl.textContent = moment().add(5, 'days').format(' (M/DD/YYYY)')
    card5TempEl = document.createElement("h5")
    card5WindEl = document.createElement("h5")
    card5HumidityEl = document.createElement("h5")

    cardContainerEl.appendChild(card1El)
    cardContainerEl.appendChild(card2El)
    cardContainerEl.appendChild(card3El)
    cardContainerEl.appendChild(card4El)
    cardContainerEl.appendChild(card5El)

    card1El.appendChild(card1DateEl)
    card1El.appendChild(card1TempEl)
    card1El.appendChild(card1WindEl)
    card1El.appendChild(card1HumidityEl)

    card2El.appendChild(card2DateEl)
    card2El.appendChild(card2TempEl)
    card2El.appendChild(card2WindEl)
    card2El.appendChild(card2HumidityEl)

    card3El.appendChild(card3DateEl)
    card3El.appendChild(card3TempEl)
    card3El.appendChild(card3WindEl)
    card3El.appendChild(card3HumidityEl)

    card4El.appendChild(card4DateEl)
    card4El.appendChild(card4TempEl)
    card4El.appendChild(card4WindEl)
    card4El.appendChild(card4HumidityEl)

    card5El.appendChild(card5DateEl)
    card5El.appendChild(card5TempEl)
    card5El.appendChild(card5WindEl)
    card5El.appendChild(card5HumidityEl)

    if (cityInput.length) {
        fetch("http://api.openweathermap.org/geo/1.0/direct?q=" + cityInput + "&limit=1&appid=4b7771966b72932cdb6e3f82d9e9915b")
            .then(response => response.json())
            .then((data) => {
                fetch("https://api.openweathermap.org/data/2.5/weather?lat=" + data[0].lat + "&lon=" + data[0].lon + "&appid=4b7771966b72932cdb6e3f82d9e9915b")
                    .then(response => response.json())
                    .then((data) => {
                        var nameData = data.name;
                        h2El.textContent = nameData + moment().format(' (M/DD/YYYY)')
                        var tempData = data.main.temp
                        tempEl.textContent = "Temp: " + ((tempData - 273.15) * 9 / 5 + 32).toFixed(2) + "°F"
                        var milesData = "Wind: " + data.wind.speed + " MPH"
                        milesEl.textContent = milesData
                        var humidityData = "Humidity: " + data.main.humidity + " %"
                        humidityEl.textContent = humidityData

                        containerEl.appendChild(h2El)
                        containerEl.appendChild(iconEl)
                        containerEl.appendChild(tempEl)
                        containerEl.appendChild(milesEl)
                        containerEl.appendChild(humidityEl)
                    });

                fetch("https://api.openweathermap.org/data/2.5/forecast?lat=" + data[0].lat + "&lon=" + data[0].lon + "&limit=5&appid=4b7771966b72932cdb6e3f82d9e9915b")
                    .then(response => response.json())
                    .then((data) => {

                        var temp1Data = ((data.list[6].main.temp_max - 273.15) * 9 / 5 + 32).toFixed(2) + " °F";
                        card1TempEl.textContent = "Temp: " + temp1Data
                        var wind1Data = (data.list[6].wind.speed)
                        card1WindEl.textContent = "Wind: " + wind1Data + " MPH"
                        var humidity1Data = (data.list[6].main.humidity)
                        card1HumidityEl.textContent = "Humidity: " + humidity1Data + " %"

                        var temp2Data = ((data.list[14].main.temp_max - 273.15) * 9 / 5 + 32).toFixed(2) + " °F";
                        card2TempEl.textContent = "Temp: " + temp2Data
                        var wind2Data = (data.list[14].wind.speed)
                        card2WindEl.textContent = "Wind: " + wind2Data + " MPH"
                        var humidity2Data = (data.list[14].main.humidity)
                        card2HumidityEl.textContent = "Humidity: " + humidity2Data + " %"

                        var temp3Data = ((data.list[22].main.temp_max - 273.15) * 9 / 5 + 32).toFixed(2) + " °F";
                        card3TempEl.textContent = "Temp: " + temp3Data
                        var wind3Data = (data.list[22].wind.speed)
                        card3WindEl.textContent = "Wind: " + wind3Data + " MPH"
                        var humidity3Data = (data.list[22].main.humidity)
                        card3HumidityEl.textContent = "Humidity: " + humidity3Data + " %"

                        var temp4Data = ((data.list[30].main.temp_max - 273.15) * 9 / 5 + 32).toFixed(2) + " °F";
                        card4TempEl.textContent = "Temp: " + temp4Data
                        var wind4Data = (data.list[30].wind.speed)
                        card4WindEl.textContent = "Wind: " + wind4Data + " MPH"
                        var humidity4Data = (data.list[30].main.humidity)
                        card4HumidityEl.textContent = "Humidity: " + humidity4Data + " %"

                        var temp5Data = ((data.list[38].main.temp_max - 273.15) * 9 / 5 + 32).toFixed(2) + " °F";
                        card5TempEl.textContent = "Temp: " + temp5Data
                        var wind5Data = (data.list[38].wind.speed)
                        card5WindEl.textContent = "Wind: " + wind5Data + " MPH"
                        var humidity5Data = (data.list[38].main.humidity)
                        card5HumidityEl.textContent = "Humidity: " + humidity5Data + " %"
                    })
            });
    } else {
        return;
    }

    inputs.push(cityInput);
    localStorage.setItem(HISTORY_KEY, JSON.stringify(inputs));
    renderSearchHistory()
})

var renderSearchHistory = function () {
    ulEl.innerHTML = ""
    for (let i = 0; i < inputs.length; i += 1) {
        let input = inputs[i];
        let liEl = document.createElement("li");
        liEl.textContent = input;
        liEl.addEventListener("click", function () {
            console.log(i, input);
        });
        ulEl.appendChild(liEl);
    }
}

renderSearchHistory()