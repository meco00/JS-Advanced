class LibraryCollection
{
    constructor(capacity)
    {
        this.capacity=capacity;
        this.books=[];
    }

    addBook (bookName, bookAuthor)
    {
        if(this.capacity==this.books.length)
        {
            throw Error('Not enough space in the collection.');
        }

        const book={
            bookName,
            bookAuthor,
            payed:false
        };

        this.books.push(book);

        return `The ${bookName}, with an author ${bookAuthor}, collect.`;

    }
    payBook(bookName)
    {
        const currentBook=this.books.find(x=>x.bookName==bookName);

        if(currentBook==undefined)
        {
            throw Error(`${bookName} is not in the collection.`);
        }
        if(currentBook.payed == true)
        {
            throw Error(`${bookName} has already been paid.`);
        }

        currentBook.payed = true;

        return `${bookName} has been successfully paid.`;

    }

    removeBook(bookName)
    {
        const currentBook=this.books.find(x=>x.bookName==bookName);
        if(currentBook==undefined)
        {
            throw Error('The book, you\'re looking for, is not found.');
        }
        if(currentBook.payed == false)
        {
            throw Error(`${bookName} need to be paid before removing from the collection.`);
        }

        const indexOfBook=this.books.indexOf(currentBook);

        this.books.splice(indexOfBook,1);

        return `${bookName} remove from the collection.`;


    }
    getStatistics(bookAuthor)
    {
        const result=[];
        if(bookAuthor!= undefined)
        {
            const currentAuthorBooks= this.books.filter(x=>x.bookAuthor==bookAuthor);

            if(currentAuthorBooks.length==0)
            {
                throw Error(`${bookAuthor} is not in the collection.`);
            }

            for (const book of currentAuthorBooks) {

                result.push(`${book.bookName} == ${bookAuthor} - ${book.payed == true ? 'Has Paid':'Not Paid'}.`);
            }

        }
        else{

            result.push(`The book collection has ${ this.capacity - this.books.length } empty spots left.`);

            const sortedBookCollection=this.books.sort((a,b)=> a.bookName.localeCompare(b.bookName));

            for (const book of sortedBookCollection) {

                result.push(`${book.bookName} == ${book.bookAuthor} - ${book.payed == true ? 'Has Paid':'Not Paid'}.`);
            }

        }

        return result.join('\n');

    }



}


const library = new LibraryCollection(5)
library.addBook('B', 'James Joyce');
library.addBook('In Search of Lost Time', 'Marcel Proust');
library.addBook('A', 'Miguel de Cervantes');
library.payBook('A');
console.log(library.getStatistics());


