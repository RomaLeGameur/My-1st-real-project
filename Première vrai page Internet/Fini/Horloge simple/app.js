const sec = document.querySelector('.seconde')
const min = document.querySelector('.minute')
const heure = document.querySelector('.heure')


setInterval(function(){
    let time = new Date();
    let millisecondes = time.getMilliseconds() * 0.006;
    let secondes = (time.getSeconds() * 6) + (millisecondes);
    let minutes = (time.getMinutes() * 6) + (secondes/60);
    let heures = (time.getHours() * 30) + (minutes/12);

    sec.style.transform = `rotateZ(${secondes}deg)`
    min.style.transform = `rotateZ(${minutes}deg)`
    heure.style.transform = `rotateZ(${heures}deg)`

})