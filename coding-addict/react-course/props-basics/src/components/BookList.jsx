import { books } from "../books";
import Book from "./Book";

export default function BookList() {
  return (
    <div>
      <h1 className="my-10 text-center uppercase">react best sellers</h1>
      <section className="booklist flex justify-center text-center leading-10">
        {books.map((book) => {
          return <Book {...book} key={book.id} />;
        })}
      </section>
    </div>
  );
}
