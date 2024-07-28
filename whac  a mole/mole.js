let currMoleTile;
let currPlantTile;
let score=0;
let gameOver= false;

window.onload = function(){
    setGame();
}
 function setGame(){
    //s(et up the grid for the gaem board
    for(let i=0;i<9;i++){// i goes from 0 to 8,stops at 9
        //<div id ="0-8"></div>
        let tile = document.createElement("div");
        tile.id = i.toString();
        tile.addEventListener("click",selectTile);
        document.getElementById("board").append(tile);
    }
     setInterval(setMole,1000)//1000 milliseconds= 1 sec
     setInterval(setPlant,2000);// 2000 milliseconds = 2 sec



 }

 function getRandomTile(){
    //math.random -->(0-1)*9 = (0-9) --> round down to (0-8)  integers using math.floor
     let num = Math.floor(Math.random()*9);
     return num.toString();
 }


 function setMole(){
    if(gameOver){
        return;
    }
    if(currMoleTile){
        currMoleTile.innerHTML= "";
    }

    //create img tag
    let mole = document.createElement("img");
    //source of the img tag
    mole.src = "./monty-mole.png";

    let num = getRandomTile();
    if(currPlantTile&&currPlantTile.id == num){
        return;
    }
    currMoleTile = document.getElementById(num);
    currMoleTile.appendChild(mole);
 }



 function setPlant(){
    if(gameOver){
        return;
    }
    if(currPlantTile){
        currPlantTile.innerHTML="";
    }
     let plant = document.createElement("img");
     plant.src="./piranha-plant.png";

     let num = getRandomTile();
     if(currMoleTile && currMoleTile.id == num){
        return;
     }
    currPlantTile = document.getElementById(num);
    currPlantTile.appendChild(plant); 
 }
   
 function selectTile(){

    if(gameOver){
        return;
    }
    if(this == currMoleTile){
        score+=10;
        document.getElementById("score").innerText = score.toString(); //update score

    }
    else if (this == currPlantTile){
         document.getElementById("score").innerText = "GAME OVER :"+ score.toString();
        gameOver=true;
        }
 }