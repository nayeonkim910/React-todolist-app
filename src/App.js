import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import TodoList from './components/TodoList/TodoList';
import { DarkModeProvider } from './context/DarkModeContext';




const categoryList = ['All', 'Active', 'Done'];
function App() {
    const [category,setCategory] =useState(categoryList[0]);
    return(
      <DarkModeProvider>
         <Header 
         categoryList={categoryList}
         category={category}
         onCategoryChange={setCategory}/>
         <TodoList category={category}/>
      </DarkModeProvider>
    );
}

export default App;
