import React,{useContext,useState} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import Ratings from '../Ratings';
import Price from '../Price';

export default function ItemCard({details}) {
    return (
        <>
            <div key={details._id}>
                <img src={details.imageUrl} alt={details.name}/>
                <p>{details.description}</p>
                <Ratings avgRating={details.avgRating}/>
                <Price price={details.price} isOnSale={details.isOnSale}/>

                <button>
                    <Link to={`/itemDetail/${details._id}`}>View Item</Link>
                </button>
            </div>
        </>
    )
}
ItemCard.propTypes = {
    item: PropTypes.shape({
        imageUrl: PropTypes.string,
        name: PropTypes.string
    })
  }