import React,{createContext, useState} from 'react';
export const Context = createContext();

export const ContextProvider =props=>{
    const [items, setItems] = useState([]);
    const [completedOrPending, setCompletedOrPending] =useState(false);

    const addItems =(item)=>{
        setItems([...items,{item}]);
    }
    const deleteItem= id =>{
        setItems(items.filter(item=>item.id!==id));
    }

    return(
        <Context.Provider
        value={{
            items,
            setItems,
            addItems,
            deleteItem,
            completedOrPending,
            setCompletedOrPending
        }}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider