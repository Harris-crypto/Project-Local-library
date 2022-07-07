function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id);
}

function findBookById(books, id) {
  return books.find((book) => book.id === id);
}

function partitionBooksByBorrowedStatus(books) {
  const bookByBorrowedStatus = [];
 //.find// works here too instead of .some()
  let checkedOutBook = books.filter((book) =>
    book.borrows.some((borrow) => borrow.returned === false)
  );
  let returnedBook = books.filter((book) =>
    book.borrows.every((borrow) => borrow.returned === true)
  );

  bookByBorrowedStatus.push(checkedOutBook, returnedBook);

  return bookByBorrowedStatus;
}

function getBorrowersForBook({ borrows }, accounts) {
  return borrows
    .map((borrow) => {
      const account = accounts.find((account) => account.id === borrow.id);

      return { ...account, ...borrow };
    })
    .slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
