import Author from "./Author";
import Title from "./Title";
import Image from "./Image";

export default function Book() {
	return (
		<article>
			<Image />
			<Title />
			<Author />
		</article>
	);
}