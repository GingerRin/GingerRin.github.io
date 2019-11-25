var gameData = {
  click: 0,
  clickPerClick: 1,
  costPerClick: 10,
  gainPerClick: 1,
  costScale: 1
}

function Update(){
	update = setInterval(Main, 100)
}

function Main(){
	if(gameData.click>=10){
		document.getElementById("buyClick").style.visibility = 'visible'
		document.getElementById("currCostPerClick").style.visibility = 'visible'
	}
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