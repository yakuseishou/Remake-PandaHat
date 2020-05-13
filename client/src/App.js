import React from 'react';
import Header from "./components/Header";
import Footer from './components/Footer';
import ProductLists from './components/ProductLists';
import ShoppingList from './components/shoppingCart/ShoppingList';
// import SignUpForm from './components/SignUp/SignUpForm';
// import Home from "./components/Home";
// import SignInForm from './components/SignIn/SignInForm';


function App() {
  return (
    <div className="App">
        <Header />
        {/* <Home /> */}
        {/* <SignInForm /> */}
        {/* <SignUpForm /> */}
        {/* <ProductLists /> */}
        <ShoppingList />
        <Footer />
    </div>
  );
}

export default App;
