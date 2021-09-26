import "./bootstrap-grid.min.css"
import "./app.css"


let btn = document.querySelector('.list p:nth-child(2)')
let main = document.querySelector('body').style
let proj1 = document.querySelector('#cont1')
let proj2 = document.querySelector('#cont2')
let proj3 = document.querySelector('#cont3')
let proj4 = document.querySelector('#cont4')
let proj5 = document.querySelector('#cont5')

let wait = 0

function changeClr(clr) {
    return function () {
        /* let clrAfter = window.getComputedStyle(document.querySelector('body'), ':before').getPropertyValue('background')
        
        let clrNormal = window.getComputedStyle(document.querySelector('body')).getPropertyValue('background')
    
        if (clrAfter === clr || clrNormal === clr) {  ////is the correct color applied?
            console.log('here');
            return 
        } */
        if (wait === 1) {
            return
        }
        wait = 1
        let opa = window.getComputedStyle(
            document.querySelector('body'), ':before'
        ).getPropertyValue('opacity')

        if (opa == 0) {
            main.setProperty('--backgroundA', clr)
            main.setProperty('--background', '1')
        } else {
            main.setProperty('--background', '0')
            document.body.style.setProperty('background', clr)
        }
        setTimeout(() => {   /////fix for quick mouse movement

            wait = 0
        }, 500);


    }
}



//linear-gradient(to left, #f05053, #e1eec3)

const red = changeClr('linear-gradient(90deg, rgba(250,231,208,1) 3%, rgba(255,228,196,1) 44%, rgba(208,154,89,1) 85%)')
const green = changeClr('linear-gradient(to left, #FFFFFF, #6DD5FA, #2980B9)')
const proj3bg = changeClr('linear-gradient(to left, #dc2430, #7b4397)')
const proj4bg = changeClr('linear-gradient(to left, #19547b, #ffd89b)')
const proj5bg = changeClr('linear-gradient(to top, #c9d6ff, #e2e2e2)')

proj1.addEventListener('mouseenter', green)
proj2.addEventListener('mouseenter', red)
proj3.addEventListener('mouseenter', proj3bg)
proj4.addEventListener('mouseenter', proj4bg)
proj5.addEventListener('mouseenter', proj5bg)








