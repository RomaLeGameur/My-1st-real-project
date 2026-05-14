const sec = document.querySelector('.seconde')
const min = document.querySelector('.minute')
const heure = document.querySelector('.heure')
let btn_a1h = document.querySelector('.add_h')
let btn_b1h = document.querySelector('.remove_h')
let h = 0
let btn_a1min = document.querySelector('.add_min')
let btn_b1min = document.querySelector('.remove_min')
let m = 0
let btn_a1s = document.querySelector('.add_sec')
let btn_b1s = document.querySelector('.remove_sec')
let s = 0
let btn_reset = document.querySelector('.reset_btn')


btn_a1h.onclick = function(){
    h += 1
}
btn_b1h.onclick = function(){
    h -= 1
}
btn_a1min.onclick = function(){
    m += 1
}
btn_b1min.onclick = function(){
    m -= 1
}
btn_a1s.onclick = function(){
    s += 1
}
btn_b1s.onclick = function(){
    s -= 1
}
btn_reset.onclick = function(){
    h = 0
    m = 0
    s = 0
}
setInterval(function(){
    let time = new Date();
    let secondes = ((time.getSeconds() * 6) + (time.getMilliseconds() * 0.006) + (s * 6));
    let minutes = ((time.getMinutes() * 6) + (secondes/60) + (m * 6));
    let heures = ((time.getHours() * 30) + (minutes/12) + (h * 30));

    sec.style.transform = `rotateZ(${secondes}deg)`
    min.style.transform = `rotateZ(${minutes}deg)`
    heure.style.transform = `rotateZ(${heures}deg)`

})

