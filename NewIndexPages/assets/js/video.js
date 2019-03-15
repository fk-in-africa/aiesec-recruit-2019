if( window.matchMedia('(max-width:992px)').matches ){
	var video = document.getElementById("BackMovie");
	video.pause();
	video.currentTime = 0;

	video.style.display="none";
	document.getElementById('TopBg').className = "afterVideo";
}