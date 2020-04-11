const game = () => {
   let pScore = 0;
   let cScore = 0;

   const startGame = () => {
       const playBtn = document.querySelector('.intro button')
       const introScreen = document.querySelector('.intro')
       const match = document.querySelector('.match')

       playBtn.addEventListener('click', () => {
           introScreen.classList.add('fadeOut')
       })
   }

   //make sure to call all inner functions
   startGame()
}

//call game function - start the game
game()