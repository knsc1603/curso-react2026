import { Link } from "react-router-dom";
import { Item } from "../Item/Item";
import "./ItemList.css";

export const ItemList = ({products}) => {
    
    if(!products.length){
        return <p>¡Lo sentimos! No hay productos</p>
    }

    return (
        <div className="products-container">
            {products.map((cadaProduct) => (
                <Link to={`/product/${cadaProduct.id}`} key={cadaProduct.id}> 
                    <Item {...cadaProduct} />
                </Link>
            ))}
        </div>
    )
};