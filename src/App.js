import "./App.css";

import Navbar from "./Components/Navbar";
import Title from "./Components/Title";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import Todos from "./Components/Todos";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App pt-5">
      
      <Router>
        <Navbar />

        <Routes>

          {/* <Route path="/Home" element={<Navbar /> } /> */}
          <Route path="/" element={<Title />} />
          <Route path="/Todos" element={<Todos />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
