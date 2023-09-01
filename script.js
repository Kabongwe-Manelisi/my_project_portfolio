//navigation bar button functions
function showCodingNav() {
  document.getElementById('dropDownContent').innerHTML = '<div class="dropDownContent"><span class="dropContentSpan"><button class="button" onclick="showPens(document.getElementById(\'imgContainer\'))">Codepens</button><button class="button" onclick="showLayouts(document.getElementById(\'show-area\'))">Layouts</button></span</div>'
}
function showGraphicsNav() {
  document.getElementById('dropDownContent').innerHTML = '<div class="dropDownContent"><span class="dropContentSpan"><button class="button" onclick="showGraphics(document.getElementById(\'imgContainer\'))">Graphics</button></span></div>'
}
function showProgramsNav() {
  document.getElementById('dropDownContent').innerHTML = '<div class="dropDownContent"><span class="dropContentSpan"><button class="button" onclick="showSoftware(document.getElementById(\'imgContainer\'))">Software</button><button class="button" onclick="showApps(document.getElementById(\'show-area\'))">Apps</button></span></div>'
}
//drop down menue content button functions
function showPens() {
  document.getElementById('imgContainer').innerHTML = '<div class="imgContainer"><span class="penButtonSpan"><button class="Button"><a href="https://codepen.io/DemonNoSh0kan/pen/zYJeWLz">Hover Dropdown Menu</a></button><button class="Button"><a href="https://codepen.io/DemonNoSh0kan/pen/vYQmRwG">Popup Onclick</a></button><button class="Button"><a href="https://codepen.io/DemonNoSh0kan/pen/VwVmbOe">Replace HTML Onclick</a></button></span><span class="penButtonSpan"><button class="Button"><a href="">Space Odyssey</a></button></span></div>'
}
function showLayouts() {
  document.getElementById('imgContainer').innerHTML = '<div class="imgContainer"><span class="layoutsSpan"><button id="openFullView"><img src="img/layout001.jpg" alt="layout001" class="img"></button><div class="fullView"><button id=""exitFullView><h1>it works</h1></button></div></span></div>'
}
function showGraphics() {
  document.getElementById('imgContainer').innerHTML = '<div class="imgContainer"><div class="item__container"><div class="item_img_container"></div></div></div>';
}
function showSoftware() {
  document.getElementById('imgContainer').innerHTML = '<div class="imgContainer"><div class="item__container"><div class="item_img_container"></div></div></div>'
}
function showApps() {
  document.getElementById('imgContainer').innerHTML = '<div class="imgContainer"><div class="item__container"><div class="item_img_container"></div></div></div>'
}
//layout pop up funtions
function closeForm() {
  $('.fullView').removeClass('isVisible');
}

$(document).ready(function($) {
  
  /* Contact Form Interactions */
  $('#openFullView').on('click', function(event) {
    event.preventDefault();

    $('.fullView').addClass('isVisible');
  });
  
    //close popup when clicking x or off popup
  $('.fullView').on('click', function(event) {
    if ($(event.target).is('.fullView') || $(event.target).is('#exitFullView')) {
      event.preventDefault();
      $(this).removeClass('isVisible');
    }
  });
  
  
  
  });
