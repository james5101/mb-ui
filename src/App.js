import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "react-bootstrap/Button";
import Home from "./pages/Home"
import ServiceCard from "./components/Cards/Cards"
import ServicesModal from "./components/ServicesModal/ServicesModal"
import 'bootstrap/dist/css/bootstrap.css';
import './css/theme.css'
import { BrowserRouter as Router,Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact  component={Home} />
        <Route path="/cards"  component={ServiceCard} />
      </Router>

    </div>
  );
}

export default App;
