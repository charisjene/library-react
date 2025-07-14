import React from "react";
import { books } from "../data";
import BookInfo from "./ui/BookInfo.jsx";


const Discounted = () => {
  return (
    <section id="recent">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            Discount <span className="purple">Books</span>
          </h2>
          <div className="books">
            {books // get the books
            .filter(book => book.salePrice > 0 ) // filter to show books with sales price
            .slice(0, 8) // only show first 8 books
            .map((book) => (
              <BookInfo book={book} key={book.id} /> // map over each element in the array and turn them into the Book html tag 
            ))} 
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discounted;
