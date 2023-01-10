var music=[
    "crash.mp3",
    "kick-bass.mp3",
    "snare.mp3",
    "tom-1.mp3",
    "tom-2.mp3",
    "tom-3.mp3",
    "tom-4.mp3"
];

var images=[
    "crash.png",
    "kick.png",
    "snare.png",
    "tom1.png",
    "tom2.png",
    "tom3.png",
    "tom4.png"
];

var musicObj=[];

//function to play music
function playMusic(index){
    index.play();
}



//creating audio objects for all the sounnds
for(var i=0;i<7;i++){
    musicObj[i]=new Audio('sounds/'+music[i]);
    console.log(musicObj[i]);
}

//adding  background image to buttons
var drums=document.querySelectorAll(".drum");
for(let i=0;i<drums.length;i++){
    var imageName="images/"+images[i];
    drums[i].style.backgroundImage="url("+imageName+")";
    drums[i].setAttribute("fit","center");
}


//adding event listeners to the buttons

for(let i=0;i<drums.length;i++){
    drums[i].addEventListener('click',function (){
        playMusic(musicObj[i]);
        
    });
}


//adding keydown event listener

document.addEventListener("keypress",function (event){
    console.log(event);
    switch (event.key) {
        case "w":
            playMusic(musicObj[0]);
            break;
        case "a":
            playMusic(musicObj[1]);
            break;
        case "s":
            playMusic(musicObj[2]);
            break;
        case "d":
            playMusic(musicObj[3]);
            break;
        case "j":
            playMusic(musicObj[4]);
            break;
        case "k":
            playMusic(musicObj[5]);
            break;
        case "l":
            playMusic(musicObj[6]);
            break;
        default:
            break;
    }
})

