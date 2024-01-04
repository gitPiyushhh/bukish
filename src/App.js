import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import FormBook from "./components/form/FormBook";
import Navbar from "./components/navbar/Navbar";
import Book from "./components/book/Book";
import Books from "./components/books/Books";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/allbooks" element={<Books />} />
        <Route path="/addBook" element={<FormBook />} />
      </Routes>
    </>
  );
}

export default App;
