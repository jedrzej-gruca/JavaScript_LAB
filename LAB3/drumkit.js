document.addEventListener('keypress', onSoundKeyPress);
document.querySelector('#play1Button').addEventListener('click', onPlayChannel1ButtonClick);
document.querySelector('#play2Button').addEventListener('click', onPlayChannel2ButtonClick);
document.querySelector('#play3Button').addEventListener('click', onPlayChannel3ButtonClick);
document.querySelector('#play4Button').addEventListener('click', onPlayChannel4ButtonClick);
document.querySelector('#playAllButton').addEventListener('click',onPlayAllButtonClick);
// document.querySelector('#recButton').addEventListener('click', onRecButtonClick);
document.querySelector('#recOnChannel1').addEventListener('click',onRecOnChannel1ButtonClick);
document.querySelector('#recOnChannel2').addEventListener('click',onRecOnChannel2ButtonClick);
document.querySelector('#recOnChannel3').addEventListener('click',onRecOnChannel3ButtonClick);
document.querySelector('#recOnChannel4').addEventListener('click',onRecOnChannel4ButtonClick);
// document.querySelector('#channel1').addEventListener('click',switchChannelTo1);
// document.querySelector('#channel2').addEventListener('click',switchChannelTo2);
// document.querySelector('#channel3').addEventListener('click',switchChannelTo3);
// document.querySelector('#channel4').addEventListener('click',switchChannelTo4);


//tabs with recorded sounds
const recordedSound1 = [];
const recordedSound2 = [];
const recordedSound3 = [];
const recordedSound4 = [];
let recStartTime;

let selectedChannel = 1;

function onRecOnChannel1ButtonClick() {
    selectedChannel = 1;
    recordedSound1.length = 0;
    recStartTime = Date.now();
}

function onRecOnChannel2ButtonClick() {
    selectedChannel = 2;
    recordedSound2.length = 0;
    recStartTime = Date.now();
}

function onRecOnChannel3ButtonClick() {
    selectedChannel = 3;
    recordedSound3.length = 0;
    recStartTime = Date.now();
}

function onRecOnChannel4ButtonClick() {
    selectedChannel = 4;
    recordedSound4.length = 0;
    recStartTime = Date.now();
}

//key table
const KeyToSound = {
    'a' : document.querySelector('#boom'),
    's' : document.querySelector('#clap'),
    'd' : document.querySelector('#hihat'),
    'f' : document.querySelector('#kick'),
    'g' : document.querySelector('#openhat'),
    'z' : document.querySelector('#ride'),
    'x' : document.querySelector('#snare'),
    'c' : document.querySelector('#tink'),
    'v' : document.querySelector('#tom')
}

function onSoundKeyPress(event) {
    let sound = KeyToSound[event.key];
    if (sound) {
        const soundTime = Date.now() - recStartTime;
        const soundObj = {
            id: sound,
            time: soundTime
        };
        switch(selectedChannel) {
            case 1:
                recordedSound1.push(soundObj);
                playSound(sound);
                console.log('pushed to 1');
                break;
            case 2:
                recordedSound2.push(soundObj);
                playSound(sound);
                console.log('pushed to 2');
                break;
            case 3:
                recordedSound3.push(soundObj);
                playSound(sound);
                console.log('pushed to 3');
                break;
            case 4:
                recordedSound4.push(soundObj);
                playSound(sound);
                console.log('pushed to 4');
                break;
        }
        console.log(selectedChannel);
    }
}

function playSound(sound) {
    if (!sound) {
        return;
    }
    const pressedKey = sound;
    pressedKey.currentTime = 0;
    pressedKey.play();
}

// function onRecButtonClick() {
//     recStartTime = Date.now();
// }

// function onPlayButtonClick() {
//     let recordedSounds = [];
//     recordedSounds.length = 0;
//     switch(selectedChannel){
//         case 1:
//             recordedSounds = recordedSound1;
//             break;
//         case 2:
//             recordedSounds = recordedSound2;
//             break;
//         case 3:
//             recordedSounds = recordedSound3;
//             break;
//         case 4:
//             recordedSounds = recordedSound4;
//             break;
//     }
//     for (let i = 0; i < recordedSounds.length; i++) {
//         const soundObj = recordedSounds[i];
//         setTimeout(
//             () => {
//                 playSound(soundObj.id);
//             },
//             soundObj.time
//         );
//     }
// }

function onPlayChannel1ButtonClick() {
    for (let i = 0; i < recordedSound1.length; i++) {
        const soundObj = recordedSound1[i];
        setTimeout(
            () => {
                playSound(soundObj.id);
            },
            soundObj.time
        );
    }
}

function onPlayChannel2ButtonClick() {
    for (let i = 0; i < recordedSound2.length; i++) {
        const soundObj = recordedSound2[i];
        setTimeout(
            () => {
                playSound(soundObj.id);
            },
            soundObj.time
        );
    }
}

function onPlayChannel3ButtonClick() {
    for (let i = 0; i < recordedSound3.length; i++) {
        const soundObj = recordedSound3[i];
        setTimeout(
            () => {
                playSound(soundObj.id);
            },
            soundObj.time
        );
    }
}

function onPlayChannel4ButtonClick() {
    for (let i = 0; i < recordedSound4.length; i++) {
        const soundObj = recordedSound4[i];
        setTimeout(
            () => {
                playSound(soundObj.id);
            },
            soundObj.time
        );
    }
}

function onPlayAllButtonClick(){
    for (let i = 0; i < recordedSound1.length; i++) {
        const soundObj = recordedSound1[i];
        setTimeout(
            () => {
                playSound(soundObj.id);
            },
            soundObj.time
        )
    }
    for (let i = 0; i < recordedSound2.length; i++) {
        const soundObj = recordedSound2[i];
        setTimeout(
            () => {
                playSound(soundObj.id);
            },
            soundObj.time
        )

    }
    for (let i = 0; i < recordedSound3.length; i++) {
        const soundObj = recordedSound3[i];
        setTimeout(
            () => {
                playSound(soundObj.id);
            },
            soundObj.time
        )

    }
    for (let i = 0; i < recordedSound4.length; i++) {
        const soundObj = recordedSound4[i];
        setTimeout(
            () => {
                playSound(soundObj.id);
            },
            soundObj.time
        )
    }
}