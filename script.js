const quotes = [
  "“Get busy living or get busy dying.” — Stephen King",
  "“Never let the fear of striking out keep you from playing the game.”– Babe Ruth",
  "“The unexamined life is not worth living.” — Socrates",
  "“Life is like riding a bicycle. To keep your balance, you must keep moving.” — Albert Einstein",
  "“In three words I can sum up everything I’ve learned about life: It goes on.” ― Robert Frost",
  "“There are no mistakes, only opportunities.” —Tina Fey",
  "“Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.”– Buddha",
  "“Nothing is more honorable than a grateful heart.” — Seneca",
  "“All life is an experiment. The more experiments you make, the better.” – Ralph Waldo Emerson",
  "“You only live once, but if you do it right, once is enough.” — Mae West",
  "“Not how long, but how well you have lived is the main thing.” — Seneca",
];
// Selectors
const generateBtn = document.querySelector('.generate-btn')
const quote = document.querySelector('.quote')

// Event Listeners
generateBtn.addEventListener('click', ()=>{
    const random = Math.floor( Math.random() * quotes.length)
    quote.textContent = quotes[random]
})
window.addEventListener('load', ()=>{
    const random = Math.floor( Math.random() * quotes.length)
    quote.textContent = quotes[random]
})

