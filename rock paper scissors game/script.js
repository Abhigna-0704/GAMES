var you;
var yourScore=0;
var opponent;
var opponentScore=0;

var choices=["rock","paper","scissors"];

//for page loading we call this function
window.onload  = function(){
    for(let i=0;i<3;i++){
        //instead of placing this in html in choices div we place here so that it takes all other choices also
        //<img id ="rock" src="rock.png">
        let choice = document.createElement("img");
        choice.id = choices[i];
        //set src i.e png format 
        choice.src = choices[i] + ".png";
        choice.addEventListener("click",selectChoice);
        //appending the image tag 
        document.getElementById("choices").append(choice);
    }
}
function selectChoice(){
    //you refers to the variable above 
    //this refers to the image that was clicked
    //id refers to rock,paper,scissors
    you =this.id;
    document.getElementById("your-choice").src = you + ".png";

    //random for opponent
    opponent = choices[Math.floor(Math.random() * 3)];// a number between 0 and 1 not including 1 so 0- .9999*3 = 0 - .29999
    document.getElementById("opponent-choice").src = opponent +".png";
  
    //check for winner
    if(you == opponent){
        yourScore +=1;
        opponentScore+=1;
    }
    else{
        if( you=="rock"){
            if(opponent=="scissors"){
                yourScore+=1;
            }
            else if(opponent=="paper"){
                opponentScore+=1;
            }
        }
        else if( you=="scissors"){
            if(opponent=="paper"){
                yourScore+=1;
            }
            else if(opponent=="rock"){
                opponentScore+=1;
            }
        }
       else  if( you=="paper"){
            if(opponent=="rock"){
                yourScore+=1;
            }
            else if(opponent=="scissors"){
                opponentScore+=1;
            }
        }
    }
     
document.getElementById("your-score").innerText = yourScore;
document.getElementById("opponent-score").innerText = opponentScore;
}

