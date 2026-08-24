let c = prompt("enter temp in fahendeit");
let celsius = Math.round(c);
let fahrenheit = (celsius * 9) / 5 + 32;
document.querySelector(".js-celsius").innerHTML =
  `given temp in celsius - ${celsius}`;
document.querySelector(".js-fahrenheit").innerHTML =
  ` temp in fahrenheit-${fahrenheit}`;
