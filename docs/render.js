"use strict";

function renderBooks() {
    const template = document.getElementById("book-template");
    const allContainers = document.querySelectorAll(".books");

    allContainers.forEach(container => container.innerHTML = "");

    books.sort((a, b) => a.name.localeCompare(b.name));

    books.forEach(book => {
        const container = document.querySelector(`.books[data-category="${book.category}"]`);
        
        if (!container) return;

        const card = template.content.cloneNode(true);

        const cardEl = card.querySelector(".book-card");
        cardEl.dataset.book = book.keyword;
        cardEl.dataset.kind = book.kind;

        const img = card.querySelector("img");
        img.src = book.image;
        img.alt = `Обложка книги «${book.name}»`;

        card.querySelector(".price").textContent = `${book.price} ₽`;
        card.querySelector(".title").textContent = book.name;
        card.querySelector(".pages").textContent = book.count;

        container.append(card);
    });

    initInteractivity();
}