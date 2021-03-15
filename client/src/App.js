import logo from './logo.svg';
import FrontPage from './pages/frontpage';
import Results from './pages/results';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (

    <Router>
      <div>
      <Route exact path="/" component={FrontPage} />
      <Route exact path="/results" component={Results} />
      </div>
    </Router>


  );
}

export default App;
