const quotes=[
    "Be yourself; everyone else is already taken.",
    "So many books, so little time.",
    "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    "A room without books is like a body without a soul.",
    "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
    "You've gotta dance like there's nobody watching,Love like you'll never be hurt,Sing like there's nobody listening,And live like it's heaven on earth.",
    "Be the change that you wish to see in the world.",
    "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best."
];
const authors=[
    "Oscar Wilde",
    "Frank Zappa",
    "Albert Einstein",
    "Marcus Tullius Cicero",
    "Bernard M. Baruch",
    "William W. Purkey",
    "Mahatma Gandhi",
    "Marilyn Monroe"
];

var i=0;

function loading(){
    document.querySelector("#quotes").innerHTML='"'+quotes[0]+'"';
    document.querySelector("#authors").innerHTML=authors[0];

    console.log("usao u loading i zavrsio ga!");
}

function newQuote(){
    i++;
    if(i>=quotes.length) i=0;
    document.querySelector("#quotes").innerHTML='"'+quotes[i]+'"';
    document.querySelector("#authors").innerHTML=authors[i];

    console.log("usao u newQuote i zavrsio ga!");
}