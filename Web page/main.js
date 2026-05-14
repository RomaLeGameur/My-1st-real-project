let dark_light = "#FFFFFF"
let reset_clr = document.querySelector('.reset')
let dark_btn = document.querySelector('.dark')
let rng_clr_btn = document.querySelector('.random')
let btn = document.querySelectorAll('button')
let nb_to_convert = document.querySelector('nb_to_convert')
let base_convert = document.querySelector('base_convert')
let convert_output = Array('convert_output')


reset_clr.onclick = function clr_rst (){
    document.body.style.backgroundColor = dark_light
}
dark_btn.onclick = function dark_mode (){
    if (dark_light = "#FFFFFF")
        dark_light = "#000000"
        (clr_rst)
    else
        if (dark_light = "#000000")
            dark_light = "#FFFFFF"
            (clr_rst)
    else
        dark_light = "#FFFFFF"
        (clr_rst)
}
rng_clr_btn.onclick = function rng_clr (){
    document.body.style.backgroundColor = '#' + Math.round(Math.random()*16777215).toString(16);
}

while(

)

