const getRandomQuote = (quotes) => {
  const random = Math.floor(Math.random() * (quotes.length - 1));

  return quotes[random];
};

export default getRandomQuote;
