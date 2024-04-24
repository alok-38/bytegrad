export default function Image({ img, title }) {
	return (
		<div className="image-container">
			<img src={img} alt={title} className="book-image w-72" />
		</div>
	);
}