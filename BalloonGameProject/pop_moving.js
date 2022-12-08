const successURL = "https://giphy.com/gifs/workingtitlefilms-mr-bean-rowan-atkinson-beans-holiday-kfRlTZDvhLCPvOEey8";
const failURL    = "https://giphy.com/gifs/fail-sad-pop-jaAXjJcaTngemp4vK8";
const duration   = 10000;

const balloons = [document.querySelector("#greenBalloon"),
               document.querySelector("#redBalloon"),
               document.querySelector("#yellowBalloon")]

balloons.forEach((balloon) => {
    balloon.animate([{top: "80vh"}, {top: "5vh"}], {duration: duration, fill: "forwards"});
});