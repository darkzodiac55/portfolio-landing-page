import "./bootstrap-grid.min.css"
import "./app.css"


let btn = document.querySelector('.list p:nth-child(2)')
let main = document.querySelector('body').style
let proj1 = document.querySelector('.cont:nth-of-type(1)')
let proj2 = document.querySelector('.cont:nth-of-type(2)')
let proj3 = document.querySelector('#cont3')
let proj4 = document.querySelector('#cont4')


function changeClr(clr) {
    return function () {
        /* let clrAfter = window.getComputedStyle(document.querySelector('body'), ':before').getPropertyValue('background')
        
        let clrNormal = window.getComputedStyle(document.querySelector('body')).getPropertyValue('background')
    
        if (clrAfter === clr || clrNormal === clr) {  ////is the correct color applied?
            console.log('here');
            return 
        } */
    
    
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
    }
}

const red = changeClr('red')
const green = changeClr('green')
const proj3bg = changeClr('linear-gradient(to right, #f7797d, #FBD786, #C6FFDD)')
const proj4bg = changeClr('linear-gradient(to right, #FFFFFF, #6DD5FA, #2980B9)')

proj1.addEventListener('mouseenter', green)
proj2.addEventListener('mouseenter', red)
proj3.addEventListener('mouseenter', proj3bg)
proj4.addEventListener('mouseenter', proj4bg)

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
// 'linear-gradient(to right, #FFFFFF, #6DD5FA, #2980B9)'


