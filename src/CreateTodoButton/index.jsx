import React from "react";
import "./CreateTodoButton.css";

function CreateTodoButton() {
 const onClickButton = (msn) => {
    alert(msn);
 }

    return (
        <button className="CreateTodoButton"
        onClick={() => onClickButton('Aqui se deberia abrir el modal')}
        >
            +
        </button>
    );
}

export { CreateTodoButton };