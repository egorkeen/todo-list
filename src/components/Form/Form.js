import React from "react";

function Form(props) {
  return (
    <form className="form" onSubmit={props.onSubmit}>
      <h2 className="form__title">{props.title}</h2>
      {props.children}
      <button type="submit" className="form__submit-button">
        {props.buttonText}
      </button>
    </form>
  );
}

export default Form;
