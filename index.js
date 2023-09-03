const handOptions={
   "rock":"Rock.png",
   "paper":"Paper.png",
   "scissors":"Scissors.png"
}

let userSCORE = localStorage.getItem("userSCORE") || 0;
let computerSCORE = localStorage.getItem("computerSCORE") || 0;

const pickUserHand =(hand)=>{
   
   // hide the current page 

   // console.log(hand);

   let buttons=document.querySelector(".buttons");
   buttons.style.display= "none";

   let buttons1=document.querySelector(".buttons1");
   buttons1.style.display= "none";

   let hands=document.querySelector(".hands");
   hands.style.display="none";

   //show the next page with hand picked

  //  let buttons1=document.querySelector(".buttons1");
  //  buttons1.style.display="none";




   let contest= document.querySelector(".contest");
   contest.style.display="flex";
 
      //set user pick

      document.getElementById("userPickedImage").src =handOptions[hand];

      // console.log(pickComputerHand);

      let cpHand = pickComputerHand();
      referee(hand,cpHand);
};




const pickComputerHand=(hand)=>{
      let hands = ["rock","paper","scissors"]
      // console.log(hands[0]);
      let cpHand = hands[Math.floor(Math.random() * 3)];
      
      // let cpHand1 = Math.floor(Math.random() * 3);
      // console.log("cpHand",cpHand);
      // console.log("cpHand1",cpHand1);


     // set the computer pick

      document.getElementById("computerPickedImage").src = handOptions[cpHand];
      return cpHand;
};


const referee = (userHand, cpHand)=>{
   if (userHand == "paper" && cpHand == "scissors") {
      setDecision("YOU LOSE!");
      setComputerScore(1+ +computerSCORE);
    }
    if (userHand == "paper" && cpHand == "rock") {
      setDecision("YOU WIN!");
      setUserScore(1+ +userSCORE);
    }
    if (userHand == "paper" && cpHand == "paper") {
      setDecision("It's a tie!");
    }
    if (userHand == "rock" && cpHand == "scissors") {
      setDecision("YOU WIN!");
      setUserScore(1+ +userSCORE);
    }
    if (userHand == "rock" && cpHand == "paper") {
      setDecision("YOU LOSE!");
      setComputerScore(1+ +computerSCORE);
    }
    if (userHand == "rock" && cpHand == "rock") {
      setDecision("It's a tie!");
    }
    if (userHand == "scissors" && cpHand == "scissors") {
      setDecision("It's a tie!");
    }
    if (userHand == "scissors" && cpHand == "rock") {
      setDecision("YOU LOSE!");
      setComputerScore(1+ +computerSCORE);
    }
    if (userHand == "scissors" && cpHand == "paper") {
      setDecision("YOU WIN!");
      setUserScore(1+ +userSCORE);
    }
  };


const setDecision = (decision) => {
   // console.log(decision);
   document.querySelector(".decission h1").innerText = decision;
   if(decision == "It's a tie!")
   {
      document.querySelector(".newGame").innerText = "REPLAY";
   }else {
    document.querySelector(".newGame").innerText = "PLAY AGAIN";
   }
   if(decision == "YOU WIN!")
   {
    let buttons=document.querySelector(".buttons");
    buttons.style.display="flex";
   }
   else{
    console.log(decision)
    let buttons1=document.querySelector(".buttons1");
    buttons1.style.display="flex";
   }
}

const setUserScore = (newuserSCORE) => {
  userSCORE = newuserSCORE;
   document.querySelector(".scoreUser h1").innerText = newuserSCORE;
  //  console.log(userSCORE1);
  localStorage.setItem("userSCORE", newuserSCORE);
}

const setComputerScore = (newcomputerSCORE) => {
      computerSCORE = newcomputerSCORE;
      document.querySelector(".scoreComputer h1").innerText = newcomputerSCORE;
      localStorage.setItem("computerSCORE", newcomputerSCORE);
}

const replay = () =>{
  let hands=document.querySelector(".hands");
   hands.style.display="flex";

   //show the next page with hand picked
   let contest= document.querySelector(".contest");
   contest.style.display="none";
}
// Open the rules modal dialog
function openRulesModal() {
  const modal = document.getElementById("rulesModal");
  modal.style.display = "block";
}

// Close the rules modal dialog
function closeRulesModal() {
  const modal = document.getElementById("rulesModal");
  modal.style.display = "none";
}

// Close the modal when clicking the close button or outside the modal
window.onclick = function(event) {
  const modal = document.getElementById("rulesModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
}
function redirectToWinPage() {
  // Use the window.location.href property to navigate to win.html
  window.location.href = "win.html";
}
function openGame() {
  // Use the window.location.href property to navigate to win.html
  window.location.href = "index.html";
}
