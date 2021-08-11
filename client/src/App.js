import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Events from "./components/Events";


function App() {
  return (
    <Router>
      <Header />
      <Events />
      <Footer />
    </Router>
  );
}

export default App;
