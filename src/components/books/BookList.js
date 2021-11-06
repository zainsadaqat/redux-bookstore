import { useSelector } from 'react-redux';
import Book from './Book';

const BookList = () => {
  const books = useSelector((state) => state.booksReducer);
  const URL =
    'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/';
  const ID = 'skMgJnCkDOcgGUzY0dLE';
  const ENDPOINT = `${URL}${ID}/books`;

  return (
    <ul>
      {books.map((book) => (
        <div key={book.id}>
          <article>
            <Book id={book.id} title={book.title} author={book.author} />
          </article>
        </div>
      ))}
    </ul>
  );
};

export default BookList;
