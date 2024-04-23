function displayTemperature(response) {
  let headingElement = document.querySelector("#heading");
  let temperature = Math.round(response.data.temperature.current);
  let city = response.data.city;
  headingElement.innerHTML = `The temperature in ${response.data.city} is ${temperature}°C`;
}

let city = "Sydney";
let apiKey = "89a0236ba30082e9t4eod4296ef84dc0";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;

axios.get(apiUrl).then(displayTemperature);
