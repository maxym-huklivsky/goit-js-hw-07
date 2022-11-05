import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryEl = document.querySelector(".gallery");

const markup = galleryItems
  .map(({ preview, original, description }) => {
    return `
	<a class="gallery__item" href="${original} data-lightbox='lbox'">
		<img
			class="gallery__image"
			src="${preview}"
			alt="${description}"
	 	/>
  	</a>
  `;
  })
  .join("");

galleryEl.insertAdjacentHTML("beforeend", markup);

galleryEl.addEventListener("click", onOpenIncreasedPic);

function onOpenIncreasedPic(e) {
  if (!e.target.classList.contains("gallery__image")) {
    return;
  }

  e.preventDefault();
}
