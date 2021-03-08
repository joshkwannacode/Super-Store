import React,{useContext,useState,useEffect} from 'react';
import {Context} from '../context/Context';
import ItemCard from '../components/itemCard';
import getItemList from '../api/getItemList';

export default function Deals() {
    const {items,setItems} = useContext(Context);
    const [filteredItems,setFilteredItems] = useState([]);
    
    // should I call the api here too instead of using context?
    useEffect(() => {
        getItemList()
        .then(res=>console.log(res))
    },[])

    console.log("deals",filteredItems);
    return (
        <div>
            <ItemCard details={filteredItems}/>
        </div>
    )
}
