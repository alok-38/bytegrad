import Title from './Title';
import Image from './Image';
import Author from './Author';
import books from '../books';

export default function Book() {
	return (
		<div className='flex flex-wrap text-center justify-center gap-10 '>
			{books.map((book) => (
				<div className='bg-white p-7 rounded-lg' key={book.id}>
					<Image img={book.img} />
					<Title title={book.title} />
					<Author author={book.author} />
				</div>
			))}
		</div>
	);
}