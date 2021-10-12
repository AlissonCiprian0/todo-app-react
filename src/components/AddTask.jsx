import React, { useState } from 'react';
import Button from './Button';

// CSS
import "./AddTask.css";

const AddTask = ({ handleTaskAddition }) => {
    const [inputData, setInputData] = useState("");

    const handleInputChange = (e) => {
        setInputData(e.target.value);
    }

    const checkEmptyInput = () => {
        if (inputData && inputData !== "" && inputData.trim().length > 0)
            return true;
        return false;
    }

    const handleAddTaskClick = () => {
        if (checkEmptyInput()) {
            handleTaskAddition(inputData);
            setInputData('');
        }
        else {
            alert('Preencha o input!');
        }
    }

    return (
        <div className="add-task-container">
            <input onChange={handleInputChange} value={inputData} type="text" className="add-task-input" placeholder="Título da tarefa" />

            <div className="add-task-button-container">
                <Button onClick={handleAddTaskClick}>Adicionar</Button>
            </div>
        </div>
    );
}
 
export default AddTask;