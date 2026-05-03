const quotes = [
  "The best way to get started is to quit talking and begin doing. - by Walt Disney",
  "Success is not final, failure is not fatal: it is the courage to continue that counts. - by Winston Churchill",
  "Don’t watch the clock; do what it does. Keep going. - by Sam Levenson",
  "Believe you can and you're halfway there. - by Theodore Roosevelt",
  "Dream big and dare to fail. - by Norman Vaughan",
  "Act as if what you do makes a difference. It does. - by William James",
  "Keep your face always toward the sunshine—and shadows will fall behind you. - by Walt Whitman",
  "Opportunities don't happen. You create them. - by Chris Grosser",
  "Hard work beats talent when talent doesn’t work hard. - by Tim Notke",
  "Do what you can, with what you have, where you are. - by Theodore Roosevelt",

  "Success usually comes to those who are too busy to be looking for it. - by Henry David Thoreau",
  "Don’t be afraid to give up the good to go for the great. - by John D. Rockefeller",
  "I find that the harder I work, the more luck I seem to have. - by Thomas Jefferson",
  "It always seems impossible until it’s done. - by Nelson Mandela",
  "Start where you are. Use what you have. Do what you can. - by Arthur Ashe",

  "Quality is not an act, it is a habit. - by Aristotle",
  "Well done is better than well said. - by Benjamin Franklin",
  "If you’re going through hell, keep going. - by Winston Churchill",
  "Everything you’ve ever wanted is on the other side of fear. - by George Addair",
  "Don’t limit your challenges. Challenge your limits. - by Unknown",

  "Push yourself, because no one else is going to do it for you. - by Unknown",
  "Great things never come from comfort zones. - by Unknown",
  "Dream it. Wish it. Do it. - by Unknown",
  "Success doesn’t just find you. You have to go out and get it. - by Unknown",
  "The harder you work for something, the greater you’ll feel when you achieve it. - by Unknown",

  "Don’t stop when you’re tired. Stop when you’re done. - by Unknown",
  "Wake up with determination. Go to bed with satisfaction. - by Unknown",
  "Do something today that your future self will thank you for. - by Unknown",
  "Little things make big days. - by Unknown",
  "It’s going to be hard, but hard does not mean impossible. - by Unknown",
];

const generateButton = document.getElementById("generateButton");

const quoteDisplay = document.getElementById("quoteDisplay");

function generateQuote(){
    const randomIndex = Math.floor(Math.random()*quotes.length)
    const quote = quotes[randomIndex]
    quoteDisplay.innerText =quote
}


generateButton.addEventListener('click',generateQuote)

// same quote not repeat ones all are comes

/*
const generateButton = document.getElementById("generateButton");
const quoteDisplay = document.getElementById("quoteDisplay");


// shuffle + index
let shuffled = [...quotes].sort(() => Math.random() - 0.5);
let currentIndex = 0;

function generateQuote() {
  // agar sab quotes use ho gaye
  if (currentIndex >= shuffled.length) {
    shuffled = [...quotes].sort(() => Math.random() - 0.5);
    currentIndex = 0;
  }

  const quote = shuffled[currentIndex];
  currentIndex++;

  quoteDisplay.innerText = quote;
}

generateButton.addEventListener("click", generateQuote);

*/
