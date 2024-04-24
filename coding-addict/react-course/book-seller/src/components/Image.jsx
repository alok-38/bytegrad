import book1 from '../assets/images/book-1.jpg'

export default function Image() {
	return (
		<img className='w-72 mb-5 object-cover' src={book1} alt='book-1'></img>
	);
}