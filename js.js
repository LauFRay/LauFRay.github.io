const fplayer = document.getElementById('fbfplayer');
const fcontrol = document.getElementById('fbfcontrol');

fplayer.addEventListener('resize', resiza);
window.onresize = resiza;

// control.style.marginTop = 0-player.offsetHeight;
// control.style.height = 0-player.offsetHeight;   
// console.log(0-player.offsetHeight);
function resiza(){
    var h = 0-fplayer.offsetHeight
    // console.log(h)
    fcontrol.style.height = fplayer.offsetHeight + 'px';
    fcontrol.style.marginTop = '-' + fplayer.offsetHeight + 'px';
}