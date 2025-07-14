import Footer from "./components/Footer.jsx";
import Nav from "./components/Nav"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home.jsx";
import Books from "./pages/Books.jsx";
import { books } from "./data.js";
import BookPage from "./pages/BookPage.jsx";
import Cart from "./pages/Cart.jsx";
import { useState, useEffect } from "react";

function App() {
  const [cart, setCart] = useState([])

  function addToCart(book) { 
   setCart([...cart, { ...book, quantity: 1 }]) 
  }

  function changeQuantity(book, quantity) {
    setCart(   // passing new array to the cart with map
      cart.map(item => item.id === book.id // the new array = find the item we're working with
        ? {   
            ...item,
            quantity: +quantity, // add + to quanity -> makes it a number
          } // update the quantity
        : item // otherwise return the same item
      )
    );
  }

  function removeItem(item) {
    setCart(cart.filter(book => book.id !== item.id))
  }

    function numberOfItems() {
    let counter = 0;
    cart.forEach((item) => {
      counter += +item.quantity;
    });
    return counter;
  }


  useEffect(() => { //useEffect is how to console.log b/c the code is asynchronous
    console.log(cart)
  }, [cart]) //cart is in [] so whenever cart changes -> it's going to console log

  return (
    <Router>
     <div className="App">      
          <Nav numberOfItems={numberOfItems()} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/books" element={<Books books={books} />} />
            <Route path="/books/books/:id" element={<BookPage books={books}
            addToCart={addToCart} cart={cart} 
            />} />
            <Route path="/cart" element={<Cart books={books} 
            cart={cart}
            changeQuantity={changeQuantity} 
            removeItem={removeItem}
            />} />
          </Routes>
          <Footer />
          
     </div>
    </Router>
    
  );
}

export default App;