// Demo mode: sample forecast in the OpenWeatherMap /forecast format,
// used by app.js when no API key is configured. Values are illustrative, not real measurements.
function demoForecast() {
    var days = [
        { id: 800, temp: 291.15, humidity: 62, speed: 3.6 }, // clear sky
        { id: 802, temp: 289.65, humidity: 70, speed: 5.1 }, // scattered clouds
        { id: 500, temp: 287.15, humidity: 84, speed: 6.7 }  // light rain
    ];
    var list = [];
    // The API returns one entry every 3 hours; app.js reads entries 0, 8 and 16.
    for (var i = 0; i < 17; i++) {
        var d = days[Math.min(Math.floor(i / 8), 2)];
        list.push({ main: { temp: d.temp, humidity: d.humidity }, wind: { speed: d.speed }, weather: [{ id: d.id }] });
    }
    return { city: { name: "Vannes", country: "FR", coord: { lat: 47.6582, lon: -2.7608 } }, list: list };
}
