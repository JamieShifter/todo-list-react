import "./style.css";

const Container = ({title, body, extraHeaderContent}) => (
    <div className="container">
        <div className="form__container form__container--withButtons">
          <span className="form__title">{title}</span>
          {extraHeaderContent}
        </div>
        <div className="form__container form__container--tasks">
          {body}
        </div>
      </div>
);

export default Container;