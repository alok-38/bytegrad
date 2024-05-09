export default function Header({title}) {
	return (
		<h1>{title ? title : "From Next.js back to React.js!"}</h1>
	)
}