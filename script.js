let library = [];
const add = document.querySelector('.add');
const addBook = document.getElementById('add-book');
const submit = document.querySelector('.submit');
const popup = document.querySelector('.form-popup');
const bookContainer = document.querySelector('.book-container');
addBook.addEventListener('click', function() {
    popup.style.display = "flex";
});
submit.addEventListener('click', function() {
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    let beenRead = document.querySelectorAll('input[name="been-read"]');
    let read = beenRead[0].checked ? true : false;
    const book = new Book(title, author, pages, read, library.length);
    library.push(book);
    createBookElement(book);
    popup.style.display = "none";
    add.style.display = "flex";
    document.querySelector("form").reset();
    console.log(library)
});

function Book(title, author, pages, read, ind) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.ind = ind;
    
}
function createBookElement(book) {
    const container = document.createElement('div')
    container.id = `book${book.ind}`
    container.classList.add('book');
    const readButton = document.createElement('button');
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove Book';

    keys = Object.keys(book);
    keys.forEach((key, i) => {
        if (i < 3) {
            const newElement = document.createElement('div');
            newElement.textContent = `${capitalize(key)}: ${book[key]}`;
            container.appendChild(newElement)
        }
    });
    let readClass = book['read'] ? 'read' : 'not-read';
    readButton.classList.add(readClass);
    readButton.textContent = capitalize(readClass);
    container.appendChild(readButton);
    container.appendChild(removeButton);
    readButton.addEventListener('click', function() {
        book.toggleReadStatus();
        newStatus = book.read
        newClass = newStatus ? 'read' : 'not-read';
        this.removeAttribute("class");
        this.classList.add(newClass);
        this.textContent = capitalize(newClass);
    })
    removeButton.addEventListener('click', function() {
        document.getElementById(`book${book['ind']}`).remove();
    })
    bookContainer.appendChild(container);
}
function capitalize(word) {
    word = word.split('')
    word[0] = word[0].toUpperCase();
    return word.join('');
}
Book.prototype.toggleReadStatus = function() {
    this.read = !this.read;
}
