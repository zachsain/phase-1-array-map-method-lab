const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];



const titleCased = function(array) {
  return array.map(day => day.charAt(0).toUpperCase() + day.substr(1));

  // return  tutorials;
}





// let upperCase = tutorials.map(day => day.charAt(0).toUpperCase() + day.substr(1));

console.log(titleCased(tutorials));