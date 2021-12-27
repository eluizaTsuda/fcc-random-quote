const quoteBox = [
    {quote:"1 The greatest glory in living lies not in never falling, but in rising every time we fall.",
     author:"- Nelson Mandela"
    },
    {quote:"2 The way to get started is to quit talking and begin doing.",
     author:"- Walt Disney"
    },
    {quote:"3 Many of life's failures are people who did not realize how close they were to success when they gave up.",
     author:"- Thomas A. Edison"
    },
    {quote:"4 Keep smiling, because life is a beautiful thing and there's so much to smile about.",
     author:"- Marilyn Monroe"
    },
    {quote:"5 The purpose of our lives is to be happy.", 
     author:"- Dalai Lama"
    },
    {quote:"6 If you want to live a happy life, tie it to a goal, not to people or things.", 
     author:"- Albert Einstein"
    },
    {quote:"7 The big lesson in life, baby, is never be scared of anyone or anything.", 
     author:"– Frank Sinatra"
    },
    {quote:"8 I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed.", 
     author:"- Michael Jordan"
    },
    {quote:"9 Love the life you live. Live the life you love.",
     author:"- Bob Marley"
    },
    {quote:"10 Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma — which is living with the results of other people's thinking.",
     author:"- Steve Jobs"
    }
  ];
  
  document.getElementsByTagName("h1")[0].style.fontSize = "3vw";
  
  
  function newQuote() {
    
    let nRandom = Math.floor((Math.random() * quoteBox.length) + 1);
  
    let twitter_link = 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' 

    // Add quote and author
    twitter_link += encodeURIComponent('"' + quoteBox[nRandom-1].quote + '" ' + quoteBox[nRandom-1].author) 

    document.getElementById("tweet-quote").href = twitter_link;
    document.getElementById("text").innerText = quoteBox[nRandom-1].quote;
    document.getElementById("author").innerText = quoteBox[nRandom-1].author;
  }
