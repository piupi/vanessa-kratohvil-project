import Header from "./components/Header";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Footer from "./components/Footer";



document.querySelector("#root").innerHTML = `
${Header("HELLO FROM HEADER SPA")}
${Nav()}
${Main()}
${Footer(1995)}
`;
