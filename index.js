import { Header, Nav, Main, Footer } from "./components";
import * as state from "./store";
// That grabs everything that comes out of store, and puts it in state variable

import Navigo from "navigo";
import axios from "axios";
import { capitalize } from "lodash";

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
        capitalize(params.page)
        // `${params.page.slice(0, 1).toUpperCase()}${params.page
        //   .slice(1)
        //   .toLowerCase()}`
      ]
    )
  )
  .on("/", () => render())
  .resolve();

// axios
//   .get("https://jsonplaceholder.typicode.com/posts")
//   .then(response => {
//     //response.data contains array of 100 post objects
//     state.Blog.main = response.data.map(post => `
//     <article>
//     <h2>{post.title}</h2>
//     <p>{post.body}</p>
//     </article>
//     `;
//     console.log("after map", state.Blog.main);
//   })
//   .catch(err => console.log(err));

axios
  .get("https://jsonplaceholder.typicode.com/posts")
  .then(response => {
    //response.data contains array of 100 post objects
    //this is the object destructuring way, so you dont have to use dot notation
    state.Blog.main = response.data.map(({title, body}) => `
    <article>
    <h2>${title}</h2>
    <p>${body}</p>
    </article>
    `
    ).join("") // turns the array into a string

    if (capitalize(router.lastRouteResolved().params.page) === "Blog") {
      render(state.Blog);
    }
    // console.log("after map", state.Blog.main);
    // console.log(router.lastRouteResolved());
    })
  .catch(err => console.log(err));

