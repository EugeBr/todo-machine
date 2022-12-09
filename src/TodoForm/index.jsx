import React from "react";

function TodoForm() {
    const onCancel = () => {

    };
    const onSubmit = () => {

    };

    return (
        <form onSubmit={onSubmit}>
            <label htmlFor="">...</label>
            <textarea
                placeholder="Cortar cebolla"
            />
            <div>
                <button
                    type="button"
                    onClick={onCancel}
                >
                    Cancelar
                </button>
                <button
                    type="submit"
                >
                    Añadir
                </button>
            </div>
        </form>
    )
};

export { TodoForm };