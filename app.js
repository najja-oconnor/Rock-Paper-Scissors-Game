const game = () => {
   let pScore = 0;
   let cScore = 0;

   const startGame = () => {
       const playBtn = document.querySelector('.intro button')
       const introScreen = document.querySelector('.intro')
       const match = document.querySelector('.match')

       playBtn.addEventListener("click", () => {
           introScreen.classList.add('fadeOut')
           match.classList.add('fadeIn')
       })
   }
   //Play match
   const playMatch = () => {
       const options = document.querySelectorAll('.options button')
   }


   //call all inner functions
   startGame();
}

//call game function - start the game
game();