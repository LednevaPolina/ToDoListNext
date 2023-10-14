import React from 'react';
import FormInput from './FormInput'
import List from './List'

const tempDoList = [
  {
    id:1,
    text:"Приготовить ужин",
    done: false,
  },
  {
    id:2,
    text:"Сходить в кино",
    done: false,
  }
];

export default function ToDoList(){
    const [list, setList] = React.useState(tempDoList);
    const [value, setValue] = React.useState('Plan something');
   
    const handlerDeleteDone = () => {
        setList((prevlist)=>prevlist.filter((element)=>!element.done));
    }
   
    const handlerOnChecked= (id)=>{
        setList((prevlist)=>{
            let element = prevlist.find((elem)=>elem.id==id);      
            element.done = !element.done;  
            const index = prevlist.indexOf(element);
            prevlist[index] = element;
            return prevlist;
        })
    }

    const handlerDeleteDoList = (id) => {
        setList((prevlist)=>prevlist.filter((element)=>element.id!=id));
    };
   
    const handlerAddDoList = () =>{
        if(!value.length){
            alert("The field must not be empty!");
            return;
        }
        const newItem = {
            id: list.length?list[list.length-1].id+1:1, 
            text: value, 
            done: false
        };
        setList((prevList)=>[...prevList, newItem]);
    };
   
    const handlerValue = (textInput) => {  
        setValue(textInput)
    }

    return <>
        <FormInput list={list} value={value} add={handlerAddDoList} update={handlerValue}/>
        <List list={list} deleteDoList={handlerDeleteDoList} onChecked={handlerOnChecked} deleteDone={handlerDeleteDone}/>
    </>
}
