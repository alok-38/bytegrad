import Book from "./Book";
import { books } from "./books";

export default function BookList() {
    return (
        <div>
            <h1 className="text-center my-10">Amazon best sellers</h1>
            <section className="flex text-center mx-auto w-[70%]">
                {books.map((book) => {
                    return <Book {...book} key={book.id}></Book>
                })}
            </section>
        </div>
    );
}