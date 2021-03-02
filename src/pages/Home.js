import React, {useState,useEffect,useContext} from 'react';
import ItemCard from '../components/itemCard/index';
import getItemList from '../api/getItemList';
import {Context} from '../context/Context';

export default function Home() {
    const {items,setItems} = useContext(Context);
    
    useEffect(()=>{
        getItemList()
        .then(res=>setItems(res.items))
    },[])

    console.log(items)

    return (
        <div>
            <ItemCard details={items}/>
        </div>
    )
}
