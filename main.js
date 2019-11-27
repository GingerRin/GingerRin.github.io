var gameData = {
  click: 0,
  highestClick: 0,
  clickPerClick: 1,
  costPerClick: 10,
  gainPerClick: 1,
  costScale: 1,
  cat: 0,
  costPerCat: 100,
  gainPerCat: 1,
  costScale2: 50,
  clickPerCat: 0,
  gainPerCatClick: 1,
  catFood: 0,
  costCatFood: 250,
  boughtCatFood: false
}

function Update(){
	update = setInterval(Main, 100)
	cat = setInterval(catClick, 1000)
	document.getElementById("tabClickers").click()
}

function Refresh(){
	if(gameData.click<=1) document.getElementById("buttonClicked").innerHTML = gameData.click + " click"
	else document.getElementById("buttonClicked").innerHTML = gameData.click + " clicks"
	document.getElementById("currClickPerClick").innerHTML = gameData.clickPerClick
	document.getElementById("currCostPerClick").innerHTML = "Cost: " + gameData.costPerClick + " clicks"
	if(gameData.cat<=1)document.getElementById("currCat").innerHTML = "You have " + gameData.cat + " cat"
	else document.getElementById("currCat").innerHTML = "You have " + gameData.cat + " cats"
	document.getElementById("currClickPerCat").innerHTML = gameData.clickPerCat * gameData.gainPerCatClick + " CpS"
	document.getElementById("currCostPerCat").innerHTML = "Cost: " + gameData.costPerCat + " clicks"
}

function Main(){
	if(gameData.click>=gameData.highestClick) gameData.highestClick = gameData.click
	if(gameData.highestClick>=10){
		Unlock("goal10")
	}

	if(gameData.click>=gameData.costPerClick) document.getElementById("buttonCPC").disabled = false
	else document.getElementById("buttonCPC").disabled = true
	
	if(gameData.highestClick>=100){
		Unlock("goal100")
	}
	
	if(gameData.click>=gameData.costPerCat) document.getElementById("buttonCat").disabled = false
	else document.getElementById("buttonCat").disabled = true
	
	if(gameData.highestClick>=250 && gameData.boughtCatFood == false && gameData.cat>=1){
		Unlock("goal250")
	}
	if(gameData.click>=gameData.costCatFood && gameData.boughtCatFood == false) 
		document.getElementById("buttonCatFood").disabled = false
	else document.getElementById("buttonCatFood").disabled = true
}

function catClick(){
	gameData.click += gameData.clickPerCat * gameData.gainPerCatClick
	Refresh()
}

function clickButton(){
	gameData.click += gameData.clickPerClick
	Refresh()
}

function buyClickPerClick(){
	if(gameData.click>=gameData.costPerClick){
		gameData.click -= gameData.costPerClick
		gameData.clickPerClick += gameData.gainPerClick
		gameData.costPerClick += gameData.costScale
		gameData.costScale += gameData.costScale
		Refresh()
	}
}

function buyCat(){
	if(gameData.click>=gameData.costPerCat){
		gameData.click -= gameData.costPerCat
		gameData.cat += gameData.gainPerCat
		gameData.costPerCat += gameData.costScale2
		gameData.costScale2 += gameData.costScale2
		gameData.clickPerCat += 1
		document.getElementById("currCat").style.display = "block"
		document.getElementById("currCat2").style.display = "inline"
		document.getElementById("currClickPerCat").style.display = "inline"
		Refresh()
	}
}

function buyCatFood(){
	if(gameData.click>=gameData.costCatFood){
		gameData.click -= gameData.costCatFood
		gameData.gainPerCatClick *= 2 
		gameData.boughtCatFood = true
		document.getElementById("buttonCatFood").innerHTML = "Bought cat food"
		document.getElementById("currCostCatFood").innerHTML = ""
		document.getElementById("descCatFood").innerHTML = "Your cats finally have something to eat"
		Refresh()
	}
}

function openCity(evt, cityName){
	var i, tabcontent, tablinks
	tabcontent = document.getElementsByClassName("tabcontent")
	for(i=0;i<tabcontent.length;i++){
		tabcontent[i].style.display = "none"
	}
	tablinks = document.getElementsByClassName("tablinks")
	for(i=0;i<tablinks.length;i++){
		tablinks[i].className = tablinks[i].className.replace(" active", "")
	}
	document.getElementById(cityName).style.display = "block"
	evt.currentTarget.className += " active"
}

function Unlock(goal){
	var i, eachClass
	eachClass = document.getElementsByClassName(goal)
	for(i=0;i<eachClass.length;i++){
		eachClass[i].style.display = "block"
	}
}