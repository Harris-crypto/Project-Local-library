function getTotalBooksCount(books) {
  return books.length;
}
function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  return books.filter((book) =>
    book.borrows.find((borrow) => borrow.returned === false)
  ).length;

  /*
- An array of books.

It returns a _number_ that represents the number of books _that are currently checked out of the library._ This number can be found by looking at the first transaction object in the `borrows` array of each book. If the transaction says the book has not been returned (i.e. `returned: false`), the book is currently being borrowed.

*/
}

//Helper function//
function sortingBooks(toBeSorted) {
  toBeSorted.sort((objA, objB) => objB.count - objA.count);
  toBeSorted.splice(5);
  return toBeSorted;
}

function getMostCommonGenres(books) {
  const mostCommonGenres = books.reduce((genres, book) => {
    const genreObject = genres.find(
      (thisGenre) => thisGenre.name === book.genre
    );
    !genreObject
      ? genres.push({
          name: book.genre,
          count: 1,
        })
      : genreObject.count++;
    return genres;
  }, []);
  sortingBooks(mostCommonGenres);
  return mostCommonGenres;
}

function getMostPopularBooks(books) {
  const popularBooks = books.map((book) => {
    return { name: book.title, count: book.borrows.length };
  });
  popularBooks.sort((bookA, bookB) => bookB.count - bookA.count);
  popularBooks.splice(5);
  return popularBooks;
}

function getMostPopularAuthors(books, authors) {
  const popularAuthors = authors.map((author) => {
    const authorName = `${author.name.first} ${author.name.last}`;
    const booksBy = books.filter((book) => book.authorId === author.id);
    const borrows = booksBy.reduce(
      (total, book) => total + book.borrows.length,
      0
    );
    const authorInfo = {
      name: authorName,
      count: borrows,
    };
    return authorInfo;
  });
  popularAuthors.sort((authA, authB) => authB.count - authA.count);
  popularAuthors.splice(5);
  return popularAuthors;
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
