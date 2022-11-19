const book1 = {
 title:'a',
 author:'b',
 pages:24, 
}

const book2 = {
    title:'d',
    author:'ba',
    pages:24, 
   }

const book3 = {
    title:'a',
    author:'baa',
    pages:24, 
   }



myLibrary = [book1,book2]

function pushBookToLibrary(book) {
    if (myLibrary.some(e => e.title === book.title)){
      console.log('Exists');  
    }else myLibrary.push(book);
    }

console.log(myLibrary);

pushBookToLibrary(book3);

console.log(myLibrary);


var myArray = ["one", "two", "three"];
var cloneArray = myArray.splice(1, 1);

console.log(myArray);
console.log(cloneArray);