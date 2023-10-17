// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener('DOMContentLoaded',()=>{
  const errorBar=document.getElementById('modal')
  const errorMessage=document.getElementById('modal-message')
  errorBar.classList.add('hidden')
  const emptyHearts=document.querySelectorAll('.like-glyph')
  emptyHearts.forEach(heart=>{
    heart.addEventListener('click',()=>{
      mimicServerCall()
      .then(()=>{
        heart.classList.add('activated-heart')
      })
      .catch(error=>{
        console.log(error.message)
        errorMessage.textContent=error.message
        errorBar.classList.remove('hidden')
        setTimeout(function(){
          errorBar.classList.add('hidden')
        },3000)
      })
    })
  })
})



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
