import React,{useState,useEffect} from 'react';
import Ratings from '../components/Ratings';
import Price from '../components/Price';
import getItemById from '../api/getItemById';


export default function ItemDetail({
    match: {
    params: { itemId }
    }
  }) {
    const [item,setItem] = useState();

    useEffect(() => {
        getItemById(itemId)
        .then((res) =>setItem(res))
    },[itemId])

    console.log("params",item)
    return (
        <div>
            {item?
                <div>
                    <img src={item.imageUrl} alt={item.name}/>
                    <h2>{item.name}</h2>
                    <Ratings avgRating={item.avgRating}/>
                    <Price price={item.price} isOnSale={item.isOnSale}/>
                </div>:null}
        </div>
    )
}
