import React,{useContext} from 'react';
import {Context} from '../context/Context';
import Ratings from '../components/Ratings';
import Price from '../components/Price';

export default function ItemDetail() {
    const {itemDetail} = useContext(Context);

    console.log("itemdeet",itemDetail);
    return (
        <div>
            {itemDetail.map(item=>{
                return(
                    <div>
                        <img src={item.imageUrl} alt={item.name}/>
                        <h2>{item.name}</h2>
                        <Ratings avgRating={item.avgRating}/>
                        <Price price={item.price} isOnSale={item.isOnSale}/>
                    </div>
                )
            })}
        </div>
    )
}
