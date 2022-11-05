import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");

const markup = galleryItems
  .map(({ preview, original, description }) => {
    return `
    <div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>
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

  const instance = basicLightbox.create(
    `<img src="${e.target.dataset.source}" alt='${e.target.alt}'>`
  );

  instance.show();

  document.addEventListener(
    "keydown",
    (e) => {
      if (e.code !== "Escape") {
        return;
      }

      instance.close();
    },
    { once: true }
  );
}
