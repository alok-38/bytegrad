import Navbar from './Navbar'; // Adjusted import path

function Header() {
    return (
        <div className='App-header'> {/* Remove Router wrapper */}
            <Navbar />
        </div>
    );
}

export default Header;
