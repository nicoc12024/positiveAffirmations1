const affirmations = [
  "All of my problems have a solution.",
  "I love myself.",
  "I am an important person.",
  "I can do anything that I set my mind too.",
  "I am the architect of my life. I build its foundation and choose its contents.",
  "I have been given endless talents which I will utilize everyday.",
  "My ability to conquer my challenges is limitless; my potential to succeed is infinite.",
  "I am blessed with incredible friends.",
  "I take pleasure in my own solitude.",
  "I have as much brightness to offer the world as the next person.",
  "This situation works out for my highest good.",
  "I may not understand the good in this situation, but it is there.",
  "I trust myself to make the best decision for me.",
  "My positivity makes other strive to be positive too.",
  "I help others see their worth.",
  "I am a ray of sunshine.",
  "I will not stress over things I cannot control.",
  "I have touched and continue to touch many lives.",
  "I will work on seeing only the positives and block out the negatives of life.",
  "I am courageous; willing to act despite my fears.",
  "I execute my plan and produce expected results.",
  "I am able to solve my problems creatively.",
  "I have all that I need to make this a great day in my life.",
  "I fully accept myself.",
  "Everything in my life has a purpose.",
  "I am worth loving.",
  "Challenges are opportunities to grow and improve.",
  "I am my best source of motivation.",
  "I aspire to be a giver; a giver of love, a giver of strength; a giver of hope.",
  "Good things are coming my way.",
  "I love who I am.",
  "I am proud to be me.",
  "I am worthy of love.",
];
const button = document.querySelector(".button");
const paragraph = document.querySelector(".text");
const hex = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];

button.addEventListener("click", function () {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumberColor()];
  }
  const randomNumberAff = getRandomNumberAff();
  document.body.style.backgroundColor = hexColor;
  button.style.backgroundColor = hexColor;
  paragraph.textContent = affirmations[randomNumberAff];
  console.log(randomNumberAff);
  paragraph.style.color = hexColor;
});

// Random numbers length - 1
function getRandomNumberColor() {
  return Math.floor(Math.random() * hex.length);
}

function getRandomNumberAff() {
  return Math.floor(Math.random() * affirmations.length);
}
