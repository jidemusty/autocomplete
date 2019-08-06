import React, { useState } from "react";
import './index.css';

function generateId () {
    return `_ ${Math.random().toString(36).substr(2, 9)}`;
}

function Todo () {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');

    const handleSubmit = () => {
        setTodos((todos) => todos.concat({
            text: input,
            id: generateId()
        }));

        setInput('');
    };

    const removeTodo = (id) => setTodos((todos) => todos.filter(todo => id !== todo.id));

    return (
        <div className="container">
            <div className="form">
                <input
                    type="text"
                    value={input}
                    placeholder="Add new todo"
                    onChange={(e) => setInput(e.target.value)}
                />

                <button onClick={handleSubmit}>submit</button>

                <ul>
                    {todos.map(({ text, id}) => (
                        <li key={id}>
                            <span>{text}</span>
                            <button onClick={() => removeTodo(id)}>&times;</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Todo;