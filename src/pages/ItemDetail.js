import React,{useContext} from 'react';
import {Context} from '../context/Context';

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
                    </div>
                )
            })}
        </div>
    )
}