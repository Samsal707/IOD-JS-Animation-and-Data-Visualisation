//Setup website here
let hero = document.querySelector("#hero");
let villian = document.querySelector("#villian");
let lightning = document.querySelector("#lightning");

//Setup animation code here
let lightningStart = {"left": "290px"};
let lightningEnd   = {"left": "900px"};
let options        = {"duration": 800};

let hitTheVillian = () => {
  let villianStart = { 
    transform: 'rotate(0deg)',
    opacity: 100
  };
  let villianEnd = {
    transform: 'rotate(1000deg)',
    opacity: 0
  };
  let options = {"duration": 1500};
  villian.animate([villianStart, villianEnd], options);
}

//Run animation code here
lightning.animate([lightningStart, lightningEnd], options).onfinish = hitTheVillian; 