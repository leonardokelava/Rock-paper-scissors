
  
   var moves= [ "rock" , "paper" , "scissors" ] ;

function computerPlay() {

    let x = Math.floor(Math.random() * 2);
    return (moves[x]); 
}
 
    let computer = 0;
    let player = 0 ;





const score = document.querySelector('.score');


function oneRound(choice, computerSelection) {

playerSelection=choice ;
computerSelection = computerPlay() ; 


if (computerSelection == playerSelection) {alert("It's a tie");}
    else if(playerSelection=="rock") {
      
     switch(computerSelection) {
      case "paper": 
      alert("Paper beats rock. Computer wins!");
      computer++;   
      break;
        case "scissors":
        alert("Rock beats scissors.Player wins!");
        player++;
      break;   
          
           }
    }
      
    else if(playerSelection=="paper") {
      
      switch(computerSelection) {
        case "rock": 
        alert("Paper beats rock. Player wins!")
        player++;
        break;
        case "scissors":
        alert("Scissors beat paper.Computer wins!");
        computer++;
        break; }
    }
            
    else if(playerSelection=="scissors") {
      
      switch(computerSelection) {
      case "paper": 
      alert("Scissors beat paper. Player wins!");
      player++;
      break;
      case "rock":
      alert("Rock beats scissors. Computer wins!");
      computer++;
      break;
           }
    }
   score.textContent= "Computer: " +  computer + "  " +  "Player: " + player;    

   if(player==5) { 
     alert("Player won!");
     player = 0;
     computer = 0;

   }


   if(computer==5) { 
     alert("Computer won!");
     player = 0;
     computer = 0;

  }

}





const btn = document.querySelectorAll('.choice') ; 
btn.forEach((button) => {
button.addEventListener('click', () => {

 
oneRound(button.value);
  
  
}) ;
 
})    

    
 