const quoteBox =   [
  {quote:"1 The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author:"Nelson Mandela"
  },
  {quote:"2 The way to get started is to quit talking and begin doing.",
    author:"Walt Disney"
  },
  {quote:"3 Many of life's failures are people who did not realize how close they were to success when they gave up.",
    author:"Thomas A. Edison"
  },
  {quote:"4 Keep smiling, because life is a beautiful thing and there's so much to smile about.",
    author:"Marilyn Monroe"
  },
  {quote:"5 The purpose of our lives is to be happy.", 
    author:"Dalai Lama"
  },
  {quote:"6 If you want to live a happy life, tie it to a goal, not to people or things.", 
    author:"Albert Einstein"
  },
  {quote:"7 The big lesson in life, baby, is never be scared of anyone or anything.", 
    author:"Frank Sinatra"
  },
  {quote:"8 I have missed more than 9000 shots in my career. I have lost almost 300 games. 26 times I have been trusted to take the game winning shot and missed. I have failed over and over and over again in my life. And that is why I succeed.", 
    author:"Michael Jordan"
  },
  {quote:"9 Love the life you live. Live the life you love.",
    author:"Bob Marley"
  },
  {quote:"10 Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma — which is living with the results of other people's thinking.",
    author:"Steve Jobs"
  }
];

var colors = [
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
  
document.getElementsByTagName("h1")[0].style.fontSize = "3vw";
  
  
function newQuote() {
  
  let nRandom = Math.floor((Math.random() * quoteBox.length) + 1);

  let twitter_link = 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' 

  // Add quote and author
  twitter_link += encodeURIComponent('"' + quoteBox[nRandom-1].quote + '" ' + quoteBox[nRandom-1].author) 

  document.getElementById("tweet-quote").href = twitter_link;
  document.getElementById("text").innerText = quoteBox[nRandom-1].quote;
  document.getElementById("author").innerText = `- ` + quoteBox[nRandom-1].author;

  // Color change - jQuery

  var color = Math.floor(Math.random() * colors.length);


    $('html body').animate(
      {
        backgroundColor: colors[color],
        color: colors[color]
      },
      "5000"
    );


    $('.button').animate(
      {
        backgroundColor: colors[color],

        opacity: '0.5'       


      },
      "5000"
    );


    $(".quote-title").css("color", "white");

    $("#quote-left").animate(
      {
        opacity: '0.3'
      }
    )


}
