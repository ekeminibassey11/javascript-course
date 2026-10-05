// Temperature Converter

let celcius = -17;
let fahrenheit = (celcius * 9/5) + 32;
let kelvin = (celcius + 273.15);
console.log(celcius, fahrenheit, kelvin);

if(celcius<=0){
    console.log("It's freezing!");
}

else if(celcius>30){
    console.log("It's hot!");
}