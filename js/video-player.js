let playP = document.querySelector('.header__video-play');
let pauseP = document.querySelector('.header__video-pause');
playP.style.display = 'block';
let video;
let display;

video = document.querySelector('#video-player');

function play(){
	video.play();
	playP.style.display = 'none';
}

video.addEventListener('mouseover', () => {
	if (playP.style.display === 'none')
	document.querySelector('.header__video-pause').style.display = 'block';
});

video.addEventListener('mouseleave', () => {
	document.querySelector('.header__video-pause').style.display = 'none';
});

function pause(){
	video.pause();
	pauseP.style.display = 'none';
	playP.style.display = 'block';
}

video.addEventListener('click', () => {
	if (playP.style.display === 'block'){
		play();
	} else if (playP.style.display === 'none') {
		pause();
	}
});