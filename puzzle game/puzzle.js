var rows=3;
var columns=3;

var currTile;// curr tile is the present tile we want to move with other
var otherTile;// traget tile that we are going to swap with,//blank tile(3.jpg)

var turns=0;

//var imgOrder=["1","2","3","4","5","6","7","8","9"];
var imgOrder=["4","2","8","5","1","6","7","9","3"];

window.onload =function(){

    for(let r=0; r<rows; r++){
        for(let c=0; c<columns; c++){

            //< img id="0-0" src="1.jpg">
            let tile =document.createElement("img");
            tile.id= r.toString() + "-" + c.toString();
            //shift pops from the frontr of the array
             tile.src=imgOrder.shift() +".jpg";

             //DRAG FUNCTIONALITY
             tile.addEventListener("dragstart",dragStart);//click an image to drag
             tile.addEventListener("dragover",dragOver);//moving image around while clicking
             tile.addEventListener("dragenter",dragEnter);//dragging image into another one
             tile.addEventListener("dragleave",dragLeave);//dragged image leavong anoyher image
             tile.addEventListener("drop",dragDrop);// drag an image over anoher image,drop teh image
             tile.addEventListener("dragend",dragEnd);//after drag drop,swap the two tiles

             document.getElementById("board").append(tile);
        }
    }
}

function dragStart(){
   currTile=this; //this refers to the img tile being dragged

}

function dragOver(e){
  e.preventDefault();

}

function dragEnter(e){
    e.preventDefault();

}

 function dragLeave(){

 }

 function dragDrop(){
    otherTile=this;// this  refers to the img file being dropped on
 }

 function dragEnd(){
  if(!otherTile.src.includes("3.jpg")){
        return;
    } 

    let currCoords=currTile.id.split("-");//ex- "0-0"->["0","0"]
    let r =parseInt(currCoords[0]);
    let c=parseInt(currCoords[1]);

    let otherCoords=otherTile.id.split("-");
    let r1 =parseInt(otherCoords[0]);
    let c1 =parseInt(otherCoords[1]);
   //checking adjacency
    let moveLeft = r == r1 && c1 == c-1;
    let moveRight =  r == r1 && c1 == c+1;

    let moveUp = c == c1 && r1 == r-1;
    let moveDown = c == c1 && r1 == r+1;

    let isAdjacent = moveLeft|| moveRight|| moveUp|| moveDown;
     
     if(isAdjacent){
        //swaping the tile if it is adjacent only 
    let currImg =currTile.src;
    let otherImg=otherTile.src;

    currTile.src=otherImg;
    otherTile.src=currImg;
     
    turns +=1;
    document.getElementById("turns").innerText = turns;

 }
}