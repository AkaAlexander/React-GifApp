import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs'

//Custom hook donde recogemos las imagenes y retornamos
//propiedades que deseamos
export const useFetchGifs = ( category ) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async() => {
        //Recogemos los datos de la api y los seteamos en la variable
        const newImage = await getGifs( category );
        setImages(newImage);
        setIsLoading(false);
    }

    useEffect(() => {
        getImages();
    }, [])

  return {
    images: images,
    isLoading: isLoading
  }
}

