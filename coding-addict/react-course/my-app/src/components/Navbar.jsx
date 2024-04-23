import { Link } from 'react-router-dom';

function Navbar() {
	return (
		<nav>
			<ul>
				<li><Link className="App-link" to="/" >Home</Link></li>
				<li><Link className="App-link" to="https://react.dev/" >React</Link></li>
				<li><Link className="App-link" to="/about" >About</Link></li>
				<li><Link className="App-link" to="/contact" >Contact</Link></li>
			</ul>
		</nav>
	);
}

export default Navbar;
