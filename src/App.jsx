import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./containers/Header";
import HeaderBott from "./containers/HeaderBott";
import Home from "./pages/Home";
import SearchCountry from "./pages/SearchCountry";
import SingleCountry from "./pages/SingleCountry";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <HeaderBott />
      <main>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/name/:id" element={<SearchCountry />} />
            <Route path="/singleCountry/:id" element={<SingleCountry />} />
          </Routes>
        </div>
      </main>
    </BrowserRouter>
  );
}

export default App;
