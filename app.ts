import { Category } from './enums';
import { Book, Logger, Author, Librarian, Magazine } from './interfaces';
import { UniversityLibrarian, ReferenceItem } from './classes';
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
//let [book1, book2] = util.GetAllBooks();
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