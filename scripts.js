// const msg = prompt("What is your name?");

// console.log(msg)


//write function where i can pass in a string that will end up being in the window prompt
function greeter(question = "What is your name?") {
  return prompt(question);
}

const answer = greeter();
console.log(answer);


//replace h1 with their name
const h1TextContent = document.querySelector('h1').textContent = answer;
//another version
//const h1TextContent = document.querySelector('h1').textContent = greeter(); // get rid of answer variable


//const h1 = document.querySelector('h1');
//const textContent = h1.textContent;

//
// console.log(h1TextContent);

