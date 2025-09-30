import { useState } from 'react'

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
                {tasks.map((task, i) => (
                    <li
                        key={i}>
                        {task}
                    </li>
                ))}
            </ul>
        </>
    )

}

export default MyMain