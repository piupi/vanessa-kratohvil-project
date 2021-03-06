import { Header, Nav, Main, Footer } from "./components";
import * as state from "./store";
// That grabs everything that comes out of store, and puts it in state variable

import Navigo from "navigo";
import axios from "axios";
import { capitalize } from "lodash";
import { auth, db } from "./firebase";

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

    if (router.lastRouteResolved().params && capitalize(router.lastRouteResolved().params.page) === "Blog") {
      render(state.Blog);
    }
    // console.log("after map", state.Blog.main);
    // console.log(router.lastRouteResolved());
    })
  .catch(err => console.log(err));


 // Gallery
db.collection("pictures")
.get()
.then(querySnapshots => {

  // Let's make sure to update instead of overwriting our markup
  state.Gallery.main +=
    `<div class="gallery">` +
    querySnapshots.docs
      .map(doc => {
        // Combine `const` with destructuring to create 3 variables from the keys in our object literal
        const { caption, credit, imgURL } = doc.data();

        return `
      <figure>
        <img src="${imgURL}" alt="">
        <figcaption>${caption} - ${credit}</figcaption>
      </figure>
    `;
      })
      .join(" ") +
    `</div>`;

  if (
    router.lastRouteResolved().params &&
    capitalize(router.lastRouteResolved().params.page) === "Gallery"
  ) {
    render(state.Gallery);

    const imgURL = document.querySelector("#imgURL");
    const caption = document.querySelector("#caption");
    const credit = document.querySelector("#credit");

    document.querySelector("form").addEventListener("submit", e => {
      e.preventDefault();

      db.collection("pictures")
        .add({
          imgURL: imgURL.value,
          caption: caption.value,
          credit: credit.value
        })
        .then(function(docRef) {
          console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {
          console.error("Error adding document: ", error);
        });
    });
  }
})
.catch(err => console.error("Error loading pics", err));


// Admin
// TODO: Rather than grabbing each element manually, consider using (`event.target.elements`) on the `submit` event.
// Are we on Admin page?
if (
  router.lastRouteResolved().params &&
  capitalize(router.lastRouteResolved().params.page) === "Admin"
) {
  // Are we logged in?
  auth.onAuthStateChanged(user => {
    console.log(user);
    if (user) {
      // We are logged in!
      console.log("logged in!");
      state.Admin.main = `<button type="button">Log out!</button>`;
      render(state.Admin);


      document.querySelector("button").addEventListener("click", () => {
        auth
          .signOut()
          // After the signout lets bring back the old login markup
          .then(() => {
            state.Admin.main = `
            <form>
              <input type="email" />
              <input type="password" />
              <input type="submit" value="Log in!" />
            </form>
          `;
          render(state.Admin);
          })
          .catch(err => console.log("Error signing out", err.message));
      });
    } else {
      const email = document.querySelector('[type="email"]');
      const password = document.querySelector('[type="password"]');

      document.querySelector("form").addEventListener("submit", e => {
        e.preventDefault();

        auth
          .signInWithEmailAndPassword(email.value, password.value)
          .catch(err => console.error("Got an error", err.message));
      });
    }
  });
}


