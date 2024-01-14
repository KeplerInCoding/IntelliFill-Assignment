import {Route, Routes} from 'react-router-dom';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ExamDetails from "./pages/ExamDetails";

function App() {
  return (
    <div>
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/examDetails" element={<ExamDetails />} />
      </Routes>

      <Footer/>

    </div>
  );
}

export default App;
