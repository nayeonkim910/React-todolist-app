import React, { useState } from 'react';
import {FaRegArrowAltCircleUp} from 'react-icons/fa';
import {v4 as uuidv4} from 'uuid';
import styles from './CreateTodo.module.css';
//추가할 것 알려주는 컴포넌트 

export default function CreateTodo({onAddFn}) {
    const [newText,setNewText]= useState('');

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(newText.trim()===''){ 
            return;
        }
        onAddFn({id:uuidv4(), text:newText, status:true});
        setNewText('');
    }
    const handleChange=(e)=>{
        const newText =e.target.value;
        setNewText(newText);
    }
    return (
        //footer기능만들기 , input, submit버튼 =>form으로
        <form onSubmit={handleSubmit} className={styles.form}>
            <input className={styles.newTodo} type="text" onChange={handleChange} value={newText} placeholder='New Todo' />
            <button className={styles.btnAdd}><FaRegArrowAltCircleUp/></button>
        </form>
    );
}

