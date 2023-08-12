import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.scss';
import HeroBanner from './components/HeroBanner/HeroBanner';
import NoPage from "./components/NoPage/NoPage";
import Layout from "./components/Layout/Layout";
import BookingsList from "./components/BookingsList/BookingsList";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<HeroBanner/>} />
            <Route path="admin" element={<BookingsList/>} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>);
}

export default App;
