//navigation bar button functions
function showCodingNav() {
  document.getElementById('dropDownContent').innerHTML = '<div class="dropDownContent"><span class="dropContentSpan"><button class="button" onclick="showPens(document.getElementById(\'imgContainer\'))">Codepens</button></span></div>'
}
function showGraphicsNav() {
  document.getElementById('dropDownContent').innerHTML = '<div class="dropDownContent"><span class="dropContentSpan"><button class="button" onclick="showGraphics(document.getElementById(\'imgContainer\'))">LANDSCAPES</button>  <button class="button" onclick="showGraphics(document.getElementById(\'imgContainer\'))">PORTRAITS</button>  <button class="button" onclick="showGraphics(document.getElementById(\'imgContainer\'))">CREATURES</button></span></div>'
}
function showProgramsNav() {
  document.getElementById('dropDownContent').innerHTML = '<div class="dropDownContent"><span class="dropContentSpan"><button class="button" onclick="showSoftware(document.getElementById(\'imgContainer\'))">Software</button><button class="button" onclick="showApps(document.getElementById(\'show-area\'))">Apps</button></span></div>'
}
//drop down menue content button functions
//CODEPENS BUTTON 
function showPens() {
  document.getElementById('imgContainer').innerHTML = '<div class="imgContainer"><span class="penButtonSpan"><button class="Button"><a href="https://codepen.io/DemonNoSh0kan/pen/zYJeWLz">Hover Dropdown Menu</a></button><button class="Button"><a href="https://codepen.io/DemonNoSh0kan/pen/vYQmRwG">Popup Onclick</a></button><button class="Button"><a href="https://codepen.io/DemonNoSh0kan/pen/VwVmbOe">Replace HTML Onclick</a></button></span><span class="penButtonSpan"><button class="Button"><a href="">Space Odyssey</a></button></span></div>'
}
//LANDSCAPES BUTTON
function LANDSCAPES() {
  document.getElementById('imgContainer').innerHTML = '<div class="imgContainer"></div>';
}
//PORTRAITS BUTTON
function PORTRAITS() {
  document.getElementById('imgContainer').innerHTML ='<div class="imgContainer"></div>'
}
//CREATURES BUTTON
function CREATURES() {
  document.getElementById('imgContainer').innerHTML ='<div class="imgContainer"></div>'
}
function showSoftware() {
  document.getElementById('imgContainer').innerHTML = '<div class="imgContainer"><div class="item__container"><div class="item_img_container"></div></div></div>'
}
function showApps() {
  document.getElementById('imgContainer').innerHTML = '<div class="imgContainer"><div class="item__container"><div class="item_img_container"></div></div></div>'
}

