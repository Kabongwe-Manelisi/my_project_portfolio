//navigation bar button functions
function showCodingNav() {
  document.getElementById('dropDownContent').innerHTML = '<div class="dropDownContent"><span class="dropContentSpan"><button class="button" onclick="showPens(document.getElementById(\'bodyContainer\'))">Codepens</button></span></div>'
}
function showGraphicsNav() {
  document.getElementById('dropDownContent').innerHTML = '<div class="dropDownContent"><span class="dropContentSpan">  <button class="button" onclick="landScapes(document.getElementById(\'bodyContainer\'))">Macksons Hyperzone</button>  <button class="button" onclick="portraits(document.getElementById(\'bodyContainer\'))">Big Daddy\'s Garage</button>  <button class="button" onclick="creatures(document.getElementById(\'bodyContainer\'))">Personal Designs</button>  </span></div>'
}
function showProgramsNav() {
  document.getElementById('dropDownContent').innerHTML = '<div class="dropDownContent"><span class="dropContentSpan"><button class="button" onclick="showSoftware(document.getElementById(\'imgContainer\'))">Programs</button><button class="button" onclick="showApps(document.getElementById(\'show-area\'))">Apps</button></span></div>'
}
//drop down menue content button functions
//results from the 'showacaodingNav' function
//CODEPENS BUTTON 
function showPens() {
  document.getElementById('bodyContainer').innerHTML = '<div class="imgContainer"><span class="penButtonSpan">  <button class="Button"><a href="https://codepen.io/DemonNoSh0kan/pen/zYJeWLz">Hover Dropdown Menu</a></button>   <button class="Button"><a href="https://codepen.io/DemonNoSh0kan/pen/eYbyrpj">Scrolling Div</a></button>   <button class="Button"><a href="https://codepen.io/DemonNoSh0kan/pen/vYQmRwG">Popup Onclick</a></button>   <button class="Button"><a href="https://codepen.io/DemonNoSh0kan/pen/GRPEbrr">Flipping Card</a></button>   <button class="Button"><a href="https://codepen.io/DemonNoSh0kan/pen/VwVmbOe">Replace HTML Onclick</a></button>  </span><span class="penButtonSpan"><button class="Button"><a href="">Space Odyssey</a></button>  <button class="Button"><a href="https://codepen.io/DemonNoSh0kan/pen/VwOPmvd">Gradient Background Animation</a></button>   </span></div>'
}

//Results from the 'showGraphicsNav' function
//LANDSCAPES BUTTON
//Macksons Hyperzone
function landScapes() {
  document.getElementById('bodyContainer').innerHTML = '<div class="imgContainer">  <div class="flipcardSpan"> <div class="flipCard"><div class="flipCardInner"><div class="flipCardFront"></div><div class="flipCardBack"><img class="img" src="img/graphics/macksons-hyperzone/fast-food.jpg"></div></div></div>   <div class="flipCard"><div class="flipCardInner"><div class="flipCardFront"></div><div class="flipCardBack"><img class="img" src="img/graphics/macksons-hyperzone/f&v.jpg"></div></div></div>   <div class="flipCard"><div class="flipCardInner"><div class="flipCardFront"></div><div class="flipCardBack"><img class="img" src="img/graphics/macksons-hyperzone/butchery.jpg"></div></div></div>   </div>  </div>';
}
//PORTRAITS BUTTON
//Big daddy's garage
function portraits() {
  document.getElementById('bodyContainer').innerHTML ='<div class="imgContainer">  <div class="flipcardSpan"> <div class="flipCard"><div class="flipCardInner"><div class="flipCardFront"></div><div class="flipCardBack"><img class="img" src="img/graphics/big=daddy-garage/3-yr.jpg"></div></div></div>   <div class="flipCard"><div class="flipCardInner"><div class="flipCardFront"></div><div class="flipCardBack"><img class="img" src="img/graphics/big=daddy-garage/loyalty-card-banner.jpg"></div></div></div>   </div>  </div>'
}
//CREATURES BUTTON
//Personal
function creatures() {
  document.getElementById('bodyContainer').innerHTML ='<div class="imgContainer"> <div class="flipcardSpan"> <div class="flipCard"><div class="flipCardInner"><div class="flipCardFront"></div><div class="flipCardBack"><img class="img" src="img/graphics/creatures/drake.png"></div></div></div>  </div>  </div>'
}
function showSoftware() {
  document.getElementById('bodyContainer').innerHTML = '<div class="imgContainer"><span class="penButtonSpan">  <button class="Button"><a href="https://github.com/Kabongwe-Manelisi/mysqlConnector.py">mysqlConnector.py</button>  <button class="Button"><a href="https://github.com/Kabongwe-Manelisi/financial-Visualizer">financialVisiualizer.py</button>  <button class="Button"><a href="https://github.com/Kabongwe-Manelisi/accessUserAcc">accessUserAcc.py</button>   <button class="Button"><a href="https://github.com/Kabongwe-Manelisi/createUserAccount">createUserAcc</button> </span> </div>'
}
function showApps() {
  document.getElementById('bodyContainer').innerHTML = '<div class="imgContainer"><span class="penButtonSpan">  <button class="Button"><a href="https://github.com/Kabongwe-Manelisi/FlaskApp">FlaskApp</button>  </span> </div>'
}

