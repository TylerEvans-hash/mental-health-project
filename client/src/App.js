import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Events from "./components/Events";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";


function App() {
  return (
    <Router>
      <Header />
      <section id="main-sec">
        <Switch>
          <Route exact path="/" component={Events} />
          <Route exact path="/events" component={Events} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/signin" component={SignIn} />

          <Route exact render={() => <h1>Page does not exist :(</h1>} />
        </Switch>
      </section>
      <Footer />
    </Router>
  );
}

export default App;
