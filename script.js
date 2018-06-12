var knopka = document.getElementById('knopka');

knopka.onclick = function() {
var firstInp = +document.getElementById('fInp').value;
var secondInp = +document.getElementById('sInp').value;
var block = document.getElementById('answer');
if (!isNaN(firstInp) && !isNaN(secondInp) ) {
if(firstInp <= 1 && secondInp >=3){
		var sum = +firstInp + +secondInp;
		block.innerHTML = sum;
	}else{
		var div = firstInp - secondInp;
		block.innerHTML = div;
		}
	
}else{
	block.innerHTML = "Input number";
	}
}

var seasons = document.getElementById('seas');

seasons.onclick = function() {
	var season = +document.getElementById('seasons').value;
	var block = document.getElementById('answerTwo');
		switch(season){
			case 1:
			block.innerHTML = "Winter";
			break;
			case 2:
			block.innerHTML = "Spring";
			break;
			case 3:
			block.innerHTML = "Summer";
			break;
			case 4:
			block.innerHTML = "Autumn";
			default:
			block.innerHTML = " Input number between 1 and 4";
		}
	}


var btnLine = document.getElementById('btnLine');

btnLine.onclick = function() {
	var line = document.getElementById('line').value;
	var block = document.getElementById('thirdAnswer');
	if(line.indexOf(1) == 0|| line.indexOf(2) == 0 || line.indexOf(3) == 0){
		block.innerHTML = "Yes";
	}else{
		block.innerHTML = "No";
	}
}

var whil = document.getElementById('while');

whil.onclick = function() {
	var block = document.getElementById('fourth');
	var i = 11;
	while(i<=33){
		block.innerHTML += i + "</br>";
		i++;
	}
}



