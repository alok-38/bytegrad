import { Link } from 'react-router-dom';

function Footer() {
	return (
		<footer>
			<div className="footer-container">
				<div className="footer-links">
					<h3>Quick Links</h3>
					<ul>
						<li><Link to="/" className="footer-link">Home</Link></li>
						<li><a href="https://react.dev/" className="footer-link">React</a></li>
						<li><Link to="/about" className="footer-link">About</Link></li>
						<li><Link to="/contact" className="footer-link">Contact</Link></li>
					</ul>
				</div>
				<div className="footer-social">
					<h3>Connect with Us</h3>
					<ul>
						<li><a href="https://twitter.com/example" className="footer-link">Twitter</a></li>
						<li><a href="https://facebook.com/example" className="footer-link">Facebook</a></li>
						<li><a href="https://instagram.com/example" className="footer-link">Instagram</a></li>
					</ul>
				</div>
			</div>
			<div className="footer-bottom">
				<p>&copy; 2024 Awesome Website. All rights reserved.</p>
			</div>
		</footer>
	);
}

export default Footer;
