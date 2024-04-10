import * as elements from "./elements.js";
import * as actions from './actions.js'
import state from "./state.js";
import { updateDisplay } from "./timer.js";

export function registerControls(){
    elements.controls.addEventListener('click', event => {
        const action = event.target.dataset.action
        if(typeof actions[action] != 'function'){
            return
        }

        actions[action]()
    })
}

export function setMinutes(){
    elements.minutes.addEventListener('focus', () => {
        elements.minutes.textContent = ''
    })
    //verificando se o que está sendo digitado é letra ou não
    elements.minutes.onkeypress = (event) => /\d/.test(event.key)
    elements.minutes.addEventListener('blur', (event) =>{
        let time = event.currentTarget.textContent

        time = time > 60 ? 60 : time

        state.minutes = time
        state.seconds = 0

        updateDisplay()
        elements.minutes.removeAttribute('contenteditable')
    })
}