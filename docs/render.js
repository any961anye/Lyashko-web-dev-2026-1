"use strict";

books.sort((a, b) => a.name.localeCompare(b.name));

const template = document.getElementById("book-template");

books.forEach(book => {
    const container = document.querySelector(`.books[data-category="${book.category}"]`);

    const card = template.content.cloneNode(true);

    card.querySelector(".book-card").dataset.book = book.keyword;

    const img = card.querySelector("img");
    img.src = book.image;
    img.alt = `Обложка книги «${book.name}»`;

    card.querySelector(".price").textContent = `${book.price} ₽`;
    card.querySelector(".title").textContent = book.name;
    card.querySelector(".pages").textContent = book.count;

    container.append(card);
});