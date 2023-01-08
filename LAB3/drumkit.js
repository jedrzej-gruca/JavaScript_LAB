// notatnik 
// document.addEventListener('keypress', onKeyPress)

const { timeStamp } = require("console")

//=====================  ZAJECIA  ======================
document.addEventListener('keypress', onSoundKeyPress)

const KeyToSound = {
    'a' : document.querySelector('#s1'),
    's' : document.querySelector('#s2'),
    'd' : document.querySelector('#s3'),
    'f' : document.querySelector('#s4'),
    'g' : document.querySelector('#s5'),
    'z' : document.querySelector('#s6'),
    'x' : document.querySelector('#s7'),
    'c' : document.querySelector('#s8'),
    'v' : document.querySelector('#s9')
}

function onSoundKeyPress(event) {
    const sound = KeyToSound[event.key]
    playSound(sound)
}

function playSound(sound) {
    sound.currentTime = 0
    sound.play()
}

// ==========  REC ===========

document.addEventListener('keydown', onRecKeyPress)

const KeyToRec = {
    '1' : document.querySelector('#r1'),
    '2' : document.querySelector('#r2'),
    '3' : document.querySelector('#r3'),
    '4' : document.querySelector('#r4')
}

function onRecKeyPress(event) {
    const rec = KeyToRec[event.key]
    recordSound(rec)
}

let recordedSound1 = []
let recordedSound2 = []
let recordedSound3 = []
let recordedSound4 = []

let recordedTimeStamps1 = []
let recordedTimeStamps2 = []
let recordedTimeStamps3 = []
let recordedTimeStamps4 = []

function recordSound(rec) {
    switch (rec) {
        case '1':
            while(onRecKeyPress == true) {
                recordedSound1.push(key)
                recordedTimeStamps1.push(onSoundKeyPress.timeStamp)
            }
        case '2':
            while(onRecKeyPress == true) {
                recordedSound2.push(key)
                recordedTimeStamps2.push(onSoundKeyPress.timeStamp)
            }
        case '3':
            while(onRecKeyPress == true) {
                recordedSound3.push(key)
                recordedTimeStamps3.push(onSoundKeyPress.timeStamp)
            }
        case '4':
            while(onRecKeyPress == true) {
                recordedSound4.push(key)
                recordedTimeStamps4.push(onSoundKeyPress.timeStamp)
            }
    }
    
}

function playRecordedSound() {
    array.forEach(element => {
        
    });
}




////////////////////////////////////////////////////////////////////

// const KeyToSound = {
//     'a': 's1',
//     's': 's2',
// }
// function onKeyPress(ev) {
//     // const key = event.key
//     // logika mapowania key -> sound
//     const sound = KeyToSound[ev.key]
//     // switch (ev.key) {
//     //     case 'a':
//     //         sound = SOUND.clap
//     //         // clap
//     //         break;
//     //     case 's':
//     //         sound = SOUND.hihat
//     //         // hihat
//     //         break;
//     // }
//     playSound(sound)
// }

// function playSound(sound) {
//     if (!sound) {
//         return
//     }
//     const audioTag = document.querySelector(`#${clap}`)
//     audioTag.currentTime = 0
//     audioTag.play()
// }
// Date.now()

//Zapisywanie w tablicy oraz timestamp
//forEach + setTimeOut