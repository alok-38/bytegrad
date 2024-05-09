import { books } from "../books";
import Book from "./Book";

export default function BookList() {
  return (
    <div>
      <h1>amazon best sellers</h1>
      <section className="booklist">
        {books.map((book) => {
          return <Book {...book} key={book.id} />;
        })}
      </section>
    </div>
  );
}
