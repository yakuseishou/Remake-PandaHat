import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from './components/Footer';
import Home from "./components/Home";
import ProductLists from './components/ProductLists';
// import ShoppingList from './components/shoppingCart/ShoppingList';
import SignUpForm from './components/SignUp/SignUpForm';
import SignInForm from './components/SignIn/SignInForm';


function App() {
  return (
    <Router>
      <div className="App">
          <Header />
          <Route path="/" exact component={Home} />
          <Route path="/SignIn" exact component={SignInForm} />
          <Route path="/SignUp" exact component={SignUpForm} />
          <Route path="/Product" exact component={ProductLists} />
          {/* <Route path="/Shop" exact component={ShoppingList} /> */}
          <Footer />
      </div>
    </Router>
  );
}

export default App;
