// select fa hamburgie
// listen for oa click on HAMBURGER
// remove mobile hidden class from menu ul (is-hidden--mobile)

const hiddenUL = document.querySelector('ul');
const hamburger = document.querySelector('.fa-bars');

console.log(hamburger, hiddenUL)


hamburger.addEventListener('click', function(){
  hiddenUL.classList.toggle("is-hidden--mobile");
})
