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
        .then((res) =>setItem([res]))
    },[itemId])

    console.log("params",item)
    return (
        <div>
            {item?item.map((itemDetail)=>{
                return(
                    <>
                        <img src={itemDetail.imageUrl} alt={itemDetail.name}/>
                        <h2>{itemDetail.name}</h2>
                        <Ratings avgRating={itemDetail.avgRating}/>
                        <Price price={itemDetail.price} isOnSale={itemDetail.isOnSale}/>
                    </>
                )
            }):null}
        </div>
    )
}
