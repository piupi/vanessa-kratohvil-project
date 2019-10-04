import { Header, Nav, Main, Footer } from "./components";

// import Header from "./components/Header";
// import Nav from "./components/Nav";
// import Main from "./components/Main";
// import Footer from "./components/Footer";

// Use state to render the appropriate heading depending on the state of the app - what pg is  currently selected or being displayed


const state = {
  home: {
    heading: "Home Page"
  },
  about: {
    heading: "About Page"
  },
  contact: {
    heading: "Contact Page"
  },
  gallery: {
    heading: "Gallery Page"
  },
  blog: {
    heading: "Blog Page"
  }
}

// the parameter st represents a piece of state
function render(st = state.home){
document.querySelector("#root").innerHTML = `
${Header(st.heading)}
${Nav()}
${Main()}
${Footer()}
`;
}

render();


const links = document.querySelectorAll('nav a');

//forloop that logs the text content inside each link

for (let i=0; i<links.length; i++){
  console.log(links[i].textContent);
  links[i].addEventListener('click', function(event){
  event.preventDefault();
  render(state[event.target.textContent.toLowerCase()]); //idk if i need this line
  // console.log(event.target.textContent)
})
}

// TODO: add links array to each peace of state

//   const aboutElement = event.target;
//   console.log('aboutElement is: ', aboutElement);

//   const aboutText = event.target.textContent;
//   console.log('about text is: ', aboutText);
//   console.log(state[aboutText]);
