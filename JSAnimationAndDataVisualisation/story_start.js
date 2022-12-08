//Setup website here
var hero = document.querySelector("#hero");
var villian = document.querySelector("#villian");
var lightning = document.querySelector("#lightning");

//Setup animation code here

let lighteningStart = {"left":"290px"};
let ligteningEnd = {"right":"900px"};

let options = {"duration":1000};

let villianHit = () => {
    let villianStart = {
        transform: "rotate(0deg)",
        opacity:100


    };

    let villianEnd ={
        transform: "rotate(360deg)",
        opacity: 0

    };

    let options ={ "duration": 1000};

    villian.animate([villianStart, villianEnd], options)

}
lightning.animate([lighteningStart, ligteningEnd], options).onfinish = villianHit


//Run animation code here
