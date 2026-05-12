import { useCart } from "../../context/CartContext";
import { Item } from "../Item/Item"

export const ItemDetail = ({ item }) => {
    const {agregarItem} = useCart   ();

    return (
        <Item {...item}>
            <button className="btn-primary" onClick={() => agregarItem(item)} >Agregar al carrito</button>
        </Item>
    )
}