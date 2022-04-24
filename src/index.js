import './main.scss';

console.log("wassup");
import iro from '@jaames/iro';

import chroma from "chroma-js";

document.body.style.zoom = "100%";

var colorPicker = new iro.ColorPicker(".colorPicker", {
  // color picker options
  // Option guide: https://iro.js.org/guide.html#color-picker-options
  width: 350,
  colors: ["rgb(118,70,251)","rgb(255,70,251)"],

  borderWidth: 5,
  borderColor: "rgb(118,70,251)",
});

var values = document.getElementById("values");
var hexInput = document.getElementById("hexInput");

var Color1 = document.getElementById("Color1Display");

var Color2 = document.getElementById("Color2Display");

var colorBox = document.getElementById("colorbox");

var colorBox2 = document.getElementById("colorbox2")

var colorBox3 = document.getElementById("colorbox3")
//var hslInput = document.getElementById("HSLDisplay");
var colorinfo = document.getElementById("colorinfo");


var c1 = document.getElementById("c1");
var c2 = document.getElementById("c2");
var c3 = document.getElementById("c3");
var c4 = document.getElementById("c4");
var c5 = document.getElementById("c5");
var c6 = document.getElementById("c6");

var c7 = document.getElementById("c7");
var c8 = document.getElementById("c8");
var c9 = document.getElementById("c9");
var c10 = document.getElementById("c10");
var c11 = document.getElementById("c11");
var c12 = document.getElementById("c12");

var c13 = document.getElementById("c13");
var c14 = document.getElementById("c14");
var c15 = document.getElementById("c15");
var c16 = document.getElementById("c16");
var c17 = document.getElementById("c17");
var c18 = document.getElementById("c18");
// https://iro.js.org/guide.html#color-picker-events

var c1t = document.getElementById("c1t");
var c2t = document.getElementById("c2t");
var c3t = document.getElementById("c3t");
var c4t = document.getElementById("c4t");
var c5t = document.getElementById("c5t");
var c6t = document.getElementById("c6t");
var c7t = document.getElementById("c7t");
var c8t = document.getElementById("c8t");
var c9t = document.getElementById("c9t");
var c10t = document.getElementById("c10t");
var c11t = document.getElementById("c11t");
var c12t = document.getElementById("c12t");
var c13t = document.getElementById("c13t");
var c14t = document.getElementById("c14t");
var c15t = document.getElementById("c15t");
var c16t = document.getElementById("c16t");
var c17t = document.getElementById("c17t");
var c18t = document.getElementById("c18t");

var savedColor1 = "#ff46fb";

var savedHue1 = 301;

var savedColor2 = "#7646fb";

var savedHue2 = 256;



colorPicker.on(["color:init", "color:change"], function(color){
  // Show the current color in different formats
  // Using the selected color: https://iro.js.org/guide.html#selected-color-api



  var selectedTextColor =  getContrastColor(color.rgba.r,color.rgba.g,color.rgba.b,color.rgba.a);
  //set Text Color




  if (color.index == 1) {
    colorBox2.style.backgroundColor = color.rgbString;
    Color1.innerHTML = [
      color.rgbString,
      color.hslString,
      '\n',
      color.hexString,

    ].join("<br>");
    colorBox2.style.color = selectedTextColor;

    savedColor1 = color.hexString;
    savedHue1 = color.hsl.h;


  } else {
    colorbox3.style.backgroundColor = color.rgbString;
    colorbox.style.color = color.rgbString;


    Color2.innerHTML = [
      color.rgbString,
      color.hslString,
      '\n',
      color.hexString,

    ].join("<br>");

    colorbox3.style.color = selectedTextColor;

    savedColor2 = color.hexString;
    savedHue2 = color.hsl.h;

  }
  colorBox.style.color = 'white';
  hexInput.style.backgroundColor = color.hexString;
  hexInput.value = color.hexString;
  hexInput.style.color = selectedTextColor;

  generateColors(savedColor1, savedColor2);

});


var generatedColor = [];

var mono1 = [];
var mono2 = [];

function generateColors(color1 ,color2) {
  generatedColor = chroma.scale([color1,color2]).mode('lch').colors(6);

  var ColorScheme = require('color-scheme');

  var scheme = new ColorScheme;
  scheme.from_hue(savedHue1)         // Start the scheme
        .scheme('triade')     // Use the 'triade' scheme, that is, colors
                              // selected from 3 points equidistant around
                              // the color wheel.
        .variation('soft');   // Use the 'soft' color variation

  mono1 = scheme.colors();




  var scheme = new ColorScheme;
  scheme.from_hue(savedHue2)         // Start the scheme
        .scheme('triade')     // Use the 'triade' scheme, that is, colors
                              // selected from 3 points equidistant around
                              // the color wheel.
        .variation('soft');   // Use the 'soft' color variation

  mono2 = scheme.colors();


  injectGradient();


 injectText();

}

function injectText() {

    c1t.textContent = generatedColor[0];
    c2t.textContent = generatedColor[1];
    c3t.textContent = generatedColor[2];
    c4t.textContent = generatedColor[3];
    c5t.textContent = generatedColor[4];
    c6t.textContent = generatedColor[5];

    c7t.textContent = returnfullhash(mono1[0]);
    c8t.textContent = returnfullhash(mono1[1]);
    c9t.textContent = returnfullhash(mono1[2]);
    c10t.textContent = returnfullhash(mono1[3]);
    c11t.textContent = returnfullhash(mono1[4]);
    c12t.textContent = returnfullhash(mono1[5]);

    c13t.textContent = returnfullhash(mono2[0]);
    c14t.textContent = returnfullhash(mono2[1]);
    c15t.textContent = returnfullhash(mono2[2]);
    c16t.textContent = returnfullhash(mono2[3]);
    c17t.textContent = returnfullhash(mono2[4]);
    c18t.textContent = returnfullhash(mono2[5]);
}

function returnfullhash(hexcode) {
  return "#"+hexcode;
}


function injectGradient() {
  c1.style.backgroundColor = generatedColor[0];
  c2.style.backgroundColor = generatedColor[1];
  c3.style.backgroundColor = generatedColor[2];
  c4.style.backgroundColor = generatedColor[3];
  c5.style.backgroundColor = generatedColor[4];
  c6.style.backgroundColor = generatedColor[5];

  c7.style.backgroundColor = "#"+mono1[0];
  c8.style.backgroundColor = "#"+mono1[1];
  c9.style.backgroundColor = "#"+mono1[2];
  c10.style.backgroundColor = "#"+mono1[3];
  c11.style.backgroundColor = "#"+mono1[4];
  c12.style.backgroundColor = "#"+mono1[5];

  c13.style.backgroundColor = "#"+mono2[0];
  c14.style.backgroundColor = "#"+mono2[1];
  c15.style.backgroundColor = "#"+mono2[2];
  c16.style.backgroundColor = "#"+mono2[3];
  c17.style.backgroundColor = "#"+mono2[4];
  c18.style.backgroundColor = "#"+mono2[5];

}


function getContrastColor(R, G, B, A) {
  const brightness = R * 0.299 + G * 0.587 + B * 0.114 + (1 - A) * 255;

  return brightness > 186 ? "#000000" : "#FFFFFF";
}


// values.innerHTML = [
//   "hex: " + color.hexString,
//   "rgb: " + color.rgbString,
//   "hsl: " + color.hslString,
//
// ].join("<br>");

hexInput.addEventListener('change', function() {
  colorPicker.color.hexString = this.value;

});




//CHROMA GENERATOR
