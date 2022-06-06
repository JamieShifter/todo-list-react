import { nanoid } from "@reduxjs/toolkit";
import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { MultiPurposeContainer } from "../../../../common/Container/styled";
import Input from "../../Input";
import { addTask } from "../../tasksSlice";
import { FormSubmit } from "./styled"


const Form = () => {
    const inputRef = useRef(null)

    const [newTaskContent, setNewTaskContent] = useState("");

    const dispatch = useDispatch();

    const onFormSubmit = (event) => {
        const trimmedContent = newTaskContent.trim();

        event.preventDefault();

        if (!trimmedContent) {
            return;
        }

        dispatch(addTask({
            content: trimmedContent,
            done: false,
            id: nanoid()
        }))

        setNewTaskContent("");
        inputRef.current.focus();
    }


    return (
        <form onSubmit={onFormSubmit}>
            <MultiPurposeContainer submit>
                <Input
                    ref={inputRef}
                    value={newTaskContent}
                    onChange={({ target }) => setNewTaskContent(target.value)}
                    placeholder="Co jest do zrobienia?"
                />
                <FormSubmit>Dodaj zadanie</FormSubmit>
                
            </MultiPurposeContainer>
        </form>
    )
};



export default Form;