window.onload = setInterval(Loop, 1000 / 10); //10fps
window.onload = setInterval(Loop2, 1000 / 10); //10fps
window.onload = setInterval(Loop3, 1000 / 10); //10fps

let HomeAudio = new Audio();
let UpAudio = new Audio();

HomeAudio.src = 'audio/Deadlock_Main_Theme.mp3';
UpAudio.src = 'audio/music_teleporter_01.mp3';

function Loop() {
    if (document.getElementById("Home").innerHTML) {
        HomeAudio.play();
    if (HomeAudio.paused == true) {
        HomeAudio.play();
        }
    }

}
function Loop2() {
if (document.getElementById("Updates").innerHTML) {
        UpAudio.play();
    if (UpAudio.paused == true) {
        UpAudio.play();
        }
    }
}
function Loop3() {
    if (document.getElementById("Heroes").innerHTML) {
        HomeAudio.play();
    if (HomeAudio.paused == true) {
        HomeAudio.play();
        }
    }

}