import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";


export const GifGrid = ({ category }) => {

    const { images, isLoading  } = useFetchGifs ( category );

    return(
        <>
            <h3> { category } </h3>
            {
                isLoading && (<h2>Cargando...</h2>)//And lógico
            }

            <div className="card-grid">
                    {
                        images.map( ( image ) => (
                            <GifItem 
                            key={ image.id }
                            //Traemos todas las propiedades de image como props
                            { ...image }
                            />
                        ))
                    }
            </div>
        </>
    )
}