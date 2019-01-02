const secondsHand = document.querySelector('.seconds-hand')
const minutesHand = document.querySelector('.minutes-hand')
const hoursHand = document.querySelector('.hours-hand')
function setDate(){
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegree = ((seconds/60)*360)+90;
    secondsHand.style.transform = `rotate(${secondsDegree}deg)`;


    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60)*360)+90;
    minutesHand.style.transform = `rotate(${minsDegrees}deg)`;


    const hours = now.getHours();
    const hoursDegrees = ((hours / 12)*360)+90;
    hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000)