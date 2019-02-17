function getQuote() {
  var randomnum = Math.floor(Math.random()*(quotes.length));
document.getElementById('newquote').innerHTML = quotes[randomnum]; 
}
 function tweet(){
   var quotetext = document.getElementById('newquote').innerHTML; 
 window.open("https://twitter.com/intent/tweet?text=" + quotetext);
 };   

var quotes = ["The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart. -Helen Keller ","Keep love in your heart. A life without it is like a sunless garden when the flowers are dead. -Oscar Wilde ","It is during our darkest moments that we must focus to see the light. -Aristotle","Try to be a rainbow in someone's cloud. -Maya Angelou ","Find a place inside where there's joy, and the joy will burn out the pain. -Joseph Campbell ","Nothing is impossible, the word itself says 'I'm possible'! -Audrey Hepburn ","Don't judge each day by the harvest you reap but by the seeds that you plant. -Robert Louis Stevenson ","Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment. -Buddha ","The only thing necessary for the triumph of evil is for good men to do nothing. -Edmund Burke ","One of the most beautiful qualities of true friendship is to understand and to be understood. -Lucius Annaeus Seneca ","Where there is love there is life. -Mahatma Gandhi ","Love is composed of a single soul inhabiting two bodies. -Aristotle ","Do not go where the path may lead, go instead where there is no path and leave a trail. -Ralph Waldo Emerson ","Success is not final, failure is not fatal: it is the courage to continue that counts. -Winston Churchill ","Do all things with love. -Og Mandino "]