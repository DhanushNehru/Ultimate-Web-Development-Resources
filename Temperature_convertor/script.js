const celsiusEl = document.getElementById("celsius");
const fahrenheitEl = document.getElementById("fahrenheit");
const kelvinEl = document.getElementById("kelvin");

function computeTemp(event) {
  const currentValue = +event.target.value; //to convert in number adding +

  switch (event.target.name) {
    case "celsius":
      kelvinEl.value = (currentValue + 273.15).toFixed(2);
      fahrenheitEl.value = (currentValue * 1.8 + 32).toFixed(2);
      break;

    case "fahrenheit":
      celsiusEl.value = ((currentValue - 32) / 1.8).toFixed(2);
      kelvinEl.value = ((currentValue - 32) / 1.8 + 273.15).toFixed(2);
      break;

    case "kelvin":
      celsiusEl.value = (currentValue - 273.15).toFixed(2);
      fahrenheitEl.value = ((currentValue - 273.15) * 1.8 + 32).toFixed(2);
      break;
    default:
      break;
  }
}
