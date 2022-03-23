import { useState } from "react";
import { MultiPurposeContainer } from "../Container/styled";
import { FormInput, FormSubmit } from "./styled"

const Form = ({addNewTask}) => {
    const [newTaskContent, setNewTaskContent] = useState("");

    const onFormSubmit = (event) => {
        const trimmedContent = newTaskContent.trim();

        event.preventDefault();

        if (!trimmedContent) {
            return;
        }

        addNewTask(trimmedContent);
        setNewTaskContent("");
    }


    return (
        <form onSubmit={onFormSubmit}>
            <MultiPurposeContainer submit>
                <FormInput
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