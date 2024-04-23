import Book from "./components/Book";
import './App.css';
import Header from "./components/Header";

export default function App() {
  return (
    <>
      <Header />
      <main className="flex flex-wrap gap-20 max-w-screen-lg  text-center mx-auto justify-center">
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
      </main>
    </>
  );
}
