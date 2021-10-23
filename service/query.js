module.exports = {
    BOOK_UPDATE: "UPDATE publication.author set bookcount=?, died=? where ISBN =?",
    BOOK_DELETE: "DELETE from publication.author where ISBN=?",
    LEFT_JOIN: "select author.author_name, author.country, book.title, book.publisher from publication.author LEFT JOIN publication.book ON author.ISBN = book.ISBN"
}

