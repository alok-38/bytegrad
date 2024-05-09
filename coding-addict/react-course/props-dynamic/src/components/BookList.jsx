import firstBook from "../FirstBook";
import secondBook from "../SecondBook";
import Book from "./Book";

export default function BookList() {
  return (
    <section>
      <Book
        author={firstBook.author}
        title={firstBook.title}
        img={firstBook.img}
      />
      <Book
        author={secondBook.author}
        title={secondBook.title}
        img={secondBook.img}
      />
    </section>
  );
}
