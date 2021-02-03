var tempMessage

function Main(){
	document.getElementById("default").click()
}

function openTab(evt,tabName){
	var i, tabcontent, tablinks;
	 tabcontent = document.getElementsByClassName("tabcontent");
  		for (i = 0; i < tabcontent.length; i++) {
    		tabcontent[i].style.display = "none";
  		}
  	  tablinks = document.getElementsByClassName("tablinks");
		for (i = 0; i < tablinks.length; i++) {
		    tablinks[i].className = tablinks[i].className.replace(" active", "");
		}
	document.getElementById(tabName).style.display = "block";
  	evt.currentTarget.className += " active";
}


function pasteMessage(){
	document.getElementById("code").value = document.getElementById("message").value
}

function parseMessage(){
	var MyMessage = document.getElementById("message").value
	var MyChar = MyMessage.split('')
	for(var i = 0; i < MyChar.length; i++) {
	 	document.getElementById("code").value += MyChar[i] + " "
	 } 
}

function transMessage(){
	var MyMessage = document.getElementById("message").value
	tempMessage = MyMessage
	document.getElementById("code").value = ""
	var lowMessage = MyMessage.toLowerCase()
	var MyChar = lowMessage.split('')
	var MyCode
	for(var i = 0; i < MyChar.length; i++) {
	 	MyCode = defineSignal(MyChar[i])
	 	for(var e = 0; e < MyCode.length; e++){
	 		if (MyCode[e] == '1') document.getElementById("code").value += "Hun"
	 		if (MyCode[e] == '2') document.getElementById("code").value += "Hwa"
	 		if (MyCode[e] == '0') document.getElementById("code").value += " "
	 	} document.getElementById("code").value += " "
	 } document.getElementById("code").value = document.getElementById("code").value.slice(0,-1)
}

var a = 0;
var b = 0;

function playCode(){
	var lowMessage = tempMessage.toLowerCase()
	var MyChar = lowMessage.split('')
	var MyCode
	MyCode = defineSignal(MyChar[a])
	setTimeout(function(){
	if (MyCode[b] == '1') {
	 			document.getElementById("1Hun").play();
	 			console.log("a="+a+"b="+b)
	 		}else
	 		if (MyCode[b] == '2') {
	 			document.getElementById("3Hwa").play();
	 			console.log("a="+a+"b="+b)
	 		}else
	 		if (MyCode[b] == '0') {
	 			console.log("a="+a+"b="+b)
	 		}
	b++
	if(b<MyCode.length){
		playCode()
	}else{
	a++
	if(a<MyChar.length){
		b = 0
		playCode()
	}}},500)
}

function delaySound(){
	a = 0;
	b = 0;
	playCode()
}

function defineSignal(thisChar){
	var MySignal
	switch (thisChar)
	{
		case 'a': MySignal = ['1','2'];break;
		case 'b': MySignal = ['2','1','1','1'];break;
		case 'c': MySignal = ['2','1','2','1'];break;
		case 'd': MySignal = ['2','1','1'];break;
		case 'e': MySignal = ['1'];break;
		case 'f': MySignal = ['1','1','2','1'];break;
		case 'g': MySignal = ['2','2','1'];break;
		case 'h': MySignal = ['1','1','1','1'];break;
		case 'i': MySignal = ['1','1'];break;
		case 'j': MySignal = ['1','2','2','2'];break;
		case 'k': MySignal = ['2','1','2'];break;
		case 'l': MySignal = ['1','2','1','1'];break;
		case 'm': MySignal = ['2','2'];break;
		case 'n': MySignal = ['2','1'];break;
		case 'o': MySignal = ['2','2','2'];break;
		case 'p': MySignal = ['1','2','2','1'];break;
		case 'q': MySignal = ['2','2','1','2'];break;
		case 'r': MySignal = ['1','2','1'];break;
		case 's': MySignal = ['1','1','1'];break;
		case 't': MySignal = ['2'];break;
		case 'u': MySignal = ['1','1','2'];break;
		case 'v': MySignal = ['1','1','1','2'];break;
		case 'w': MySignal = ['1','2','2'];break;
		case 'x': MySignal = ['2','1','1','2'];break;
		case 'y': MySignal = ['2','1','2','2'];break;
		case 'z': MySignal = ['2','2','1','1'];break;
		case '0': MySignal = ['2','2','2','2','2'];break;
		case '1': MySignal = ['1','2','2','2','2'];break;
		case '2': MySignal = ['1','1','2','2','2'];break;
		case '3': MySignal = ['1','1','1','2','2'];break;
		case '4': MySignal = ['1','1','1','1','2'];break;
		case '5': MySignal = ['1','1','1','1','1'];break;
		case '6': MySignal = ['2','1','1','1','1'];break;
		case '7': MySignal = ['2','2','1','1','1'];break;
		case '8': MySignal = ['2','2','2','1','1'];break;
		case '9': MySignal = ['2','2','2','2','1'];break;
		default: MySignal = ['0']
	}
	return MySignal
}

