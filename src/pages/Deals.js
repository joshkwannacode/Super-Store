import React,{useState,useEffect} from 'react';
import ItemCard from '../components/itemCard';
import getItemList from '../api/getItemList';

export default function Deals() {
    const [filteredItems,setFilteredItems] = useState([]);
    
    useEffect(() => {
        getItemList()
        .then(res=>setFilteredItems(res.filter(saleItems=>saleItems.isOnSale===true)))
    },[])

    console.log("deals",filteredItems);
    return (
        <>
            <ItemCard details={filteredItems}/>
        </>
    )
}
