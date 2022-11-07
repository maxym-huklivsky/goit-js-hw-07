import { galleryItems } from "./gallery-items.js";

const galleryEl = document.querySelector(".gallery");

function createGalleryMarkup(arr) {
  return arr
    .map(({ preview, original, description }) => {
      return `
    <li class="gallery__item">
    <a class="gallery__link" href="${original}">
		<img
			class="gallery__image"
			src="${preview}"
			alt="${description}"
	 	/>
  	</a>
    </li>
  `;
    })
    .join("");
}

galleryEl.insertAdjacentHTML("beforeend", createGalleryMarkup(galleryItems));

new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
