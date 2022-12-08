//Setup website here
let hero = document.querySelector("#hero");
let villian = document.querySelector("#villian");
let lightning = document.querySelector("#lightning");

//Setup animation code here
let lightningStart = {"left": "290px"};
let lightningEnd   = {"left": "900px"};
let options        = {"duration": 1000};

let hitTheVillian = () => {
  let villianStart = { 
    transform: 'scale(1)'
  };
  let villianEnd = {
    transform: 'scale(0)'
  };
  let options = {"duration": 1500};
  villian.animate([villianStart, villianEnd], options);
}

//Run animation code here
lightning.animate([lightningStart, lightningEnd], options).onfinish = hitTheVillian; 