
import { useState} from "react";
import  BookContext  from "./context";

/*
    const AppContext=createContext({
    items:[],
    createItem:(item)=>{},
    getItem:(id)=>{},
    updateItem:(id)=>{}
})
*/


function Store({children}) {

    const [items,setItems]=useState([])

    function createItem(item) {
        const temp=[...items]

        console.log(item)

        temp.push(item)

        setItems(temp)

        
    }

    function getItem(id) {
        const item=items.find((item)=>item.bookId===id)

        return item
    }

    function updateItem(item) {
        const index=items.findIndex((i)=>i.bookId===item.bookId)
        const temp=[...items]

        temp[index]={...items}

    }

    return <BookContext.Provider value={{items,createItem,getItem,updateItem}}>
        {children}
    </BookContext.Provider>

}

export default Store