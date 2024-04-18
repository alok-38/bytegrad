import { books } from '../scripts/books.js';
import Book from '../scripts/Book.jsx';
import Header from '../components/Header';

export default function BookList() {
    return (
       <>
         <Header />
            <section className='flex items-center justify-center text-center leading-10 flex-wrap'>
                {books.map((book) => {
                    return <Book {...book} key={book.id} />
                })}
            </section>
       </>
    );
}