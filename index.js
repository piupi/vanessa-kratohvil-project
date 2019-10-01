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

document.querySelector("#root").innerHTML = `
${Header(state.Home.heading)}
${Nav()}
${Main()}
${Footer(1995)}
`;


const aboutLink = document.querySelector("#about");

aboutLink.addEventListener('click', function(event){
  event.preventDefault();

  const aboutElement = event.target;
  console.log('aboutElement is: ', aboutElement);

  const aboutText = event.target.textContent;
  console.log('about text is: ', aboutText);
  console.log(state[aboutText])
})

