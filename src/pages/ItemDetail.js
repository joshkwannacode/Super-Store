import React,{useState,useEffect} from 'react';
import Ratings from '../components/Ratings';
import Price from '../components/Price';
import getItemById from '../api/getItemById';


export default function ItemDetail({
    match:{
    params:{itemId}
}}) {
    const [item,setItem] = useState();
    const [itemStockCount, setItemStockCount] = useState(null);
    const [insufficent, setInsufficent] = useState();
    const [inputValue, setInputValue] = useState(0);
    
    useEffect(() => {
        getItemById(itemId)
        .then((res) =>{
            setItem(res)
            setItemStockCount(res.stockCount);
        })
    },[itemId])

    const handleChange =(e)=>{
        setInputValue(e.target.value);
    }
    const handleClick=()=>{
        // e.preventDefault();
        if(itemStockCount>=inputValue&&itemStockCount>0){
            setItemStockCount(itemStockCount-inputValue);
            setInsufficent(null);
        }else{
            setInsufficent("Insufficent Stock");
        };
    };

    console.log("params",inputValue)
    return (
        <div>
            {item?
                <div>
                    <img src={item.imageUrl} alt={item.name}/>
                    <h2>{item.name}</h2>
                    <Ratings avgRating={item.avgRating}/>
                    <Price price={item.price} isOnSale={item.isOnSale}/>
                    <p>{itemStockCount}</p>
                    <form >
                        <input 
                        type="number" 
                        onChange={handleChange} 
                        value={inputValue}/>

                        <button 
                        type="button" onClick={()=>handleClick()}>
                            Add to cart</button>
                    </form>
                    
                    <p>{insufficent}</p>
                </div>:null}
        </div>
    )
}
