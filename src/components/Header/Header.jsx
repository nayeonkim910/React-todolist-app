import React from 'react';
import { useDarkMode } from '../../context/DarkModeContext';
import styles from './Header.module.css';
import {FaStarAndCrescent} from 'react-icons/fa';
import {BsFillSunFill} from 'react-icons/bs';

export default function Header({categoryList,category,onCategoryChange}) {

    const {darkMode, handleDarkMode}= useDarkMode();
    return (
        <header className={styles.header}>
            <ul className={styles.categoryList}>
                {categoryList.map((title,idx)=>(
                    <li  key={idx}><button className={`${styles.category} ${category===title&&styles.selected}`} onClick={()=>onCategoryChange(title)}>{title}</button></li>
                ))}
            </ul>

            <button 
            onClick={handleDarkMode}
            className={styles.btnDarkMode}>
            {darkMode?<FaStarAndCrescent/>:<BsFillSunFill/>}
            </button>   
        </header>
        );
}

