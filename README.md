<p align="center"><img src="assets/img/icon.png" alt="Is it Sunny? icon" width="96"></p>

# Is it Sunny?

A lightweight weather page: current conditions and the next days' forecast for any city, or for where you are.

[![CI](https://github.com/LaCobble/It_is_Sunny/actions/workflows/ci.yml/badge.svg)](https://github.com/LaCobble/It_is_Sunny/actions/workflows/ci.yml)
![Version](https://img.shields.io/badge/version-1.0.0-blue)
![JavaScript](https://img.shields.io/badge/JavaScript-jQuery-F7DF1E?logo=javascript&logoColor=black)
![Bootstrap](https://img.shields.io/badge/Bootstrap-4-7952B3?logo=bootstrap&logoColor=white)
[![License: MIT](https://img.shields.io/badge/license-MIT-green)](LICENSE)

## What it does

A static web page (HTML, Bootstrap, jQuery) that calls the [OpenWeatherMap](https://openweathermap.org/api) forecast API and shows:

- temperature, humidity, wind speed, sunrise and sunset for today and the next two days;
- a search bar to look up any city (the default is Vannes, France);
- a geolocation button that loads the weather where you are.

## Screenshot

<p align="center">
<img src="https://github.com/LaCobble/It_is_Sunny/assets/71151090/6b2f8dec-16f7-4ec5-a965-0016326dd001" alt="Is it Sunny? screenshot" width="60%">
</p>

<sub>Screenshot from 2023. The page needs your own API key to display data.</sub>

## Prerequisites

- A modern web browser
- A free [OpenWeatherMap API key](https://home.openweathermap.org/users/sign_up)

## Getting started

```bash
git clone https://github.com/LaCobble/It_is_Sunny.git
cd It_is_Sunny
```

1. Open `assets/js/app.js` and replace `YOUR_OPENWEATHERMAP_API_KEY` with your key. **Do not commit your key.**
2. Open `index.html` in your browser (or serve the folder, e.g. `python3 -m http.server`, which geolocation may require).

There is no build step and no test suite; the CI checks the JavaScript syntax, that every local asset referenced by the HTML exists, and scans for secrets.

## Project structure

```
It_is_Sunny/
├── index.html
└── assets/
    ├── css/        # Bootstrap and custom styles
    ├── img/        # icon, humidity icon, loader
    └── js/
        ├── app.js      # API calls and rendering
        └── utility.js  # helpers (Kelvin to Celsius, padding, colour conversion)
```

## What it demonstrates

- Consuming a third-party REST API from the browser with AJAX.
- Browser geolocation and dynamic DOM updates with jQuery.
- Date/time handling with Moment.js and sun times with SunCalc.
- Responsive layout with Bootstrap.

## Context

Personal / school web project built in June 2023. Kept as a portfolio piece; no longer actively developed.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) and the [Code of Conduct](CODE_OF_CONDUCT.md). Security issues: [SECURITY.md](SECURITY.md).

## License and credits

[MIT](LICENSE) © LaCobble. Weather data from [OpenWeatherMap](https://openweathermap.org/). Built with [Bootstrap](https://getbootstrap.com/), [jQuery](https://jquery.com/), [Moment.js](https://momentjs.com/), [SunCalc](https://github.com/mourner/suncalc), [Weather Icons](https://erikflowers.github.io/weather-icons/), [Balloon.css](https://kazzkiq.github.io/balloon.css/) and [Font Awesome](https://fontawesome.com/).
