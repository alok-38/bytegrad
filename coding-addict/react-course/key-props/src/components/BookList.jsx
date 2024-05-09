import books from "../books";
import Book from "./Book";

export default function BookList() {
  return (
    <section>
      {books.map((book) => {
        console.log(book);
        const { img, title, author, id } = book;
        return <Book book={book} key={id} />;
      })}
    </section>
  );
}
