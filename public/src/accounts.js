function findAccountById(accounts, id) {
return accounts.find((account) => account.id === id);
}

function sortAccountsByLastName(accounts) {

 return accounts.sort((accountA, accountB) => accountA.name.last.toLowerCase() > accountB.name.last.toLowerCase() ? 1 : -1 )
}

function getTotalNumberOfBorrows(account, books) {
/* - An account object.
  - An array of all book objects.
  
  It returns a _number_ that represents the number of times the account's ID appears in any book's `borrows` array.*/

return books.filter((book) => book.borrows.find((borrow) => borrow.id === account.id)).length

}

function getBooksPossessedByAccount(account, books, authors) {
/*
- An account object.
- An array of all book objects.
- An array of all author objects.

It returns an array of book objects, including author information, that represents all books _currently checked out_ by the given account. _Look carefully at the object below,_ as it's not just the book object; the author object is nested inside of it.
*/
  const accountBorrowedBooks = books.filter((book) => book.borrows.find((borrow) => borrow.id === account.id && borrow.returned === false))

      accountBorrowedBooks.forEach((book) => book.author = authors.find((author) => author.id === book.authorId))
     
return accountBorrowedBooks
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
