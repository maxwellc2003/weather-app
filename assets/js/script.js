// fetch("https://api.openweathermap.org/data/2.5/weather?lat=38.58&lon=-121.49&appid=4b7771966b72932cdb6e3f82d9e9915b")
//     .then(response => response.json())
//     .then(data => console.log(data));

fetch("http://api.openweathermap.org/geo/1.0/direct?q=Sacramento&limit=1&appid=4b7771966b72932cdb6e3f82d9e9915b")
    .then(response => response.json())
    .then(data => console.log(data));





    // .then((data) => {
    //     var yourVariableName = data.result.public_holiday_description;
    //     eventEl.innerHTML = yourVariableName;
    // });
