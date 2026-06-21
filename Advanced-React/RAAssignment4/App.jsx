
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { BookProvider } from "./RAAssignment4/BookContext";

import Navbar from "./RAAssignment4/Navbar";

import AllBooks from "./RAAssignment4/AllBooks";
import AddBook from "./RAAssignment4/AddBook";

function App() {
  return (
    <BookProvider>
      <BrowserRouter>
        <Navbar />

        <div style={{ padding: "20px" }}>
          <Routes>
            <Route path="/" element={<AllBooks />} />

            <Route path="/add" element={<AddBook />} />
          </Routes>
        </div>
      </BrowserRouter>
    </BookProvider>
  );
}

export default App;