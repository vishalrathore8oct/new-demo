const books = [
    { title: "Book One", author: "john doe", year: 2008 },
    { title: "Book Two", author: "jane doe", year: 2012 },
    { title: "Book Three", author: "sam smith", year: 2015 },
    { title: "Book Four", author: "mary jane", year: 2009 }
];

const filteredBooks = books
    .filter(book => book.year > 2010)
    .map(book => ({ ...book, author: book.author.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') }));

console.log(filteredBooks);
