import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryBox = document.querySelector("ul.gallery");

function galleryTemplate(galleryItems) {
	return galleryItems
		.map(({ preview, original, description }) => {
			return `
            <li>
                <a class="gallery__item" href="${original}">
                    <img class="gallery__image" src="${preview}" alt="${description}" />
                </a>
            </li>
            `;
		})
		.join("");
}

galleryBox.innerHTML = galleryTemplate(galleryItems);

const simpleLightbox = new SimpleLightbox("ul.gallery a", {
	captionsData: "alt",
	captionsDelay: 250,
});
