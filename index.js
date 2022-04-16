let jigglypuff = document.getElementById('jigglypuff');

function changeColor(){
    let r = document.getElementById('rslider').value;
    let g =document.getElementById('gslider').value;
    let b = document.getElementById('bslider').value;
    jigglypuff.style.backgroundColor= `rgb(${r}, ${g}, ${b})`;
}

document.getElementById('rslider').addEventListener("input",changeColor);
document.getElementById('gslider').addEventListener("input",changeColor);
document.getElementById('bslider').addEventListener("input",changeColor);