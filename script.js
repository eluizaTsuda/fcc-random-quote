
const quoteBox =   [
  {quote:"The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author:"Nelson Mandela"
  },
  {quote:"The way to get started is to quit talking and begin doing.",
    author:"Walt Disney"
  },
  {quote:"The purpose of our lives is to be happy.", 
    author:"Dalai Lama"
  },
  {quote:"I have missed more than 9000 shots in my career. I have lost almost 300 games. 26 times I have been trusted to take the game winning shot and missed. I have failed over and over and over again in my life. And that is why I succeed.", 
    author:"Michael Jordan"
  },
  {quote:"Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma — which is living with the results of other people's thinking.",
    author:"Steve Jobs"
  }
];


const colors = [
  '#87617c', // Mostly desaturated dark pink.
  '#699669', // Mostly desaturated dark lime green.
  '#696996', // Mostly desaturated dark blue.
  '#966980', // Mostly desaturated dark pink.
  '#969669', // Mostly desaturated dark yellow.
  '#966969', // Mostly desaturated dark red.
  '#e63e00', // Pure (or mostly pure) orange.
  '#e6b100', // Pure (or mostly pure) yellow.
  '#79a079', // Dark grayish lime green.
  '#7b95a0', // Dark grayish blue.
  '#b3b34c', // Moderate yellow
  '#4cb3b3'  // Moderate cyan.
];

let text = document.getElementById("text");
let author = document.getElementById("author");
let btnNewQuote = document.getElementById("new-quote");
let tweetQuote = document.getElementById("tweet-quote");

const urlApiQuote = "https://api.quotable.io/random";
const urlTwitter = 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' 

function newQuote() {
  // Get quote and author - const quoteBox
    //let nRandom = Math.floor((Math.random() * quoteBox.length) + 1);
    //text.innerText = quoteBox[nRandom-1].quote;
    //author.innerText = quoteBox[nRandom-1].author;
    //tweetQuote.href = urlTwitter + encodeURIComponent(quoteBox[nRandom-1].quote + " - " + quoteBox[nRandom-1].author);

  // Get quote and author - const urlQuote
  fetch(urlApiQuote)
  .then((response) => response.json())
  .then((data) => {
    text.innerText = data.content;
    author.innerText = `- ` + data.author;
    tweetQuote.href = urlTwitter + encodeURIComponent(`${data.content} - ${data.author}`);
  })

  // Color change - jQuery
 
  var color = Math.floor(Math.random() * colors.length);

  $('html body').animate(
    {
      backgroundColor: colors[color],
      color: colors[color]
    },"5000");

  $('button, a').animate(
    {backgroundColor: colors[color],opacity: '0.6'},"5000");

  $('blockquote').animate(
    { borderLeftColor: colors[color]}, 500);

}
window.addEventListener("load", newQuote);
btnNewQuote.addEventListener("click", newQuote);