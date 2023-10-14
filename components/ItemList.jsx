import style from './ItemList.module.css'

export default function ItemList({list, deleteDoList, onChecked}){
    return <>
    {
        list.map
            (
                el=><li key={el.id} id={el.id}>{el.text}
                    <button className={style.delete} id={el.id} onClick={(e)=>deleteDoList(e.target.id)}>&#10008;</button>
                    <input className={style.check} type="checkbox" id={el.id} onChange={(e)=>onChecked(e.target.id)}/>                
                    <hr/>
                </li>
            )   
    }
    </>
}