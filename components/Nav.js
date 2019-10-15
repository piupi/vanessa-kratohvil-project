import {Links} from "../store"


// function linksBuilder(links){
//   let linksHTML = ""
//   //loop over the links
//   for (let i=0; i<links.length; i+=1){
//     linksHTML += `<li><a href=./${links[i]}">${links[i]}</a></li>`;
//   }
//   //using a template literal we can build out the list item markup
//   return linksHTML;
// }

// Above is the old version! Below uses map instead of loop


function linksBuilder(links){
  return links.map(link => `<li><a href=./${link}>${link}</a></li>`).join("");
}

export default (nav) => `<nav>
<span class="fas fa-bars is-hidden--desktop"></span>
<ul class="is-hidden--mobile is-hidden--tablet  is-shown--desktop">
  ${linksBuilder(Links)}
</ul>
</nav>
`;


//TODO: RECIEVve a list of links and dynamically build the navigation menu
