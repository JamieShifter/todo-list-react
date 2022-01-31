import "./style.css";

const Form = () => (
    <form className="form">
        <div className="form__container form__container--submit">
            <input className="form__task" placeholder="Co jest do zrobienia?" />
            <button className="form__submit">Dodaj zadanie</button>
        </div>
    </form>
);
    


export default Form;