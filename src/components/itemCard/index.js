import React,{useContext,useState} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import {Context} from '../../context/Context';
import Ratings from '../Ratings';

export default function ItemCard({details}) {
    const {handleItemDetail} = useContext(Context);
    // console.log("why",itemDetails)

    return (
        <>
            {details.map(detail=>{
                return(
                    <div key={detail._id}>
                        <img src={detail.imageUrl} alt={detail.name}/>
                        <p>{detail.description}</p>
                        <Ratings avgRating={detail.avgRating}/>
                        <button onClick={()=>handleItemDetail(detail._id)}>
                            <Link to={'/itemDetail'}>View Item</Link>
                        </button>
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