"use strict";

const expandedVid = document.getElementById('expandedVid');
const playButton = document.getElementById('playButton');


//Function that is called when page is loaded

function showDefault() {
    //Puts first video in main frame
    var firstVideo = document.getElementById('video1');
    expandedVid.src = firstVideo.src;
    
    //Stops autoplay on load 
    expandedVid.pause();  
}
document.onload = showDefault(); 


// Function that is called when main video is clicked

 function playBtn() {
    
    //Hides play button when playing and makes play button visible on pause
    if (!expandedVid.paused) {
        playButton.style.visibility = 'hidden';
    }
    if (expandedVid.paused){
        playButton.style.visibility = 'visible';
    } 
}
expandedVid.addEventListener('click', playBtn);


// Function that is called when user clicks play button 

function playPause() {

   //Plays video when user clicks play button
    if (expandedVid.paused) {
    expandedVid.play();
}
}
playButton.addEventListener('click', playPause);



//Function that is called when thumbnails are clicked

  function playVid(videos) {
    //Saves the source for the first video and replaces with each thumbnail. 
    var savedSrc = expandedVid.src
    expandedVid.src = videos.src
    videos.src = savedSrc

    // Hides playbutton on click when thumbnail starts playing in main frame
    playButton.style.visibility = 'hidden';
  }
  document.querySelectorAll('.videos').forEach(item => {
    item.addEventListener('click', playVid => { 
    })
  })
