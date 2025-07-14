import React from 'react';
import BookInfo from './ui/BookInfo.jsx';
import { books } from '../data';

const Featured = () => {
    
   console.log(books);
    function getFiveStarBooks() {
        
    }
  return (
    <div>
      <section id="features">
        <div className="container">
            <div className="row">
                <h2 className="section__title">
                    Featured <span className="purple">Books</span>
                </h2>
                <div className="books">
                    {books //getting the books data
                    .filter(book => book.rating === 5) //filter books data for 5 star books
                    .slice(0, 4) // slicing to get only the first 4 books
                    .map((book) => (
                    <BookInfo book={book} key={book.id} /> // map to turn every single book into sum html
                    ))} 
                </div>
            </div>
        </div>
      </section>
    </div>
  );
}

export default Featured
