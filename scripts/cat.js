// constant for storing and array of quotes
const quotes = [
    "Don't think, just do.",
    "If it seems too good to be true, it probably is too good to be true.",
    "Consistency over efficiency.",
    "There's a time and place for everything.",
    "The only limit to our realization of tomorrow is our doubts of today.",
    "It is better to fail in originality than to succeed in imitation.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "The road to success and the road to failure are almost exactly the same.",
    "Regret the things you've done rather than regretting the things you haven't done.",
    "Don't watch the clock; do what it does. Keep going.",
    "Believe you can and you're halfway there.",
    "True freedom is impossible without a mind made free by discipline.",
    "Nothing will change if you do nothing to change.",
    "Good food is the foundation of genuine happiness.",
    "The secret ingredient is always love.",
    "Great meals create great memories—thank you for letting us be part of yours!",
    "Food is not just fuel; it's a story, an experience, and a celebration.",
    "Savor every bite, because every meal is a moment to treasure.",
    "Happiness is homemade—served fresh and straight to your door!",
    "Your support feeds more than just appetites—it fuels our passion.",
    "Every order is a taste of joy, made just for you.",
    "Good food brings people together. Thank you for making us a part of your day.",
    "Eating well is a form of self-respect. Thanks for choosing us to nourish you!"
];

// set constant from dummy div
const quoteElement = document.getElementById('quote');

// fade-in button settings for the home button 
function displayButton () {
    const button = document.getElementById('mybutton');
  
    // fade in the button - delay the quote 2.3 seconds after the page has loaded
    setTimeout(() => {
      button.style.opacity = 2; 
    }, 2300); // 2.3 seconds
};

  // fade-in settings for the randomized quote
function displayRandomQuote() {
    // randomly generate the quote from the array const
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteElement.textContent = randomQuote;

    // fade in the quote
    setTimeout(() => {
      quoteElement.style.opacity = 2;
    }, 1300);

    // call the displayButton function when the displayRandomQuote, so the button can appear slightly
    // after the quote is displayed
    displayButton();
}

// call the displayRandomQuote function once the page is loaded 
window.onload = displayRandomQuote;