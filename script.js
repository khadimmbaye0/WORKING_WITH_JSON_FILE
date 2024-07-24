const displayBooks = [];

function fetchBooks() {
    fetch('file.json') 
    .then(response => response.json())
    .then(data => {
        data.forEach(book => {
            console.log('List of Books:');
            console.log(`Title: ${book.title}`);
            console.log(`Author: ${book.author}`);
            console.log(`Publication Date: ${book.publicationDate}`);
            console.log("==========================================");
            displayBooks.push(`<p>Title: ${book.title}</p>
                 <p>Author: ${book.author}</p>
                 <p>Publication Date: ${book.publicationDate}</p><hr>`);
        });
        document.getElementById('bookItem').innerHTML = displayBooks.join();
    })
}

fetchBooks();
