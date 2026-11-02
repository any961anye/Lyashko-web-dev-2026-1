"use strict";

const selected = {
    roman: null,
    fantasy: null,
    detective: null,
    children: null,
    science: null
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

const filterButtons = document.querySelectorAll(".filters button");

filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        const section = button.closest("section");
        const kind = button.dataset.kind;
        const cards = section.querySelectorAll(".book-card");
        const wasActive = button.classList.contains("active");

        section.querySelectorAll(".filters button").forEach(b => b.classList.remove("active"));

        if (wasActive) {
            cards.forEach(card => card.hidden = false);
            return;
        }

        button.classList.add("active");

        cards.forEach(card => {
            card.hidden = card.dataset.kind !== kind;
        });
    });
});

const orderForm = document.querySelector(".order-form");

const validCombos = [
    ["roman", "fantasy", "detective", "children"],
    ["roman", "fantasy"],
    ["roman", "detective", "children"],
    ["fantasy", "detective"],
    ["fantasy", "children"]
];

orderForm.addEventListener("submit", (event) => {
    const chosen = [];
    for (const category in selected) {
        if (selected[category] && category !== "science") {
            chosen.push(category);
        }
    }

    if (chosen.length === 0 && !selected["science"]) {
        event.preventDefault();
        showNotification("Ничего не выбрано. Выберите книги для заказа");
        return;
    }

    if (chosen.length === 0 && selected["science"]) {
        event.preventDefault();
        showNotification("Выберите роман или фантастику");
        return;
    }

    const isValid = validCombos.some(combo => {
        return combo.length === chosen.length && combo.every(cat => chosen.includes(cat));
    });

    if (isValid) return;

    event.preventDefault();
    
    const has = cat => chosen.includes(cat);
    let message = "";

    if (!has("fantasy") && !has("roman")) {
        message = "Выберите роман или фантастику";
    } else if (!has("fantasy")) {
        message = "Выберите фантастику";
    } else if (has("detective") && !has("roman") && !has("fantasy")) {
        message = "Выберите роман или фантастику";
    } else if (has("children") && !has("fantasy") && !has("roman")) {
        message = "Выберите роман или фантастику";
    } else {
        message = "Выбранный набор не соответствует ни одному варианту. Проверьте состав заказа.";
    }

    showNotification(message);
});

function showNotification(text) {
    const old = document.querySelector(".notification");
    if (old) old.remove();

    const notif = document.createElement("div");
    notif.className = "notification";
    
    const p = document.createElement("p");
    p.textContent = text;
    
    const btn = document.createElement("button");
    btn.textContent = "Окей";
    
    btn.addEventListener("click", () => {
        notif.remove();
    });
    
    notif.append(p, btn);
    document.body.append(notif);
}