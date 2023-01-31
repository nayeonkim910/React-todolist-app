import React, { useEffect, useState } from 'react';
import CreateTodo from '../CreateTodo/CreateTodo';
import PresentTodo from '../PresentTodo/PresentTodo';
import styles from './TodoList.module.css'
export default function TodoList({category}) {

    const [todoItems,setTodoItems]= useState(infoFromLocal);
    const handleCreate =(newItem)=> setTodoItems((prev)=>[...prev,newItem]);
    const handleUpdate =(updatedItem)=>{
        setTodoItems(todoItems.map((prev)=>prev.id===updatedItem.id?updatedItem:prev));
    };
    const handleDelete=(deletedItem)=>{
        setTodoItems((prev)=>prev.filter((item)=>item.id!==deletedItem.id));
    };

    useEffect(()=>{
        localStorage.setItem('TodoList', JSON.stringify(todoItems));
    },[todoItems]);

    const selectedItems = isInCategory(todoItems,category);
    return (
        <div className={styles.container}>
            <ul className={styles.itemList}>
            {selectedItems.map((item)=>{
                return(
                    <PresentTodo key={item.id} todoItem={item} onUpdate={handleUpdate} onDelete={handleDelete} />
                )
            })}
            </ul>
            <CreateTodo onAddFn={handleCreate}/>
        </div>
    );
}

function infoFromLocal(){
    const items =localStorage.getItem('TodoList');
    return items? JSON.parse(items):[];
};

function isInCategory(todoItems,category){
    if(category==='All') {
        return todoItems;
    }
    else if(category==='Active'){
      return  todoItems.filter((item)=>item.status===true);
    }
    else {
        return todoItems.filter((item)=>item.status===false);
    }
}
