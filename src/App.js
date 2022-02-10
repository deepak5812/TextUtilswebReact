import './App.css';
import NavBar from './Components/navbar';
import TextUtil from './Components/TextUtil';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './Components/About';


function App() {
  return (
    <>
    <Router>
    <NavBar topic1="DeepakProject" topic2="About"/>
    <div className="container my-5">
    <Routes>
           <Route  path="/" element={<TextUtil/>}/>
           <Route  path="/About" element={<About/>}/>
            
    </Routes>
    </div>  
    
    </Router>

    </>
  );
}

export default App;
