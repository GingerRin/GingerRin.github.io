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
  costCatFood: 500,
  boughtCatFood: false
}

function Update(){
	update = setInterval(Main, 100)
	cat = setInterval(catClick, 1000)
}

function Main(){
	if(gameData.click>=gameData.highestClick) gameData.highestClick = gameData.click
	if(gameData.highestClick>=10){
		document.getElementById("buyClick").style.visibility = 'visible'
		document.getElementById("currCostPerClick").style.visibility = 'visible'
	}

	if(gameData.click<=gameData.costPerClick) document.getElementById("buttonCPC").disabled = true
	else document.getElementById("buttonCPC").disabled = false
	
	if(gameData.highestClick>=100){
		document.getElementById("buyCat").style.visibility = 'visible'
		document.getElementById("currCostPerCat").style.visibility = 'visible'
	}
	
	if(gameData.click<=gameData.costPerCat) document.getElementById("buttonCat").disabled = true
	else document.getElementById("buttonCat").disabled = false
	
	if(gameData.highestClick>=500 && gameData.boughtCatFood == false && gameData.cat>=1){
		document.getElementById("buyCatFood").style.visibility = 'visible'
		document.getElementById("currCostCatFood").style.visibility = 'visible'
		document.getElementById("descCatFood").style.visibility = 'visible'
	}
	if(gameData.click<=gameData.costCatFood) document.getElementById("buttonCatFood").disabled = true
	else document.getElementById("buttonCatFood").disabled = false
}

function catClick(){
	gameData.click += gameData.clickPerCat * gameData.gainPerCatClick
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
		gameData.clickPerCat += 1
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
		document.getElementById("currClickPerCat").innerHTML = gameData.clickPerCat * gameData.gainPerCatClick + " CpS"
	}
}

function buyCatFood(){
	if(gameData.click>=gameData.costCatFood){
		gameData.click -= gameData.costCatFood
		gameData.gainPerCatClick *= 2 
		gameData.buyCatFood = true
		document.getElementById("buttonClicked").innerHTML = gameData.click + " clicks"
		document.getElementById("currClickPerCat").innerHTML = gameData.clickPerCat * gameData.gainPerCatClick + " CpS"
		document.getElementById("buttonCatFood").innerHTML = "Bought cat food"
		document.getElementById("currCostCatFood").innerHTML = ""
		document.getElementById("descCatFood").innerHTML = "Your cats finally have something to eat"
	}
}