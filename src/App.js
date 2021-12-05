import "./App.css";
import NavBar from "./components/NavBar";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
      <Footer/>
    </div>
    </BrowserRouter>
    
  );
}

export default App;
