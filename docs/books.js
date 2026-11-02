"use strict";

const books = [
    {
        keyword: 'master',
        name: 'Мастер и Маргарита',
        price: 750,
        category: 'roman',
        kind: 'classic',
        count: '512 стр.',
        image: 'https://imo10.labirint.ru/books/944380/cover.jpg/242-0'
    },
    {
        keyword: 'crime',
        name: 'Преступление и наказание',
        price: 580,
        category: 'roman',
        kind: 'classic',
        count: '576 стр.',
        image: 'https://imo10.labirint.ru/books/546838/cover.jpg/484-0'
    },
    {
        keyword: '1984',
        name: '1984',
        price: 620,
        category: 'roman',
        kind: 'modern',
        count: '320 стр.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTctNNdSeVrOEtxKq1pR7PPm8dujsE83kNhvwiM8Q7M6w&s=10'
    },
    {
        keyword: 'solzhenitsyn',
        name: 'Один день Ивана Денисовича',
        price: 450,
        category: 'roman',
        kind: 'modern',
        count: '160 стр.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwSyXGHKFga4lqdaaOtCmtDK1doDo3DdCtq1uYINV_2Q&s=10'
    },
    {
        keyword: 'war-and-peace',
        name: 'Война и мир. Том 1',
        price: 980,
        category: 'roman',
        kind: 'historical',
        count: '1300 стр.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD_KWgfo1fMoKgizi2ISiEVEd_R0rOvCxoaJjcM0Q68w&s=10'
    },
    {
        keyword: 'quiet-don',
        name: 'Тихий Дон. Том 1',
        price: 890,
        category: 'roman',
        kind: 'historical',
        count: '800 стр.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS34A7TxXxzegTmI5SHAkH87CYXevyUL6nTDTQkEz7jSg&s=10'
    },

    {
        keyword: 'harry',
        name: 'Гарри Поттер и философский камень',
        price: 880,
        category: 'fantasy',
        kind: 'magic',
        count: '432 стр.',
        image: 'https://imo10.labirint.ru/books/424618/cover.jpg/484-0'
    },
    {
        keyword: 'lord-of-rings',
        name: 'Властелин колец',
        price: 1200,
        category: 'fantasy',
        kind: 'magic',
        count: '1200 стр.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrAypxI72NzHp32oILyBI0rJxrDUIfhTrIkdir_9V_1g&s=10'
    },
    {
        keyword: 'dune',
        name: 'Дюна',
        price: 1110,
        category: 'fantasy',
        kind: 'space',
        count: '704 стр.',
        image: 'https://imo10.labirint.ru/books/815471/cover.jpg/484-0'
    },
    {
        keyword: 'maze',
        name: 'Бегущий в лабиринте',
        price: 950,
        category: 'fantasy',
        kind: 'dystopia',
        count: '448 стр.',
        image: 'https://imo10.labirint.ru/books/453008/cover.jpg/484-0'
    },
    {
        keyword: 'hunger-games',
        name: 'Голодные игры',
        price: 870,
        category: 'fantasy',
        kind: 'dystopia',
        count: '384 стр.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGH2ECBqGJ55JKcP5UE4c5l0OA_FPXe-qKyultoMh31g&s=10'
    },
    {
        keyword: 'martian',
        name: 'Марсианин',
        price: 760,
        category: 'fantasy',
        kind: 'space',
        count: '352 стр.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3NSubQW-nsrmxbPsuTp_PiPoqNpeVwYYuUblBcjOJyQ&s=10'
    },

    {
        keyword: 'sherlock',
        name: 'Шерлок',
        price: 1500,
        category: 'detective',
        kind: 'classic',
        count: '272 стр.',
        image: 'https://imo10.labirint.ru/books/807354/cover.jpg/1000-0'
    },
    {
        keyword: 'murder-orient',
        name: 'Убийство в «Восточном экспрессе»',
        price: 670,
        category: 'detective',
        kind: 'classic',
        count: '288 стр.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyCHsoo_sINjoWNS9mMc8iBD145grBognCMl1mxUtEjA&s'
    },
    {
        keyword: 'shutter',
        name: 'Остров проклятых',
        price: 460,
        category: 'detective',
        kind: 'thriller',
        count: '352 стр.',
        image: 'https://imo10.labirint.ru/books/920472/cover.jpg/484-0'
    },
    {
        keyword: 'gone-girl',
        name: 'Исчезнувшая',
        price: 720,
        category: 'detective',
        kind: 'thriller',
        count: '416 стр.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3Amee492TFiXL1MAApVeD1lJKioQsNCJOCQlyXjPCzw&s=10'
    },
    {
        keyword: 'ten',
        name: 'Десять негритят',
        price: 363,
        category: 'detective',
        kind: 'psycho',
        count: '288 стр.',
        image: 'https://imo10.labirint.ru/books/707251/cover.jpg/484-0'
    },
    {
        keyword: 'silence',
        name: 'Молчание ягнят',
        price: 680,
        category: 'detective',
        kind: 'psycho',
        count: '400 стр.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJlI4ZJ8UP32ulJN2M_9mJQhEBRoC_q10BSYhrUMvIgQ&s=10'
    },

    {
        keyword: 'little-prince',
        name: 'Маленький принц',
        price: 490,
        category: 'children',
        kind: 'tale',
        count: '160 стр.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWTxaMmL1hmkV4ob2LU1ZR89wzdA5utvaufQgLK1VW4g&s=10'
    },
    {
        keyword: 'alice',
        name: 'Алиса в Стране чудес',
        price: 550,
        category: 'children',
        kind: 'tale',
        count: '240 стр.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNBhKGLdP5eI74xlEPi1sje0La4CmoYO60znGjXHg9bw&s=10'
    },
    {
        keyword: 'deniska',
        name: 'Денискины рассказы',
        price: 420,
        category: 'children',
        kind: 'story',
        count: '320 стр.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxCP_f3jedwuH3Bhu-WOU88r3Hg3pmTuT-sp3bnxormw&s=10'
    },
    {
        keyword: 'neznayka',
        name: 'Приключения Незнайки',
        price: 480,
        category: 'children',
        kind: 'story',
        count: '280 стр.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuLyb8QGjCJbga8MD0SuRHaHDqxGtlpEDSHJVt5sAxbg&s=10'
    },
    {
        keyword: 'chukovsky',
        name: 'Сказки Чуковского',
        price: 380,
        category: 'children',
        kind: 'poem',
        count: '190 стр.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIRCf7AzypPz7jA8AKE9UNnjZ_2aiYBNBTYcTY-CPn1A&s=10'
    },
    {
        keyword: 'marshak',
        name: 'Стихи Маршака',
        price: 360,
        category: 'children',
        kind: 'poem',
        count: '150 стр.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt3gbIO6nVCViOfH7pw_ajVeYU-fcg8jNY3Pzoc5aW2Q&s=10'
    },

    {
        keyword: 'hawking',
        name: 'Краткая история времени',
        price: 890,
        category: 'science',
        kind: 'physics',
        count: '256 стр.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQivZdlJTArmIJ8VVeNJm-cYdbiMi4nV-bTKfcxepL2xA&s=10'
    },
    {
        keyword: 'einstein',
        name: 'Эволюция физики',
        price: 760,
        category: 'science',
        kind: 'physics',
        count: '320 стр.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgsYjh1mWihbWlN0AU8bJbY7RSBroWJyRFllf_uA0Wng&s=10'
    },
    {
        keyword: 'sapolsky',
        name: 'Записки примата',
        price: 820,
        category: 'science',
        kind: 'biology',
        count: '448 стр.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3eWQWYge3BWfety7gmsISENB_ACfbxNiQ1b45G9Ywpw&s=10'
    },
    {
        keyword: 'dawkins',
        name: 'Эгоистичный ген',
        price: 780,
        category: 'science',
        kind: 'biology',
        count: '384 стр.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPUSt-hYE3Kl_fpB2hR-BAB08urBSQyThc6n67-X0XBQ&s=10'
    },
    {
        keyword: 'harari',
        name: 'Sapiens. Краткая история человечества',
        price: 950,
        category: 'science',
        kind: 'history',
        count: '520 стр.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtP5lKEQhR1CNjttmuo09x3COOwHmjTyoIcnj7vB9Ybg&s=10'
    },
    {
        keyword: 'diamond',
        name: 'Ружья, микробы и сталь',
        price: 830,
        category: 'science',
        kind: 'history',
        count: '480 стр.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0iKIDHkSBcd1RPS8c5o-sHYAPsIbbJ5iTfiIswOMS3Q&s=10'
    }
];
