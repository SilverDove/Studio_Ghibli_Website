// JavaScript Document

var img;

var image_tab = ["random.png", "random2.png", "random3.png", "random4.png", "random6.png"];

function randomImage(){
	return image_tab[Math.floor(Math.random() * 5)];
}

function getRandomPosition(element) {
	var x = document.body.offsetHeight-element.clientHeight;
	var y = document.body.offsetWidth-element.clientWidth;
	var randomX = Math.floor(Math.random()*x);
	var randomY = Math.floor(Math.random()*y);
	return [randomX,randomY];
}

function LoadImage(){
	img = document.createElement('img');
	img.setAttribute("style", "position:absolute;");
	img.setAttribute("src", randomImage());
	document.body.appendChild(img);
	var xy = getRandomPosition(img);
	img.style.top = xy[0] + 'px';
	img.style.left = xy[1] + 'px';
	img.style.display="";
	return img;
}

function removeImage(){
	img.style.display="none";
}

function removeImageEveryThreeSeconds(){
	setInterval(removeImage, 4000);
}


setInterval(LoadImage, 4000);
setTimeout(removeImageEveryThreeSeconds, 2000);







