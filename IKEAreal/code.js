function initialize()
{
	menuElement = document.getElementById("selectionmenu");
	furnitureBox = document.getElementById("furniturecustomization");
	roomElement = document.getElementById("room");
	floor = document.getElementById("imgfloor");
	furnitureImg = document.getElementById("furnitureimage");
	namePriceElement = document.getElementById("namemoney");
	changeRoomButton = document.getElementById("roombutton");
	colorInputBox = document.getElementById("colorBox");
	roomNumber = 1;
	roomElement.src = "images/br" + roomNumber + ".jpg";
	moneyElement = document.getElementById("money");
	currentzIndex = 0; 
	totalMoney = 3002;
	displayMoney();
	shelfObject = new Furniture("Shelf",200,["blue", "green", "pink"], 400, 400);
	bedObject = new Furniture("Bed",800,["blue", "red", "yellow"], 400, 400);
	chairObject = new Furniture("Chair",40,["cyan", "fuchsia", "green", "indigo", "red"], 250, 250);
	computerChairObject = new Furniture("Computerchair",150,["green", "orange", "yellow"], 300, 300);
	diningTableObject = new Furniture("Diningtable",520,["brown", "orange", "silver"], 250, 250);
	drawerObject = new Furniture("Drawer",230,["brown", "gray", "red"], 200, 200);
	footStoolObject = new Furniture("Footstool",50,["yellow"], 150, 150);
	grandPianoSofaObject = new Furniture("Grandpianosofa",900,["black", "blue", "turquoise"], 400, 400);
	reclinerObject = new Furniture("Recliner",550,["gray", "orange", "salmon"], 300, 300);
	stepStoolObject = new Furniture("Stepstool",3001,["black", "crimson", "gold", "silver"], 100, 100);
	tableObject = new Furniture("Table",100,["brown", "gray", "red"],400, 400);
	tvShelfObject = new Furniture("TvShelf",300,["black", "red"], 400, 400);
	
}

function Furniture(n, p, c, w, h)
{
	this.name = n;
	this.worth = p;
	this.colors = c;
	this.currentColor = this.colors[0];
	this.width = w;
	this.height = h;
}

function chooseColor(c)
{
	currentColor = c;
	updateImageSource();
}

function updateFurnitureBox(object)
{
	furnitureWorth = object.worth;
	furnitureName = object.name;
	
	namePriceElement.innerHTML = furnitureName + " - $" + furnitureWorth;
	
	for (i = 0; i < object.colors.length; i++)
	{
		var newInput = document.createElement("input");
		newInput.setAttribute("value", object.colors[i]);
		newInput.setAttribute("onclick", "chooseColor(this.value)");
		newInput.setAttribute("type", "radio");
		newInput.setAttribute("name", "colors");
		colorInputBox.appendChild(newInput);
		colorInputBox.innerHTML += newInput.value + "<br />";
	}
	currentColor = object.currentColor;
	
	updateImageSource();
	furnitureImg.height = object.height;
	furnitureImg.width = object.width;
	displayFurnitureBox();
}

function updateImageSource()
{
	furnitureImg.src = "images/" + furnitureName + currentColor + ".png";
}

function displayFurnitureBox()
{
	furnitureBox.style.display = "block";
	menuElement.style.display = "none";
}

function displayFurnitureSelection()
{
	colorInputBox.innerHTML = "";
	furnitureBox.style.display = "none";
	menuElement.style.display = "block";
}

function startDrag(e)
{
	e.dataTransfer.setData("source", e.target.src);
}

function allowDrop(e)
{
	e.preventDefault();
}

function dropElement(e)
{
	if(totalMoney - furnitureWorth >= 0)
	{
		totalMoney-=furnitureWorth;
		displayMoney();
		e.preventDefault();
		var imgSrc = e.dataTransfer.getData("source");
		var newImg = document.createElement("img");
		newImg.style.zIndex = currentzIndex;
		newImg.src = imgSrc;
		newImg.setAttribute("onclick", "sellFurniture(this)");
		newImg.worth = furnitureWorth;
		newImg.height = furnitureImg.height;
		newImg.width = furnitureImg.width;
		newImg.style.position = "absolute";
		newImg.style.top = e.clientY - newImg.height/2 + "px";
		newImg.style.left = e.clientX - newImg.width/2 + "px";
		floor.appendChild(newImg);
	}
}

function sellFurniture(img)
{
	totalMoney+=img.worth;
	displayMoney();
	floor.removeChild(img);
}

function displayMoney()
{
	moneyElement.innerHTML = "$" + totalMoney;
}

function changeRoom()
{
	if(roomNumber == 1)
	{
		roomNumber++;
		floor.innerHTML = '<area shape = "poly" coords = "1279,599,1279,919,0,922,410,595"><area shape = "poly" coords = "412,594,0,920,0,795">';
		
	}
	else
	{		
		if(roomNumber == 2)
		{
		roomNumber++;
		floor.innerHTML = '<area shape = "poly" coords = "1053,612,1279,675,1279,923,24,925,25,709,297,640,374,601"><area shape = "poly" coords = "299,643,25,711,217,638"><area shape = "poly" coords = "1176,649,1278,673,1218,647">';
		}
		else 
		{
			roomNumber = 1;
			floor.innerHTML = '<area shape = "poly" coords = "1088,699,1279,777,1279,925,0,926,0,762,195,696">';
		}
	}
	currentzIndex = 0; 
	totalMoney = 3002;
	displayMoney();
	roomElement.src = "images/br" + roomNumber + ".jpg";
}

function changezIndex(index)
{
	currentzIndex = index;
}