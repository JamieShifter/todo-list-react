import { useState, useRef } from "react";
import { MultiPurposeContainer } from "../Container/styled";
import { FormInput, FormSubmit } from "./styled"

const Form = ({addNewTask}) => {
    const inputRef = useRef(null)

    const [newTaskContent, setNewTaskContent] = useState("");

    const onFormSubmit = (event) => {
        const trimmedContent = newTaskContent.trim();

        event.preventDefault();

        if (!trimmedContent) {
            return;
        }

        addNewTask(trimmedContent);
        setNewTaskContent("");
        inputRef.current.focus();
    }


    return (
        <form onSubmit={onFormSubmit}>
            <MultiPurposeContainer submit>
                <FormInput
                    ref={inputRef}
                    value={newTaskContent}
                    onChange={({target}) => setNewTaskContent(target.value)}
                    placeholder="Co jest do zrobienia?"
                />
                <FormSubmit>Dodaj zadanie</FormSubmit>
            </MultiPurposeContainer>
        </form>
    )
};



export default Form;