export default function(nav) {
return `<nav>
<span class="fas fa-bars is-hidden--desktop"></span>
<ul class="is-hidden--mobile is-hidden--tablet  is-shown--desktop">
  <li><a href="./index.html">Home</a></li>
  <li><a href="./about/">About</a></li>
  <li><a href="./contact/">Contact</a></li>
  <li><a href="./gallery/">Gallery</a></li>
  <li><a href="./blog/">Blog</a></li>
</ul>
</nav>
`;
}
