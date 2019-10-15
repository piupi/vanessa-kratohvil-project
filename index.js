import { Header, Nav, Main, Footer } from "./components";
import * as state from "./store";
// That grabs everything that comes out of store, and puts it in state variable

import Navigo from "navigo";

const router = new Navigo();

console.log(location.origin)

// import Header from "./components/Header";
// import Nav from "./components/Nav";
// import Main from "./components/Main";
// import Footer from "./components/Footer";

// Use state to render the appropriate heading depending on the state of the app - what pg is  currently selected or being displayed

// the parameter st represents a piece of state


function render(st = state.Home){
  document.querySelector("#root").innerHTML = `
  ${Header(st)}
  ${Nav(st)}
  ${Main(st)}
  ${Footer(st)}
  `;
  const links = document.querySelectorAll('nav a, footer a');
  links.forEach(link => link.addEventListener("click", event => {
    event.preventDefault();
    render(state[event.target.textContent]);
  }));
  }

  render();





//forloop that logs the text content inside each link

// for (let i=0; i<links.length; i++){
//   console.log(links[i].textContent);
//   links[i].addEventListener('click', function(event){
//   event.preventDefault();
//   render(state[event.target.textContent.toLowerCase()]); //idk if i need this line
//   // console.log(event.target.textContent)
// })
// }


// gettig rid of that for loop



// TODO: add links array to each peace of stat
