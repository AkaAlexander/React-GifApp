import { useState } from "react"

//Componente
export const AddCategory = ({ onNewCategory }) => {
    //UseState del valor del input
    const [inputValue, setInputValue] = useState('')

    const onInputValue = (event) => {
        setInputValue(event.target.value)
    }

    //Metodo que Recoge el texto del input del formulario al hacer submit
    const onSubmit = ( event ) => {
        event.preventDefault();

        //Se establece la nueva categoria
        onNewCategory( inputValue.trim() );
        //Setea el valor a vacio cuando se hace Submit
        setInputValue('');
    }

    return(
        <form onSubmit={ (event) => onSubmit(event) }>
            <input
                type="text"
                placeholder="Buscar Gifs"
                value={ inputValue }
                onChange={ onInputValue }
            />
        </form>
    )
}