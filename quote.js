const quotes = [
    {
      text: "Life is 10% what happens to us and 90% how we react to it.",
      author: "Charles R. Swindoll",
    },
    {
      text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
      author: "Winston Churchill",
    },
    {
      text: "Don't watch the clock; do what it does. Keep going.",
      author: "Sam Levenson",
    },
    {
      text: "The best way to predict the future is to create it.",
      author: "Abraham Lincoln",
    },
    {
      text: "Happiness is not something ready made. It comes from your own actions.",
      author: "Dalai Lama",
    },
  ];
  const getQuote = () => {
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
  
    document.getElementById("quoteText").innerHTML = quote.text;
    document.getElementById("quoteAuthor").innerHTML = `- ${quote.author}`;
  };