import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector("div.gallery");
const galleryList = createGalleryItems(galleryItems);

function createGalleryItems(galleryItems) {
	return galleryItems
		.map(({ preview, original, description }) => {
			return `
        <div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="Image ${description}"
                />
            </a>
        </div>
        `;
		})
		.join("");
}

galleryContainer.insertAdjacentHTML("beforeend", galleryList);

galleryContainer.addEventListener("click", onGalleryContainerClick);

function onGalleryContainerClick(e) {
	if (!e.target.classList.contains("gallery__image")) {
		return;
	}
	e.preventDefault();
	const instance = basicLightbox.create(`<img
                    src="${e.target.dataset.source}"
                    />`);
	instance.show();

	galleryContainer.addEventListener("keydown", e => {
		if (e.code === "Escape") {
			instance.close();
		}
	});
}
