import reactLogo from '../assets/react.svg'
import viteLogo from '../assets/vite.svg'

export default function Header() {
    return (
        <div>
        <h1 className='text-5xl'>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="mx-auto w-56" alt="Vite logo" />
        </a> is cool! and with 
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="mx-auto w-56" alt="React logo" />
        </a> its even cooler!!
        </h1>
      </div>
    );
}