import Book from './components/Book'
import Header from './components/Header';

export default function App() {
  return (
    <>
      <Header />
      <div className='flex max-w-7xl gap-10 text-center justify-evenly mx-auto flex-wrap'>
        <Book />
        <Book />
        <Book />
      </div>
    </>
  );
}