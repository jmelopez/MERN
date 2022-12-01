import { useState } from "react";
import styles from './style.module.css';

const Todo = (props) => {
    const [list, setList] = useState([]);
    const [value, setValue] = useState("");

    const addTodo = (e) => {
        e.preventDefault();

        if(value.length === 0 ) {
            return;
        }
        setList([...list, {id: list.length+1 , item:value, done: false}]);
        setValue("");
    };

    const handleClick = (index) => {
        const updatedLists = list.map((list, i) => {
            if(index === i) {
                list.done = !list.done;
            }
            return list;
        });
        setList(updatedLists)
    }

    const checkList = {
        textDecoration: 'line-through',
        color: 'red'
    }

    const deleteItems = (e) => {
        const result = list.filter(item => item.done === false)
        setList(result)
    }



    return (
        <div className={styles.form}>
            <form onSubmit={ addTodo }>
                <div>
                    <label>To-Do:</label>
                    <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
                    <input type="submit" value="Add"className={styles.btn}/>
                </div>
            </form>
            <ul className={styles.list}>
            {   
                list.map( (myList, index) =>
                    <li key={myList.id} style={ myList.done ? checkList : {textDecoration:'none'}} ><input onChange={ (e) => handleClick(index)} type="checkbox" checked={myList.done}  />{myList.item}</li>
                    
                )
            }
            </ul>
            <div>
                <button  className={styles.btn} style={{marginLeft: '75%', marginTop: '10px'}} onClick={ deleteItems }>Delete</button>
            </div>
        </div>
    )
}

export default Todo;