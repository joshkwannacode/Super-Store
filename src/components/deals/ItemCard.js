import React from 'react';
import PropTypes from 'prop-types';

export default function ItemCard({itemDetails}) {
    
    return (
        <>
            {itemDetails.map(details=>{
                return(
                    <div key={details._id}>
                        <img src={details.imageUrl} alt={details.name}/>
                        <p>{details.description}</p>
                    </div>
                )
            })}
        </>
    )
}
ItemCard.propTypes = {
    item: PropTypes.shape({
        imageUrl: PropTypes.string,
        name: PropTypes.string
    })
  }