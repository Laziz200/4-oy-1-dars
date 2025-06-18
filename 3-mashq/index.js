class Library {
    constructor(name) {
        this.name=name;
    }
    getLibraryName(){
        return `Kutubxona: ${this.name}`;
    }

    static sortByPrice(books){
        return books.sort((a, b) => a.price - b.price);
    }
    static isBookavailable(book){
        if (book.available==true) {
            return `${book.title} mavjud`;
        }
        else{
            return `${book.title} mavjud emas`;
        }
    }
    static totalprice(books){
        return books.reduce((total, book)=>total+book.price,0);
    }
}
const book1={title:"otgan kunlar", price:15000,available:true};
const book2={title:"alpomish", price:20000,available:false};
const book3={title:"xamza", price:10000,available:true};
const books=[book1,book2,book3];

console.log(Library.sortByPrice(books).map(book => `${book.title}: ${book.price}`));
console.log(Library.isBookavailable(book1)); 
console.log(Library.isBookavailable(book2)); 
console.log(Library.totalprice(books));

const myLibrary = new Library("Milliy Kutubxona");
console.log(myLibrary.getLibraryName());
