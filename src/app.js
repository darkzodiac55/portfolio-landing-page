import "./bootstrap-grid.min.css"
import "./app.css"


let btn = document.querySelector('.list p:nth-child(2)')
let main = document.querySelector('body').style
let proj1 = document.querySelector('.cont:nth-of-type(1)')
let proj2 = document.querySelector('.cont:nth-of-type(2)')
let proj3 = document.querySelector('.cont:nth-of-type(3)')
let proj4 = document.querySelector('.cont:nth-of-type(4)')



proj1.addEventListener('mouseenter', () => {
    let opa = window.getComputedStyle(
        document.querySelector('body'), ':before'
    ).getPropertyValue('opacity')

    if (opa == 0) {
        main.setProperty('--background', '1')
    } else {
        main.setProperty('--background', '0')
        document.body.style.setProperty('background', 'linear-gradient(to right, #FFFFFF, #6DD5FA, #2980B9)')
    }
})


btn.addEventListener('click', () => {

    let opa = window.getComputedStyle(
        document.querySelector('body'), ':before'
    ).getPropertyValue('opacity')

    if (opa == 0) {
        main.setProperty('--background', '1')
    } else {
        main.setProperty('--background', '0')
        document.body.style.setProperty('background', 'linear-gradient(to right, #FFFFFF, #6DD5FA, #2980B9)')
    }

})


/* background: linear-gradient(to right, #FFFFFF, #6DD5FA, #2980B9); */
