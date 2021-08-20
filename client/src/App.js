import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

import "bulma/css/bulma.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Events from "./components/Events";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";

const client = new ApolloClient({
  request: operation => {
    const token = localStorage.getItem('id_token');

    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    });
  },
  uri: 'https://plan-community.herokuapp.com/graphql'
});


function App() {
  return (
    <ApolloProvider client={client}>
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
    </ApolloProvider>
  );
}

export default App;
