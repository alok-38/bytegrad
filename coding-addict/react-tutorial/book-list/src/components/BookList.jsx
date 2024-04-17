import Book from "./Book";
import '../App.css';
import { books } from "./books";

export default function BookList() {
    return (
        <div>
            <h1>Amazon best sellers</h1>
            <section>
                {books.map((book) => {
                    return <Book {...book} key={book.id}></Book>
                })}
            </section>
        </div>
    );
}