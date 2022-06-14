function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        const hasRead = read ? 'has read' : 'not read yet';
        return `${title} by ${author}, ${pages} pages, ${hasRead}`
    }
}
const hobbit = new Book('The Hobbit', 'J.R.R Tolkien', 295, false);
console.log(hobbit.info())