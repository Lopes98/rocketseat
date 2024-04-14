import state from "./state.js";
import * as bgSounds from './buttonSounds.js'
import * as sounds from './sounds.js'
import * as timer from './timer.js'

export function isRunning(){
    state.isRunning = document.documentElement.classList.toggle('running')

    timer.countdown()
    sounds.buttonPress.play()
}

export function reset(){
    state.isRunning = false
    document.documentElement.classList.remove('running')

    timer.updateDisplay()
    sounds.buttonPress.play()
}

export function addFiveMinutes(){
    if(state.minutes < 60){
        state.minutes = state.minutes+5
        timer.updateDisplay()   
        sounds.buttonPress.play()
        return
    }
}

export function removeFiveMinutes(){
    if(state.minutes > 0){
        state.minutes = state.minutes-5
        timer.updateDisplay()
        sounds.buttonPress.play()
        return
    }
}

export function setSounds(){
    bgSounds.buttonForest.addEventListener('click', event =>{
        document.documentElement.classList.remove('rain', 'coffee', 'campfire')
        state.isMute = document.documentElement.classList.toggle('forest')
        
        if(state.isMute){
            pauseAllSounds()
    
            sounds.bgForest.play()
            state.isMute = false
            return
        }
        sounds.bgForest.pause()
        state.isMute = true
    })
    
    bgSounds.buttonRain.addEventListener('click', event => {
        document.documentElement.classList.remove('forest', 'coffee', 'campfire')
        state.isMute = document.documentElement.classList.toggle('rain')
    
        if(state.isMute){
            pauseAllSounds()
            
            sounds.bgRain.play()
            state.isMute = false
            return
        }
        sounds.bgRain.pause()
        state.isMute = true
    })
    
    bgSounds.buttonCoffee.addEventListener('click', event => {
        document.documentElement.classList.remove('rain', 'forest', 'campfire')
        state.isMute = document.documentElement.classList.toggle('coffee')
    
        if(state.isMute){
            pauseAllSounds()
    
            sounds.bgCoffee.play()
            state.isMute = false
            return
        }
    
        sounds.bgCoffee.pause()
        state.isMute = true
    })
    
    bgSounds.buttonCampfire.addEventListener('click', event => {
        document.documentElement.classList.remove('rain', 'coffee', 'forest')
        state.isMute = document.documentElement.classList.toggle('campfire')
    
        if(state.isMute){
            pauseAllSounds()
    
            sounds.bgCampfire.play()
            state.isMute = false
            return
        }
    
        sounds.bgCampfire.pause()
        state.isMute = true
    })
    
    function pauseAllSounds(){
        sounds.bgCampfire.pause()
        sounds.bgCoffee.pause()
        sounds.bgRain.pause()
        sounds.bgForest.pause()
    }
}