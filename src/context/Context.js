import React,{createContext, useState} from 'react';
export const Context = createContext();

export const ContextProvider =props=>{
    const [items, setItems] = useState([]);
    const [cart, setCart] = useState([]);
    const [completedOrPending, setCompletedOrPending] =useState(false);
    const [itemDetail, setItemDetail] = useState();

    const addToCart =(item)=>{
        setCart(...cart,{item})
    };
    const deleteItem= id =>{
        setCart(cart.filter(item=>item.id!==id));
    };
    const decreaseQuantity=()=>{

    };
    const increaseQuantity=()=>{

    };
    const handleItemDetail=id=>{
        const findId= items.find(task=>task._id===id);
        setItemDetail(findId);
    }
    return(
        <Context.Provider
        value={{
            items,
            setItems,
            cart,
            addToCart,
            deleteItem,
            itemDetail,
            setItemDetail,
            handleItemDetail,
            completedOrPending,
            setCompletedOrPending
        }}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider