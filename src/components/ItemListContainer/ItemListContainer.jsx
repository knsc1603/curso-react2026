import { useEffect, useState } from "react"
import { ItemList } from "../ItemList/ItemList";

export const ItemListContainer = () => {
    const [products, setProducts] = useState([]); // LO INICIALIZO CON ARRAY VACIO
    const [loading, setLoading] = useState(true); // INSTANCIA DE UN CARGANDO 

    useEffect(() => {
        // setLoading(true) // SIRVE PARA FILTRAR 

        fetch("/data/productos.json") // COLOCO LA URL DE LA API PARA TRAER LOS DATOS
        .then((respuesta) => respuesta.json()) // RECIBO LA RESPUESTA, Y LO TRANSFORMO A CODIGO JS
        .then((datos) => setProducts(datos)) // UNA VEZ QUE LO TENGO EN CODIGO JS, LO UTILIZO PARA EL SET
        .catch((error) => console.log(error))
        .finally(() => {
            setLoading(false);
        })

    }, []); //LO UTILIZO UNA UNICA VEZ, CUANDO SE MONTA 

    if(loading){
        return (
            <p>Cargando...</p>
        )
    }
    
    return (
        <section>
            <ItemList products={products} /> {/* LE PASO EL ESTADO "PRODUCTS", NO LE PASO EL ARRAY */}
        </section>
    )
};