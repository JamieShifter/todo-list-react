import { useState } from "react";
import "./style.css";

const Form = ({addNewTask}) => {
    const [newTaskContent, setNewTaskContent] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();
        addNewTask(newTaskContent.trim());
        setNewTaskContent("");
    }


    return (
        <form
            onSubmit={onFormSubmit}
            className="form">
            <div className="form__container form__container--submit">
                <input
                    value={newTaskContent}
                    onChange={({target}) => setNewTaskContent(target.value)}
                    className="form__task"
                    placeholder="Co jest do zrobienia?"
                />
                <button className="form__submit">Dodaj zadanie</button>
            </div>
        </form>
    )
};



export default Form;