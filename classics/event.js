console.log("test");

const images = ['bg/a.jpg', 'bg/b.jpg', 'bg/c.jpg', 'bg/d.jpg', 'bg/e.jpg'];
const num = images.length;

function setPicture(){
    const number = Math.floor(Math.random()*num);
    return number;
}
function setBg(){
    document.body.style.background = `url(${images[setPicture()]})`;
}


const musics = ['music/Bach-Cello-Suite-No.-1-in-G-Major-BWV1007-Mov.-1-3_6.mp3', 'music/Chopin_Nocturne-op.9-No.2.mp3', 'music/Chopin-Etude-Op.10-No.5.mp3', 'music/Chopin-Fantaisie-Impromptu-_Op.-66_.mp3', 'music/Mozart-Lacrimosa.mp3'];
const numum = musics.length;
function setBach(){
    const number = Math.floor(Math.random()*numum);
    return number;
}
var audio = new Audio(musics[setBach()]);
function playAudio(audio) {
    audio.play();
  }
  
  function pauseAudio(audio) {
    audio.pause();
  } 
window.onload = function runBg(){
    setInterval(setBg,5000);
    // var audio = new Audio(musics[setBach()]);
    // audio.play();
    // const x = audio.duration;
    // setInterval(audio.pause(),x);
    playAudio(audio);
    // let x= audio.ended;
    // if (x == true){
    //     var audio = new Audio(musics[setBach()]);
    //     playAudio(audio);

    // }
audio.addEventListener("ended", function () {
    audio.pause();
    var audio = new Audio(musics[setBach()]);
    audio.play();
        // 대기 모양으로 아이콘 변경
    }, false);
    
   
    
//     var audio = new Audio('music/Bach-Cello-Suite-No.-1-in-G-Major-BWV1007-Mov.-1-3_6.mp3');
// audio.play();
showTime();
};




function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    
    setTimeout(showTime, 1000);
    
}
let x=1;
function myFunction() {
    if(x==1 ){
    audio.pause();
    x+=1;}

    else if(x==2){
    audio.play();
    x -=1;
    }
}
alert("Click watch!");

 



 
    // click.addEventListener("click", function() {
    //     alert("addEventListener1")
    // }



// document.getElementById('Bach-Cello-Suite-No.-1-in-G-Major-BWV1007-Mov.-1-3_6.mp3'),play();