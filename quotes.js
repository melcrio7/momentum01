const quotes = [
  {
    quote: 'A reader lives a thousand lives before the dies...The man who never only one.',
    author: '-George R.R.Martin-',
  },
  {
    quote: 'Books are plane, and the train, and the road. They are the destination, and the journey. They are home.',
    author: '-Anna Quindlen-',
  },
  {
    quote: 'A house without books is like a room without windows.',
    author: '-Heinrich Mann-',
  },
  {
    quote: 'Books are uniquely portable magic.',
    author: '-Stephen King-',
  },
  {
    quote: 'We lead to know we are not alone.',
    author: '-C.S Lewis-',
  },
  {
    quote: 'Come on you apes! You wanna live forever!?.',
    author: '-Jean Rasczak-',
  },
  {
    quote: `I believe, whatever doesn't kill you simply makes you...stranger.`,
    author: '-Jocker-',
  },
  {
    quote: 'I tell you what you get, You get what you fucking deserve!.',
    author: '-Jocker-',
  },
  {
    quote: 'Ideals are peaceful, history is violent.',
    author: '-Don Collier-',
  },
  {
    quote: 'Get away from her You Bitch!.',
    author: '-Ellen Ripley-',
  },
  {

    quote: 'Si vis pacem, para bellum - If you want peace, prepare for war.',
    author: '-Punisher-'
  },


]
const quote = document.querySelector('#quote span:first-child')
const author = document.querySelector('#quote span:last-child')
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)]

quote.innerText = todaysQuote.quote
author.innerText = todaysQuote.author
