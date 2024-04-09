import Header from './components/Header';
import DisplayCounter from './components/DisplayCounter';
import Reset from './components/Reset'
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div className='flex justify-center min-h-96 bg-lime-400 max-w-sm mx-auto rounded-xl mt-52'>
      <div className='flex flex-col'>
        <Header />
        <DisplayCounter />
        <Reset />
      </div>
    </div>
    <div className='h-10 bg-black'>
        <Footer />
      </div>
    </>
  );
}

export default App;
