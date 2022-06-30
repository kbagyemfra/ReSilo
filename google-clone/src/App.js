import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from "./pages/Search";

function App() {
  return (
    <>
      <div className="app">
        {/* <h1>Hello Clever Programmer!!</h1> */}
        <BrowserRouter>
          <Routes>
            {/* Home Page */}
            <Route path="/" element={<Home />} />
            {/* Search Page */}
            <Route path="/search" element={<Search />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
