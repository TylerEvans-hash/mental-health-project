import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Events from "./components/Events";
import SignUp from "./components/SignUp";


function App() {
  return (
    <Router>
      <Header />
      <section style={{ width: "62%", margin: "50px auto" }}>
        <Switch>
          <Route exact path="/" component={Events} />
          <Route exact path="/events" component={Events} />
          <Route exact path="/signup" component={SignUp} />

          <Route exact render={() => <h1>Page does not exist :(</h1>} />
        </Switch>
      </section>
      <Footer />
    </Router>
  );
}

export default App;
