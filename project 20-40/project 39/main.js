function checkTemperature(temp) {
  if (temp <= 15) {
    return "cold";
  } else if (temp >= 16 && temp < 30) {
    return "normal";
  } else {
    return "hot";
  }
}
let temp = Number(prompt("Enter temperature:"));
document.querySelector(".total-amount").innerText = checkTemperature(temp);
