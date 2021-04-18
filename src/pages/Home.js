import React, {useState,useEffect} from 'react';
import ItemCard from '../components/itemCard/index';
import getItemList from '../api/getItemList';
import SearchBar from '../components/SearchBar';

export default function Home() {
    const [items,setItems] = useState([]);
    const [searchItem, setSearchItem] = useState();
    const [itemBackUp, setItemBackUp] = useState([]);

    useEffect(()=>{
        getItemList()
        .then(res=>{
            setItems(res.items)
            setItemBackUp(res.items)})
    },[])

    const handleSearch =(e)=>{
        setSearchItem(e.target.value);
        const filtereditems = e.target.value?items.filter(item =>{
            return item.name.toLowerCase().includes(e.target.value.toLowerCase());
          }):itemBackUp;
        const check = filtereditems.length>0;

        if(check){
              setItems(filtereditems);
        } 
          
    };
    const handleSubmit=()=>{
        const filtereditems = searchItem?items.filter(item =>{
                    return item.name.toLowerCase().includes(searchItem.toLowerCase());
                  }):itemBackUp;
        
        const check = filtereditems.length>0;

        if(check){
              setItems(filtereditems);
        } 
    };
    return (
        <div>
            <SearchBar handleSearch={handleSearch} handleSubmit={handleSubmit} />
            {items.map((item)=>{
                return(
                <ItemCard details={item}/>
                )
            })}
        </div>
    )
}
