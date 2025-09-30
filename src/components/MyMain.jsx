import { useState } from 'react'
//importo FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//importo l'icona che voglio utilizzare
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

function MyMain() {

    const initialList = ['pasta', 'pomodoro', 'latte', 'mele', 'patate'];

    const [tasks, setTasks] = useState(initialList);
    const [newTask, setNewTask] = useState('');

    const addTask = e => {
        e.preventDefault();
        // pulisco l'input dell'utente da eventuali spazi vuoti
        const cleanTask = newTask.trim();
        // inserisco il nuovo elemento nell'array solo se non è una stringa vuota
        const updatedTasks = cleanTask.length !== 0 ? [...tasks, newTask] : [...tasks];
        setTasks(updatedTasks);
        // ripulisco il campo del form (value = {newTask})
        setNewTask('');
    }

    //funzione che filtra l'array, restituendo tutti gli elementi tranne quello la cui icona è stata cliccata
    const removeTask = i => {
        const updatedTasks = tasks.filter((task, taskIndex) => {
            return taskIndex !== i
        });
        setTasks(updatedTasks);
    }

    return (
        <>
            <h1>Lista della spesa</h1>
            <form onSubmit={addTask}>
                <input type="text"
                    placeholder='Inserisci una attività'
                    value={newTask}
                    onChange={(e) => { setNewTask(e.target.value) }}
                />
                <button type='submit'>Inserisci un nuovo task</button>
            </form>

            {/* //lista dei task */}
            <ul>
                {tasks.map((task, index) => (
                    <li
                        key={index}>
                        {task}
                        {/* quando l'icona viene premuta richiama la funzione reomveTask */}
                        <FontAwesomeIcon icon={faCircleXmark} onClick={() => removeTask(index)} />
                    </li>
                ))}
            </ul>
        </>
    )

}

export default MyMain