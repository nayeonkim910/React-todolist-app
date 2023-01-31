import React from 'react';
import {FaRegCheckCircle} from 'react-icons/fa';
import {FaRegTimesCircle} from 'react-icons/fa';
import {FcLike} from 'react-icons/fc';
import styles from './PresentTodo.module.css';
export default function PresentTodo({todoItem,onUpdate,onDelete}) {
    const status = todoItem.status;
    const handleChecked=()=>{
        onUpdate({...todoItem,status:status?false:true});
    };
    const handleDelete=()=>onDelete(todoItem);
    return (
       <li className={`${styles.todoItem}` + ((status===false)?` ${styles.lined}`:'') }>{todoItem.text}
           <div className={styles.btnBox}>
            <button className={styles.btnCheck} onClick={handleChecked}>{status?<FaRegCheckCircle/>:<FcLike/>}</button>
            <button className={styles.btnDelete} onClick={handleDelete}> <FaRegTimesCircle/></button>
           </div> 
       </li>
       
       
    );
}





