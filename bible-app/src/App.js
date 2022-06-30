import Home from "./pages/Home";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import BookDetails from "./components/BookDetails";
import Chapters from "./components/Chapters";
import NewTestContextProvider from "./context/new";
import NewTest from "./components/Home/NewTest";
import OldTest from "./components/Home/OldTest";
import OldTestContextProvider from "./context/old";

const App = () => {
  return (
    <Router>
      <div className="App">
        <NewTestContextProvider>
          <OldTestContextProvider>
            <Header />
            <div className="content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/new" element={<NewTest />} />
                <Route path="/old" element={<OldTest />} />
                <Route path="/new/*" element={<BookDetails />} />
                <Route path="/old/*" element={<BookDetails />} />
                <Route path="/content/*" element={<Chapters />} />
                {/* <Route path="*" component={NotFound} /> */}
              </Routes>
            </div>
          </OldTestContextProvider>
        </NewTestContextProvider>
      </div>
    </Router>
  );
};

export default App;
