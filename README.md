Combination of Html5 Boilerplate and SASS to be used as a future template 


I used IRO.JS, color-scheme.js, and Chroma.js.

IRO.JS is a color wheel plugin. 
Both color-sheme and chroma were used produce the pallettes.


First when implementing, please use Iro.js codepen tutorials. 

https://codepen.io/rakujira/pens/public - This for intepreting what he's doing in his html - css - js. 

I also used his documentation extensivley which can be found https://iro.js.org/.

the easiest one to follow along is this particular codepen: https://codepen.io/rakujira/pen/WZOeNq.

The biggest rule of thumb when designing between both html and js is that you must use IDs in order to communicate changes to divs. Div CSS is mainly for aesthietic only. In the code pen tutorial above you can see that he grabs the id elements of the html listed as "values" and "hexInput". 

The main body to this whole entire program is color picker's listener -

colorPicker.on(["color:init", "color:change"], function(color){ }


//Inside this function is where the soul of my code was. If the color picker detected any type of change, it would refer to this. Do note that if you have multiple color picker nodes inside one picker. You must use color.index to detect which one is being changed. I have if else statements to detect. In this function I also have a function called generateColors(color1, color2) at the very end to always call when the picker runs. 
(Please implement this slowly, you will know that your js broke because the text for innerHTML will not show /nor change)

Some main things to note is that:
color.RgbString will grab RGB string etc 
color.RGB.r = grab r value from RGB value object 

(Please note on start the generateColors will run but on default color.rgb/color.hsl is not set even though the color picker shows them. Please set these individually first) - thats why I have savedColors1 and savedColors2 set on their respective colors at first.

my js categorization is as follows 
////////////////////
- imports 

- var (name) for any document object id like to get
- var for starting variables such as hue 1/2 and savedColors1/2
- Color picker listener
  - if else (color index) - set elements -> save new savedColor and savedHue 
  - Generate Color -> Inject Text and colors 
- External Helper Functions 
- Event change listener for input (if a user types in their own input, it will go through here)
 ////////////// 
 
 Some QOL changes i've made were that I used a formula to dictate black or white text color depending on hue of the color for better visasbility. 


GenerateColors function's purpose is generate a color pallette into an array using Chroma JS and store it. I also have two other monochromatic functions from color-scheme.js generated in here as well. Color-scheme is unique in that it takes a hue. I grab the hue of a color from grabbing a color's color.hsl.h value and storing it. You'll also have to set these on start as well. Do note color scheme doesn't return the #, so I have to make an external function to add that whenever i needed it. After this I used injectText function which basically just sets the boxes to thier respective colors and full text.

Chroma.JS documentation: https://gka.github.io/chroma.js/
ex:  
generatedColor = chroma.scale([color1,color2]).mode('lch').colors(6);
//Generates 6 colors from color1 to color two 


Color-scheme.js 

ex:   
var scheme = new ColorScheme;
  scheme.from_hue(savedHue1)   // Start scheme and generate from savedHue should be an int
        .scheme('triade')    
        .variation('soft');   

  mono1 = scheme.colors();


these are how I generated the colors.

