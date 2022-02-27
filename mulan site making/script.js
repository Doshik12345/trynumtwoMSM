const play = document.querySelector('.play')
const close = document.querySelector('.close')
play.addEventListener('onclick', Video());
close.addEventListener('onclick', Video())
function Video(){
    const trailer = document.querySelector('.trailer')
    const video = document.querySelector('video')
    video.currentTime = 0;
    video.pause();
    trailer.classList.toggle('active')
}
