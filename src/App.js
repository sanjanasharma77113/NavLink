import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Labs from "./components/Labs"
import Support from "./components/Support"
import { Route,Routes} from "react-router-dom";
import { NavLink } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
          <NavLink to="home">Home</NavLink>
          </li>
          <li>

        
       <NavLink to="about">about</NavLink>
       </li>
       <li>

      
       <NavLink to="labs">labs</NavLink>
       </li>
       <li>

   
       <NavLink to="support">support</NavLink>
          </li>

        </ul>
       
      </nav>
     
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/labs" element={<Labs />} />
          <Route path="/support" element={<Support />} />
        </Routes>
     </div>
  );
}

export default App;
