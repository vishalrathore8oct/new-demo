function arrangeBooks(books, callback) {
    const titles = books.map(book => book.title);
    titles.sort();
    callback(titles);
}

function logTitles(titles) {
    console.log("Book titles in alphabetical order:", titles);
}

// Example usage:
const books = [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
    { title: "Moby Dick", author: "Herman Melville", year: 1851 },
    { title: "1984", author: "George Orwell", year: 1949 }
];

arrangeBooks(books, logTitles); // "Book titles in alphabetical order: ['1984', 'Moby Dick', 'The Great Gatsby']"
