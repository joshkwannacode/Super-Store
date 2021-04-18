import React, {useState,useEffect} from 'react';
import ItemCard from '../components/itemCard/index';
import getItemList from '../api/getItemList';
import SearchBar from '../components/SearchBar';

export default function Home() {
    const [items,setItems] = useState([]);
    const [searchItem, setSearchItem] = useState();
    const [itemBackUp, setItemBackUp] = useState([]);
    const [noItemError, setNoItemError] = useState(false);

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
        
        //   if(filtereditems.length>0){
            setItems(filtereditems);
            setNoItemError(false);
        // }else{
        //     setNoItemError(false);
        // }
          
    };
    const handleSubmit=()=>{
        const filtereditems = items.filter(item =>{
                    return item.name.toLowerCase().includes(searchItem.toLowerCase());
                  });
                  
        console.log("false or not", filtereditems)

        if(filtereditems.length>0){
            setItems(filtereditems);
            setNoItemError(false);
        }else{
            setNoItemError(true);
        }          
        

    };
    return (
        <div>
            <SearchBar handleSearch={handleSearch} handleSubmit={handleSubmit} />
            {!noItemError?items.map((item)=>{
                return(
                <ItemCard details={item}/>
                )
            }):
                <div>
                    <h3>Error: No Items match search</h3>
                </div>
            }
        </div>
    )
}
