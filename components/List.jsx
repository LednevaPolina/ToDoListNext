import ItemList from './ItemList'
import style from './List.module.css';

export default function List({list, deleteDoList, onChecked, deleteDone}){
    return <fieldset className={style.fieldset}>
        <legend>ToDoList</legend>
        {list.length > 0 ? (
            <ol>
            <ItemList list={list} deleteDoList={deleteDoList} onChecked={onChecked}/>
            <button className={style.delete} onClick={()=>deleteDone()}> Delete completed</button> 
            </ol>) : (<h3>List is empty!</h3>)
        }
    </fieldset>;
}