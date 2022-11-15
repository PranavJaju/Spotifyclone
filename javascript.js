console.log("Hello world");
let masterplay = document.getElementById('masterplay');
let audioelement = new Audio('songs/1.mp3');
let myProgressBar = document.getElementById('myprogessbar');
let gif = document.getElementById('gif');
let s=document.getElementById('ok');
let masterSongName=document.getElementById('masterSongName');
let songlist = Array.from(document.getElementsByClassName('songitem'));

let song = [
    {songname:"Kesariya",filepath: "song/1.mp3",coverpath:"Covers/kesariya.jpg"},
    {songname:"Pehli Mohabbat",filepath: "song/2.mp3",coverpath:"Covers/Pehli Mohabbat.jpg"},
    {songname:"THEY MAD",filepath: "song/3.mp3",coverpath:"Covers/3.jpg"},
    {songname:"Rich the Kid",filepath: "song/4.mp3",coverpath:"Covers/4.jpg"},
    {songname:"Back-It Up",filepath: "song/5.mp3",coverpath:"Covers/7.jpg"},
    {songname:"Manike",filepath: "song/6.mp3",coverpath:"Covers/manike.jpg"},
    {songname:"True Love",filepath: "song/7.mp3",coverpath:"Covers/10.jpg"},
    {songname:"Space-Dance",filepath: "song/8.mp3",coverpath:"Covers/6.jpg"},
] 
songlist.forEach((element,i) => {
    console.log(element,i);
    element.getElementsByTagName('img')[0].src= song[i].coverpath;
});

// const makeAllPlays=()=>{
//     Array.from(document.getElementsByClassName('songlistplay')).forEach((element)=>{
//         element.classList.remove('fa-pause-circle');
//         element.classList.add('fa-play-circle');
//     })
    
// }
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioelement.src = `songs/${songIndex}.mp3`;
        masterSongName.innerText = song[songIndex-1].songname;
        audioelement.currentTime = 0;
        audioelement.play();
        console.log(songIndex);
        gif.style.opacity = 1;
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
    })
})

document.getElementById('back').addEventListener('click',()=>{
    if (songIndex>0){
        songIndex--;
    }
    audioelement.src=`songs/${songIndex}.mp3`;
    masterSongName.innerText=song[songIndex-1].songname;
    audioelement.currentTime = 0;
    audioelement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
    gif.style.opacity = 1;

})
masterplay.addEventListener('click',()=>{
    if(audioelement.paused || audioelement.currentTime<=0)
    {
        audioelement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity=1;

    }
    else{
        audioelement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-circle-play');
        gif.style.opacity=0;
    }
})
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=7)
    {
        songIndex=0;
    }
    else{
        songIndex+=1;
    }
    audioelement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = song[songIndex].songname;
    audioelement.currentTime = 0;
    audioelement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
    gif.style.opacity = 1;
})

audioelement.addEventListener('timeupdate',()=>{
    
     progress=parseInt((audioelement.currentTime/audioelement.duration)*100);
     
     myProgressBar.value=progress;
     
})
myProgressBar.addEventListener('change',()=>{
    audioelement.currentTime=(myProgressBar.value*audioelement.duration/100);
})
