//navigation bar button functions
function showCodingNav() {
  document.getElementById('dropDownContent').innerHTML = '<div class="dropDownContent"><button onclick="showPens(document.getElementById(\'show-area\'))">Codepens</button><button onclick="showLayouts(document.getElementById(\'show-area\'))">Layouts</button></div>'
}
function showGraphicsNav() {
  document.getElementById('dropDownContent').innerHTML = '<div class="dropDownContent"><button onclick="showGraphics(document.getElementById(\'show-area\'))">Graphics</button></div>'
}
function showProgramsNav() {
  document.getElementById('dropDownContent').innerHTML = '<div class="dropDownContent"><button onclick="showSoftware(document.getElementById(\'show-area\'))">Software</button><button onclick="showApps(document.getElementById(\'show-area\'))">Apps</button></div>'
}
//drop down menue content button functions
function showPens() {
  document.getElementById('show-area').innerHTML = '<div class="show-area"><div class="item__container"><div class="item_img_container"><a href="https://codepen.io/DemonNoSh0kan/details/zYJeWLz"data-hover="Dropdown Menu Button "class="item"><img src="showcase-items/dropdown_menu.jpg" alt="Dropdown menu button"class="img"></a></div><div class="item_img_container"><a href="https://codepen.io/DemonNoSh0kan/details/vYzGKZo"data-hover="Space Odyssey Background"class="item"><img src="showcase-items/space_odyssey_background.jpg" alt="Dropdown menu button"class="img"></a></div><div class="item_img_container"><a href="https://codepen.io/DemonNoSh0kan/pen/XWydVRY"data-hover="Scroll onclick"class="item"><img src="showcase-items/scroll_onclick_button.jpg" alt="scroll-onclick"class="img"></a></div></div></div>';
}
function showLayouts() {
  document.getElementById('show-area').innerHTML = '<div class="show-area"><div class="item__container"><div class="item_img_container"><a href="https://codepen.io/DemonNoSh0kan/details/XWPwRwo"data-hover="Portfolio Layout"class="item"><img src="showcase-items/webpage_layout1.0.jpg" alt="webpage_layout1.0"class="img"></a></div></div></span></div>'
}
function showGraphics() {
  document.getElementById('show-area').innerHTML = '<div class="show-area"><div class="item__container"><div class="item_img_container"></div></div></div>';
}
function showSoftware() {
  document.getElementById('show-area').innerHTML = '<div class="show-area"><div class="item__container"><div class="item_img_container"></div></div></div>'
}
function showApps() {
  document.getElementById('show-area').innerHTML = '<div class="show-area"><div class="item__container"><div class="item_img_container"></div></div></div>'
}