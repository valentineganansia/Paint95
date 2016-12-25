var arrayColor=["#C70808","#FF2160","#0D46FF","#0DD7FF","#4FD251","#94FF06","#FF5E00","#FFEC0D"];
 var selectedColor=""; // doing a string so an empty string is with this "";

function menu(){
	var menu = document.createElement('div'); // je crée mon menu ma pallet sera a l'interieur
	menu.id="menu";
	document.body.appendChild(menu);
	pallet(); // j'appelle ma fonction pallet
	eraser();
}
function init(){
	menu();
	Canvas();
	grid();
	//eraserSize();
}

//Mes couleurs 
function pallet(){
	for(var i=0;i<arrayColor.length;i++){
		var color=document.createElement('div');
		color.id=arrayColor[i];
		color.style.backgroundColor=arrayColor[i];
		color.classList.add("color");//make an array of all the classes thanks to the lIST
		color.classList.add("clickable"); 
		color.addEventListener("click",changeColor);
		document.getElementById("menu").appendChild(color);
	}
}

function changeColor(e){ // e c'est l'event en lui même il enregistre tout 
	 if(e.target.id=="eraser"){
	 	selectedColor="white";
	 	return; // j'ecris return pour passer à l'autre cas ou je mets de la couleur 
	 }

	 selectedColor = e.target.id;
	 alert(selectedColor);

}


// Ma div dans laquelle sera presente mon Canvas
function Canvas(){
var canvas = document.createElement('div');
canvas.id= "canvas";
document.body.appendChild(canvas);

}

// Ma fonction qui va me créer mes lignes et mes colonnes de mon CANVAS . 
function grid(){
	for(var j=0;j<50;j++){ // Je crée une loop dans une autre .
		var line=document.createElement('div');
		line.classList.add('line');
		line.id= "l" +i;
		document.getElementById("canvas").appendChild(line);
		for(var i=0;i<50;i++){ //j'aurai 10 elements
			var grid = document.createElement('div'); // je mets ça à l'interieur du for pour qu'il ne m'en crée pas qu'un
			grid.classList.add("grid");
			grid.id= "l"+j+"c"+i; // Je crée mon ID pour chaque div. 
			grid.addEventListener("click",putColor);
			grid.addEventListener("mousedown",mouseD); //je precise que cest quand je suis dessus
			grid.addEventListener("mouseover",putColor);//ça colorie ce sur quoi je suis dessus
			grid.addEventListener("mouseup",mouseU);//ça s'arrete de colorier 
			line.appendChild(grid);//appendChild ce que je mets. Get=la ou je le mets.

		}
	}
} 
//Ma fonction qui va permettre d'attribuer une couleur a chaque div selectionnée de mon CANVAS.
function putColor(e){
	if (selectedColor == 0){
        alert("please choose a color first!");
        return;
    }
e.target.style.backgroundColor=selectedColor; //J'ATTRIBUE UNE COULEUR A CHAQUE DIV SELECTIONNEE 
}

var d=0;
function mouseD(e){ // correspond a mousedown
d=1;
}

function mouseU(e){//correspond a mouseup
d=0;
}

function eraser(){
	var eraser=document.createElement('img');
	eraser.src="./images/eraser.png";
	eraser.id="eraser";
eraser.addEventListener("click",changeColor);
document.getElementById("menu").appendChild(eraser);
}

// je crée mon clear screen
function clearScreen(){
	var clearScreen= document.createElement('img');
	clearScreen.src="./images/eraseall.jpg";
	clearScreen.id="clear";
	clearScreen.addEventListener("click",clear);
	document.getElementById("menu").appendChild(clearScreen);
}
//la fonction qui va tout effacer. 
function clear(){
	var clearScreen=document.getElementsByClassList("grid");
	for( var g=0; g<=clearScreen.length, g++){
		clearScreen[g].style.backgroundColor="white";
	}
}
/*function eraserSize(){
var size =document.createElement('select');
size.id="size";

//select.addEventListener("click",option);
var option = document.createElement('option');
option.textContent = "Big";
option.classList="option";
option.value = 30;

size.appendChild(option);
var option = document.createElement('option');
option.textContent = "Middle";
option.classList="option"
option.value = 15;

size.appendChild(option);
var option = document.createElement('option');
option.textContent = "Small";
option.classList="option"
option.value = 5;
size.appendChild(option);




document.getElementById("menu").appendChild(size);

size.addEventListener("change",selectSize);

/*for(var i=0;i<option.value.length;i++){
	if(option.value===5)	
	
	if(option.value===15)

	if(option.value===30)


	//il faut que je selectionne mon array 
} 

}


function selectSize(e){
	alert(this.value)
} */


/*Creer mon erase canvas : 
function eraserCanvas(){
	
}
*/