function transMorse(){
	var MyMessage = document.getElementById("morsetext").value
	document.getElementById("secret").value = ""
	var lowMessage = MyMessage.toLowerCase()
	var MyWord = lowMessage.split('  ')
	var MyChar
	var ConArr = new Array
	for(var i=0; i<MyWord.length; i++){
		var ConStr = ""
		ConArr = [];
		MyChar = MyWord[i].split(' ')
		for(var e=0; e<MyChar.length; e++)
			// console.log(MyChar[e])
			document.getElementById("secret").value += defineChar(MyChar[e])
		}
	}


function defineChar(myString){
	var MyLetter
	switch (myString){
		case "hunhwa": MyLetter = 'a';break;
		case "hwahunhunhun": MyLetter = 'b';break;
		case "hwahunhwahun": MyLetter = 'c';break;
		case "hwahunhun": MyLetter = 'd';break;
		case "hun": MyLetter = 'e';break;
		case "hunhunhwahun": MyLetter = 'f';break;
		case "hwahwahun": MyLetter = 'g';break;
		case "hunhunhunhun": MyLetter = 'h';break;
		case "hunhun": MyLetter = 'i';break;
		case "hunhwahwahwa": MyLetter = 'j';break;
		case "hwahunhwa": MyLetter = 'k';break;
		case "hunhwahunhun": MyLetter = 'l';break;
		case "hwahwa": MyLetter = 'm';break;
		case "hwahun": MyLetter = 'n';break;
		case "hwahwahwa": MyLetter = 'o';break;
		case "hunhwahwahun": MyLetter = 'p';break;
		case "hwahwahunhwa": MyLetter = 'q';break;
		case "hunhwahun": MyLetter = 'r';break;
		case "hunhunhun": MyLetter = 's';break;
		case "hwa": MyLetter = 't';break;
		case "hunhunhwa": MyLetter = 'u';break;
		case "hunhunhunhwa": MyLetter = 'v';break;
		case "hunhwahwa": MyLetter = 'w';break;
		case "hwahunhunhwa": MyLetter = 'x';break;
		case "hwahunhwahwa": MyLetter = 'y';break;
		case "hwahwahunhun": MyLetter = 'z';break;
		case "hwahwahwahwahwa": MyLetter = '0';break;
		case "hunhwahwahwahwa": MyLetter = '1';break;
		case "hunhunhwahwahwa": MyLetter = '2';break;
		case "hunhunhunhwahwa": MyLetter = '3';break;
		case "hunhunhunhunhwa": MyLetter = '4';break;
		case "hunhunhunhunhun": MyLetter = '5';break;
		case "hwahunhunhunhun": MyLetter = '6';break;
		case "hwahwahunhunhun": MyLetter = '7';break;
		case "hwahwahwahunhun": MyLetter = '8';break;
		case "hwahwahwahwahun": MyLetter = '9';break;
		default: MyLetter = ' '
	}
	return MyLetter
}