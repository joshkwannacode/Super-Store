import React,{useState,useEffect} from 'react';
import ItemCard from '../components/itemCard';
import getItemList from '../api/getItemList';

export default function Deals() {
    const [filteredItems,setFilteredItems] = useState([]);
    
    useEffect(() => {
        getItemList()
        .then(res=>{
            const filtered = res.items.filter(saleItems=>saleItems.isOnSale===true);
            setFilteredItems(filtered);
        })
    },[])

    console.log("deals",filteredItems);
    return (
        <>
            {filteredItems?filteredItems.map(item=>{
                return(
                    <ItemCard details={item}/>
                )
            }):null}
        </>
    )
}
