import { Category } from './enums';
import { Book, Logger, Author, Librarian, Magazine } from './interfaces';
import { UniversityLibrarian, ReferenceItem, Employee, Researcher } from './classes';
import * as util from './lib/utilityFunctions';

// function PrintBookInfo(item: Book): void {
//     console.log(`${item.title} was authored by ${item.author}`);
// }
function PrintBookInfo({title: bookTitle, author:bookauthor}: Book): void {
    console.log(`${bookTitle} was authored by ${bookauthor}`);
}

function LogFavoriteBooks([book1, book2, ...others]: Book[]) {
    PrintBookInfo(book1);
    PrintBookInfo(book2);
    console.log(others);
}



/****************************************/
//Destructuring Arrays and Objects
/****************************************/
/****************************************/
let [book1, book2] = util.GetAllBooks();
//
// PrintBookInfo(book1);
// PrintBookInfo(book2);

// LogFavoriteBooks(util.GetAllBooks());

// let {title, author} = book1;
// console.log(title);
// console.log(author);
//
// let {title: booktitle, author: bookauthor} = book1;
// console.log(booktitle);
// console.log(bookauthor);
/****************************************/


/****************************************/
//Using the Spread Operator
/****************************************/
/****************************************/
// let schoolBooks: Book[]  = [
//     { id: 10, title: 'The Greate Gatsby', author: 'F. Scott Fitzgerald', available: true, category: Category.Fiction},
//     { id: 11, title: 'Crime and Punishment', author: 'Fyod Dostoevsky', available: true, category: Category.Fiction},
//     { id: 12, title: 'Clear Light of Day', author: 'Anita Desai', available: true, category: Category.Fiction},
// ];
//
// let booksRead: Book[] = util.GetAllBooks();
// booksRead.push(...schoolBooks);
// //console.log(booksRead);
//
// let poets: string[] = ['Shelley', 'Collins', 'Hughes'];
// let authors: string[] = ['Tolstoy', 'Fitzgerald', ...poets];
//
// let newAuthors: string[] = [...poets, ...authors]
//
// console.log(authors);
/****************************************/


/****************************************/
//Creating and Using Tuple Types
/****************************************/
/****************************************/
// let catalogLocation: [string, Book] = ['A 123.456', book1];
//
// console.log(catalogLocation);

// interface KeyValuePair<K, V> extends Array<K | V> {
//     0: K;
//     1: V;
// }
//
// let catalogLocation: KeyValuePair<string, Book> = ['A 123.456', book1];
/****************************************/


/****************************************/
//Using Union and Intersection Types
/****************************************/
/****************************************/
// let allBooks: Book[] = util.GetAllBooks();
// let allMagazines: Magazine[]= util.GetAllMagazines();
//
// let readingMaterial: Book | Magazine = allBooks[0];
// readingMaterial = allMagazines[0];
//
// function PrintTitle(item: Book | Magazine): void {
//     console.log(item.title);
// }
//
// PrintTitle(allBooks[0]);
// PrintTitle(allMagazines[0]);

// let serialNovel: Book & Magazine = {
//     id: 100,
//     title: 'The Gradual Tale',
//     author: 'Occasional Pen',
//     available: true,
//     category: Category.Fiction,
//     publisher: 'Serial Press'
// }
/****************************************/


/****************************************/
//Creating a Mixin
/****************************************/
/****************************************/
// function applyMixins(derivedCtor: any, baseCtors: any[]) {
//     baseCtors.forEach(baseCtor => {
//         Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
//             derivedCtor.prototype[name] = baseCtor.prototype[name];
//         });
//     })
// }
//
// applyMixins(UniversityLibrarian, [Employee, Researcher]);
//
// let newLibrarian = new UniversityLibrarian();
// newLibrarian.doResearch('Economics');
/****************************************/