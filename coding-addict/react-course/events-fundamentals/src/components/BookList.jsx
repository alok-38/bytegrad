import Book from "./Book";
import EventExamples from "./EventExamples";
import books from "../books"; // Assuming this file contains an array of book objects

export default function BookList() {
  return (
    <section>
      <EventExamples />
      {books.map((book) => (
        <Book key={book.id} {...book} />
      ))}
    </section>
  );
}
