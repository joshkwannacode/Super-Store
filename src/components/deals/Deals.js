import React,{useContext,useState,useEffect} from 'react';
import {Context} from '../../context/Context';
import ItemCard from './ItemCard';

export default function Deals() {
    const {items,setItems} = useContext(Context);
    const [filteredItems,setFilteredItems] = useState([]);
    
    // should I call the api here too?
    useEffect(() => {
        setFilteredItems(items.filter(saleItems=>saleItems.isOnSale===true))
    },[])

    console.log("deals",filteredItems);
    return (
        <div>
            <ItemCard itemDetails={filteredItems}/>
        </div>
    )
}
