import {Route, Routes} from 'react-router-dom';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ExamDetails from "./pages/ExamDetails";
import add from "./assets/images/Ads.png"

function App() {
  return (
    <div>
      <Navbar/>
      <div>
        <img width="980px" src={add} alt=""/>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/examDetails" element={<ExamDetails />} />
      </Routes>

      <Footer/>

    </div>
  );
}

export default App;
