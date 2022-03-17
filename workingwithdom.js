/**
 * Traverse the DOM tree using querySelector() and querySelectorAll()
 * @link https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelector
 * @link https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelectorAll
 */

 import SkyTower from "./SkyTower.js";

 const SkyTower = new SkyTower(
   'SkyTower.jpg',
   'SkyTower',
   'White',
   '750 feet',
   '100 feet',
   false,
 );
 
 const content = `
      <figure class="SkyTower__image">
        <img src=${SkyTower.image} alt="" />
      </figure>
      <h1 class=""></h1>
      <ul class="SkyTower__features">
      <li>Type: ${SkyTower.type}<li>
      <li>Color: ${SkyTower.color}<li>
      <li>Height: ${SkyTower.height}<li>
      <li>Width: ${SkyTower.width}<li>     
      <li>What does it include?: ${SkyTower.windows}<li>
      </ul>
    </article>
  `;
 
 const main = document.querySelector(".maincontent");
 
 
 const newArticle = document.createElement('article');
 newArticle.classList.add('SkyTower');
 newArticle.setAttribute('id','White');
 newArticle.innerHTML = content;
 
 main.append(newArticle);
 
 //main.innerHTML = content;
 
 
 
 // const listItem = document.querySelector("ul li:first-child");
 
 // listItem.classList.toggle("webdev");
 
 // const backpackTitle = document.querySelector('h1').className;
 // document.querySelector('img').setAttribute('alt', backpackTitle);