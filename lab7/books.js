"use strict";

let books = [];

async function loadBooks() {
    const baseUrl = "https://openlibrary.org/search.json?limit=6&fields=title,first_publish_year,cover_i,key&q=";
    
    const queries = {
        roman: { q: "subject:fiction", kinds: ["classic", "modern", "historical"] },
        fantasy: { q: "subject:fantasy", kinds: ["magic", "space", "dystopia"] },
        detective: { q: "subject:detective", kinds: ["classic", "thriller", "psycho"] },
        children: { q: "subject:children", kinds: ["tale", "story", "poem"] },
        science: { q: "subject:science", kinds: ["physics", "biology", "history"] }
    };

    try {
        const requests = Object.keys(queries).map(category => {
            const queryData = queries[category];
            return fetch(`${baseUrl}${queryData.q}`)
                .then(res => res.json())
                .then(data => ({ category, kinds: queryData.kinds, docs: data.docs }));
        });

        const results = await Promise.all(requests);

        books = [];

        results.forEach(result => {
            result.docs.forEach((item, index) => {
                const kind = result.kinds[index % result.kinds.length];

                books.push({
                    keyword: item.key ? item.key : `${result.category}-${index}`,
                    name: item.title || "Без названия",
                    price: Math.floor(Math.random() * 500) + 300,
                    category: result.category,
                    kind: kind,
                    count: item.first_publish_year ? `${item.first_publish_year} г.` : "Год неизвестен",
                    image: item.cover_i ? `https://covers.openlibrary.org/b/id/${item.cover_i}-M.jpg` : "https://via.placeholder.com/150"
                });
            });
        });

       
        renderBooks();
        initInteractivity();

    } catch (error) {
        console.error("Ошибка загрузки книг:", error);
    }
}