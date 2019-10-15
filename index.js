import { Header, Nav, Main, Footer } from "./components";
import * as state from "./store";
// That grabs everything that comes out of store, and puts it in state variable

import Navigo from "navigo";

const router = new Navigo(location.origin);




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

  router.updatePageLinks(); // shorter version
  }

  // render();


  router
  // Developer's Note: ':page' can be whatever you want to name the key that comes into `params` Object Literal
  // TODO: Create a 404 page and route all 'bad routes' to that page.
  .on(":page", params =>
    render(
      state[
        `${params.page.slice(0, 1).toUpperCase()}${params.page
          .slice(1)
          .toLowerCase()}`
      ]
    )
  )
  .on("/", render())
  .resolve();


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
