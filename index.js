import Header from "./components/Header";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Footer from "./components/Footer";

console.log(Header);
console.log(Nav);
console.log(Main);
console.log(Footer);


document.querySelector("#root").innerHTML = `${Header("HELLO FROM HEADER SPA")} ${Nav()} ${Main()} ${Footer()}`
