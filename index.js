// DOM
// document, object, model  
// дом переводит html в js 
// search, classess, text, attributs, style

let box = document.querySelector('.box')
let body = document.querySelector("body")
let btn = document.querySelector('btn')

box.onclick = () => {
    if (box.classList.contains('imposter')) {
        box.classList.remove('imposter')
    } else {
        box.classList.add('imposter')
    }
    if (box.classList.contains('imposter')) {
        body.classList.add('bg-color')

    } else {
        body.classList.remove("bg-color")
    }
    if (btn.classList.contains('box imposter')) {
        btn.classList.add('color2')
    }else{
        btn.classList.remove('imposter')
    }
}