import React from 'react'

const Price = ({ salePrice, originalPrice }) => {
  return (
    <div className="book__price">
        {salePrice ? ( //does books.salePrice exist?
          <> 
            <span className="book__price--normal">
              ${originalPrice.toFixed(2)}
              </span>
            ${salePrice.toFixed(2)} 
          </> // if there's a sale -> show both book.originalPrice and book.salePrice
        ) : (
          `$${originalPrice.toFixed(2)}` // if there's no sale -> show book.originalPrice
        )}
      </div>
  );
};

export default Price;
