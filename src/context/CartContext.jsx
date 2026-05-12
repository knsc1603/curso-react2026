import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

// CREAMOS EL CONTEXTO
const CartContext = createContext();

// CREAMOS EL CUSTOM HOOK, PARA USAR EL CONTEXTO CREADO
export const useCart = () => {
    const context = useContext(CartContext);

    if(!context){
        throw new Error("useCart debe usarse dentro de un CartProvider"); // SI HAY UN ERROR, TERMINA ACA
    }

    return context;
};

// CREAMOS EL PROVEEDOR
export const CartProvider = ({children}) => {
    const navigate = useNavigate();
    const [cart, setCart] = useState([]);

    const isInCart = (item) => {
        // some(): existe o no existe? retorna booleano
        const inCart = cart.some(element => element.id === item.id);

        return inCart;
    };

    // AGREGAR AL CARRITO
    const agregarItem = (item) => { 
        
        if(isInCart(item)){ // SI EL PRODUCTO YA EXISTE
            alert("El producto ya existe en el carrito");
            return;
        }

        // SINO
        setCart([...cart, item]); // LO AGREGO AL CARRITO 
        alert("El producto fue agregado al carrito");
    };

    // ELIMINAR DEL CARRITO
    const eliminarItem = (id) => {
        const filtrarCart = cart.filter(element => element.id !== id) // FILTRO TODOS LOS ID QUE NO SON IGUALES AL QUE VIENE POR PARAMETRO, PARA QUEDARME CON LOS DIFERENTES
        setCart(filtrarCart);
        alert("El producto fue eliminado");
    }; 

    // VACIA EL CARRITO
    const limpiarCart = () => {
        setCart([]);
    };

    // TOTAL DE ITEMS EN EL CARRITO (caso sin quantity)
    const getTotalItems = () => {
        return cart.length;
    };

    // TOTAL A PAGAR
    const getCartTotal = () => {
        return cart.reduce((acum, element) => acum + element.price, 0);
    };

    // CHECKOUT
    const checkout = () => {
        alert("Su compra ha sido realizada");
        limpiarCart();
        navigate("/"); // LE DIGO QUE VAYA AL MAIN
    }; 
    
    // LOS COMPORTAMIENTOS SE COLOCAN ACA, PARA COMPARTIR EL CONTEXTO 
    const values = {checkout, getCartTotal, getTotalItems, eliminarItem, agregarItem, limpiarCart}; 

    return <CartContext.Provider value={values}> {children} </CartContext.Provider>
};