let f = prompt("enter temp in fahendeit");
let fahrenheit = Math.round(f);
let celsius = ((fahrenheit - 32) * 5) / 9;
document.querySelector(".js-fahrenheit").innerHTML =
  `given temp in fahrenheit - ${fahrenheit}`;

// document.querySelector(".js-celsius").innerHTML = ` temp in celsius-${celsius}`;
document.querySelector(".js-celsius").innerHTML =
  `Temp in Fahrenheit - ${Math.round(celsius)}`;
