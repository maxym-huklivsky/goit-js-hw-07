import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");

const markup = galleryItems
  .map(({ preview, original, description }) => {
    return `
  <div class="gallery__item">
    <a class="gallery__link" href="${original}">
     <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
  </div>
  `;
  })
  .join("");

galleryEl.insertAdjacentHTML("beforeend", markup);

galleryEl.addEventListener("click", onGetIncreasedPic);

function onGetIncreasedPic(e) {}
