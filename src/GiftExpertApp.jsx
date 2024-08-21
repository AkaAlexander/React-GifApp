import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GiftExpertApp = () => {
    //UseState para las categorias
    const [categories, setCategories] = useState(['Dragon Ball','One Piece']);

    const onAddCategory = ( newCategory ) => {
        //Comprobacion si existe
        if(categories.includes(newCategory)) return;
        
        //Almacenamos la nueva categoria en un nuevo array
        setCategories([ newCategory,...categories ])
        
    }

    return(
        <>
            {/*titulo*/}
            <h1>Gif App</h1>

            {/*Input*/}
            <AddCategory 
                //setCategories ={ setCategories }
                onNewCategory = { onAddCategory }
            />

            {/* <button onClick={ onAddCategory }>Agregar</button> */}

            <ol>
                {
                    categories.map( (category) => (
                        <GifGrid 
                            key={category} 
                            category={ category }
                        />    
                    ))
                }
            </ol>
        </>

    )

}