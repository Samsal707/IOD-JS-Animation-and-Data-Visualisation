// for more info see https://www.khanacademy.org/math/cc-seventh-grade-math/cc-7th-geometry/cc-7th-area-circ-challenge/v/radius-change-impact

const delay = 5000; //number of milliseconds to wait before updating the explaination text
const vizContainer = document.querySelector("#vizContainer");
const explainationContainer = document.querySelector("#explainationContainer");
const explainationText = document.querySelector("#explainationText");
const explainationAmount = document.querySelector("#explainationAmount");
const dataset = [{"title":"live within 50mi of a nuclear plant for a year", "measurement": 0.09, "multiplier": 2180, "color": "#80ffff"}, //cyan
               {"title":"eat a single banana", "measurement": 0.1, "multiplier": 1965, "color": "#8095ff"}, //blue
               {"title":"receive a dental x-ray", "measurement": 5, "multiplier": 39, "color": "#d480ff"}, //purple
               {"title":"be on one airline flight from NY to LA", "measurement": 40, "multiplier": 4.9, "color": "#ff80bf"}, //pink
               {"title":"sleep directly ontop of a nuclear plant for a year", "measurement": 250, "multiplier": 0.78,"color": "#ffaa80"}, //orange
               {"title":"receive a single mamogram", "measurement": 400, "multiplier": 0.49, "color": "#eaff80"}, //yellow
               {"title":"receive a single chest CT scan", "measurement": 7000, "multiplier": 0.028, "color": "#80ff80"} //green
            ];
const defaultMultiplier = dataset[4].multiplier; // 2180, keeps a reference to the 
//multiplier value of the first entry

let circles = [];


dataset.forEach((dataline, index) => {
   let newCircle = document.createElement('div');
   newCircle.style.width        = (dataline.measurement*defaultMultiplier) + "vw";
   newCircle.style.height       = (dataline.measurement*defaultMultiplier) + "vw";
   newCircle.style.background   = dataline.color;
   newCircle.style.borderRadius = "50%";
   newCircle.style.zIndex       = dataset.length - index;
   newCircle.style.top          = ((dataline.measurement*defaultMultiplier)/2*-1) + "vw";
   newCircle.style.left         = ((dataline.measurement*defaultMultiplier)/2*-1) + "vw";
   circles.push(newCircle);
   vizContainer.append(newCircle);

   let updateText = () => {
      explainationText.innerHTML = dataset[index].title;
      explainationContainer.style.backgroundColor = dataset[index].color;
      explainationAmount.innerHTML = " (" + dataset[index].measurement + " micro-sieverts)"
   }
   window.setTimeout(updateText, index*delay)
})

for(let i = 0; i < (dataset.length); i++){
   let multiplierFrom = dataset[i].multiplier;
   let multiplierTo   = dataset[i+1].multiplier;

   circles.forEach((circle, circleId) => {
      let circleMeasurement = dataset[circleId].measurement;

      let startWidth   = (circleMeasurement * multiplierFrom) + "vw";
      let targettWidth = (circleMeasurement * multiplierTo) + "vw";
      let startHeight  = (circleMeasurement * multiplierFrom) + "vw";
      let targetHeight = (circleMeasurement * multiplierTo) + "vw";
      let startTop     = ((circleMeasurement * multiplierFrom)/2*-1)+ "vw";
      let targetTop    = ((circleMeasurement * multiplierTo)/2*-1)+ "vw";
      let startLeft    = ((circleMeasurement * multiplierFrom)/2*-1)+ "vw";
      let targetLeft   = ((circleMeasurement * multiplierTo)/2*-1)+ "vw";

      let KeyFramesFrom = { "width":startWidth, "height":startHeight, "top": startTop, "left": startLeft};
      let keyFramesTo   = { "width":targettWidth, "height":targetHeight, "top": targetTop, "left": targetLeft};
      let animateOptions = { "duration": animationDuration, "fill":"forwards", "delay":((i+1)* delay)};
      circle.animate([KeyFramesFrom, keyFramesTo], animateOptions);
   })
}