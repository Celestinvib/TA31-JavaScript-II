const vieweImg =  document.getElementById('viewerImg');
const images = document.getElementsByTagName("img");

caption.innerHTML= vieweImg.alt;

function changeViewer(number) {		
    const collection = document.getElementsByClassName("example");         	    
    vieweImg.src = "img/foto"+number+".jpg";    
    vieweImg.alt = images[number -1].alt
    caption.innerHTML = vieweImg.alt;
}