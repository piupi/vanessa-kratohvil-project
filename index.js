import { Header, Nav, Main, Footer } from "./components";

// import Header from "./components/Header";
// import Nav from "./components/Nav";
// import Main from "./components/Main";
// import Footer from "./components/Footer";

// Use state to render the appropriate heading depending on the state of the app - what pg is  currently selected or being displayed


const state = {
  Home: {
    heading: "Home Page"
  },
  About: {
    heading: "About Page"
  }
}

// the parameter st represents a piece of state
function render(st = state.Home){
document.querySelector("#root").innerHTML = `
${Header(st.heading)}
${Nav()}
${Main()}
${Footer()}
`;
}

render();


const aboutLink = document.querySelector('#about');

aboutLink.addEventListener('click', function(event){
  event.preventDefault();
  render(state[event.target.textContent]);
})


//   const aboutElement = event.target;
//   console.log('aboutElement is: ', aboutElement);

//   const aboutText = event.target.textContent;
//   console.log('about text is: ', aboutText);
//   console.log(state[aboutText]);
// })

