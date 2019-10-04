import { Header, Nav, Main, Footer } from "./components";

import { Home, About, Contact, Blog, Gallery, Links } from "./store";

// import Header from "./components/Header";
// import Nav from "./components/Nav";
// import Main from "./components/Main";
// import Footer from "./components/Footer";

// Use state to render the appropriate heading depending on the state of the app - what pg is  currently selected or being displayed


const state = {
  home: {
    heading: "Home Page",
    links: ["Home", "About", "Contact", "Blog", "Gallery"]
  },
  about: {
    heading: "About Page",
    links: ["Home", "About", "Contact", "Blog", "Gallery"]
  },
  contact: {
    heading: "Contact Page",
    links: ["Home", "About", "Contact", "Blog", "Gallery"]
  },
  gallery: {
    heading: "Gallery Page",
    links: ["Home", "About", "Contact", "Blog", "Gallery"]
  },
  blog: {
  heading: "Blog Page",
    links: ["Home", "About", "Contact", "Blog", "Gallery"]
  }
}

// the parameter st represents a piece of state
function render(st = state.home){
document.querySelector("#root").innerHTML = `
${Header(st)}
${Nav(st)}
${Main(st)}
${Footer(st)}
`;
}

render();


const links = document.querySelectorAll('nav a, footer a');

//forloop that logs the text content inside each link

for (let i=0; i<links.length; i++){
  console.log(links[i].textContent);
  links[i].addEventListener('click', function(event){
  event.preventDefault();
  render(state[event.target.textContent.toLowerCase()]); //idk if i need this line
  // console.log(event.target.textContent)
})
}

// TODO: add links array to each peace of stat
