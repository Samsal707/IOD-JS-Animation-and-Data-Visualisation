//Setup website here
let hero = document.querySelector("#hero");
let villian = document.querySelector("#villian");
let lightning = document.querySelector("#lightning");

//Setup animation code here
let lightningStart = {"left": "290px", "top": "320px"};
let lightningEnd   = {"left": "900px", "top": "0px"};
let options        = {"duration": 1000};

//Run animation code here
lightning.animate([lightningStart, lightningEnd], options);