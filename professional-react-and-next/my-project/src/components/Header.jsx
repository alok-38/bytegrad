import viteLogo from '../assets/vite.svg'
import Navbar from './Navbar'

export default function Header() {
    return (
        <header className='mt-10 border-b-2 border-blue-200'>
            <a href="https://vitejs.dev" target="_blank">
                <img src={viteLogo} className="logo mx-auto block w-20" alt="Vite logo" />
            </a>
            <Navbar/>
        </header>
    )
}