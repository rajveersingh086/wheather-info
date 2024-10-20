document.getElementById('fetchWeather').addEventListener('click', function() {
    const city = document.getElementById('location').value;
    const API_KEY = '5cf581ace89382e7664c8cbb787e16e1';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    if (!city) {
        alert('Please enter a city name.');
        return;
    }

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found');
            }
            return response.json();
        })
        .then(data => {
            const description = data.weather[0].description;
            const temperature = data.main.temp;
            const humidity = data.main.humidity;
            const windSpeed = data.wind.speed;

            document.getElementById('city').textContent = `City: ${data.name}`;
            document.getElementById('description').textContent = `Weather: ${description}`;
            document.getElementById('temperature').textContent = `Temperature: ${temperature} °C`;
            document.getElementById('humidity').textContent = `Humidity: ${humidity}%`;
            document.getElementById('wind').textContent = `Wind Speed: ${windSpeed} m/s`;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            alert('City not found or unable to fetch weather data.');
        });
});
