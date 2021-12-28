

import firstLoad from './firstLoad.js';
import home from './home.js';
import menu from "./menu.js";
import contact from "./contact.js";


const content = document.getElementById("content")

content.appendChild(firstLoad())


const parentWrapper = document.getElementById("parentWrapper")
parentWrapper.appendChild(home())



const homeBtn = document.getElementById("home")
const menuBtn = document.getElementById("menu")
const contactBtn = document.getElementById("contact")


homeBtn.addEventListener("click", () => {

    parentWrapper.innerHTML = ""
    parentWrapper.appendChild(home())

})



menuBtn.addEventListener("click", () => {
    

    parentWrapper.innerHTML = ""
    parentWrapper.appendChild(menu())

    

})



contactBtn.addEventListener("click", () => {
    
    parentWrapper.innerHTML = ""
    parentWrapper.appendChild(contact())

    submit = document.getElementById("submit")
    submit.addEventListener("click", ()=> {
        alert("Deep in the human unconscious is a pervasive need for a logical universe that makes sense. But the real universe is always one step beyond logic.")
    })

})





import './style.css';

