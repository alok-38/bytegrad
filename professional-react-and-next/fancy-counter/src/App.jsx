import Header from './components/Header';
import DisplayCounter from './components/DisplayCounter';
import Reset from './components/Reset'
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div className='flex justify-center min-h-96 bg-lime-400 max-w-sm mx-auto rounded-t-xl mt-52'>
      <div className='flex flex-col'>
        <Header />
        <DisplayCounter />
        <Reset />
      </div>
    </div>
    <div className=' bg-black max-w-sm mx-auto rounded-b-xl border-b-4 h-24'>
        <Footer />
      </div>
    </>
  );
}

export default App;
