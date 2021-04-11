import React from 'react'

export default function Price({price,isOnSale}) {
    const formatPrice = price.toLocaleString(undefined, {
        currency: "USD",
        currencyDisplay: "narrowSymbol",
        style: "currency",
      });
    
      return (
        <div className="item-price">
          <h3>{formatPrice + " "}</h3>
          {isOnSale ? <span className="on-sale">On Sale</span> : null}
        </div>
    )
}
