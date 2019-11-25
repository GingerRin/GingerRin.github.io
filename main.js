var gameData = {
  click: 0,
  clickPerClick: 1,
  costPerClick: 10,
  gainPerClick: 1,
  costScale: 1,
  cat: 0,
  costPerCat: 100,
  gainPerCat: 1,
  costScale2: 50,
  clickPerCat: 0,
  gainPerCatClick: 1
}

function Update(){
	update = setInterval(Main, 100)
	cat = setInterval(catClick, 1000)
}

function Main(){
	if(gameData.click>=10){
		document.getElementById("buyClick").style.visibility = 'visible'
		document.getElementById("currCostPerClick").style.visibility = 'visible'
	}
	if(gameData.click>=100){
		document.getElementById("buyCat").style.visibility = 'visible'
		document.getElementById("currCostPerCat").style.visibility = 'visible'
	}
}

function catClick(){
	gameData.click += gameData.clickPerCat
	document.getElementById("buttonClicked").innerHTML = gameData.click + " clicks"
}

function clickButton(){
	gameData.click += gameData.clickPerClick
	document.getElementById("buttonClicked").innerHTML = gameData.click + " clicks"
}

function buyClickPerClick(){
	if(gameData.click>=gameData.costPerClick){
		gameData.click -= gameData.costPerClick
		gameData.clickPerClick += gameData.gainPerClick
		gameData.costPerClick += gameData.costScale
		gameData.costScale += gameData.costScale
		document.getElementById("currClickPerClick").innerHTML = gameData.clickPerClick
		document.getElementById("buttonClicked").innerHTML = gameData.click + " clicks"
		document.getElementById("currCostPerClick").innerHTML = "Cost: " + gameData.costPerClick + " clicks"
	}
}

function buyCat(){
	if(gameData.click>=gameData.costPerCat){
		gameData.click -= gameData.costPerCat
		gameData.cat += gameData.gainPerCat
		gameData.costPerCat += gameData.costScale2
		gameData.costScale2 += gameData.costScale2
		gameData.clickPerCat += gameData.gainPerCatClick
		document.getElementById("currCat").style.visibility = 'visible'
		if(gameData.cat<=1){
			document.getElementById("currCat").innerHTML = "You have " + gameData.cat + " cat"
		}else{
			document.getElementById("currCat").innerHTML = "You have " + gameData.cat + " cats"
		}
		document.getElementById("buttonClicked").innerHTML = gameData.click + " clicks"
		document.getElementById("currCostPerCat").innerHTML = "Cost: " + gameData.costPerCat + " clicks"
		document.getElementById("currCat2").style.visibility = 'visible'
		document.getElementById("currClickPerCat").style.visibility = 'visible'
		document.getElementById("currClickPerCat").innerHTML = gameData.clickPerCat + " CpS"
	}
}