"use strict";

const selected = {
    roman: null,
    fantasy: null,
    detective: null
};

function updateOrder() {
    let total = 0;
    let hasAny = false;

    for (const category in selected) {
        const book = selected[category];

        if (book) {
            hasAny = true;
            total += book.price;
            document.getElementById(`${category}-output`).textContent =
                `${book.name} — ${book.price} ₽`;
            document.getElementById(`${category}-input`).value = book.keyword;
        } else {
            document.getElementById(`${category}-output`).textContent = "Книга не выбрана";
            document.getElementById(`${category}-input`).value = "";
        }
    }

    for (const category in selected) {
        document.getElementById(`${category}-block`).hidden = !hasAny;
    }

    document.getElementById("empty-message").hidden = hasAny;

    const totalOutput = document.getElementById("total-output");
    totalOutput.hidden = !hasAny;
    totalOutput.textContent = `Стоимость заказа: ${total} ₽`;
}

const buttons = document.querySelectorAll(".book-card button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const card = button.closest(".book-card");
        const keyword = card.dataset.book;
        const book = books.find(b => b.keyword === keyword);

        selected[book.category] = book;

        document.querySelectorAll(`.books[data-category="${book.category}"] .book-card.selected`)
            .forEach(c => c.classList.remove("selected"));
        card.classList.add("selected");

        updateOrder();
    });
});

updateOrder();

document.querySelector(".order-form").addEventListener("reset", () => {

    for (const category in selected) {
        selected[category] = null;
    }
   
    document.querySelectorAll(".book-card.selected")
        .forEach(card => card.classList.remove("selected"));

    updateOrder();
});