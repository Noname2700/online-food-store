import { useState } from "react";
import RemoveItemCartButton from "../item/RemoveItemCartButton";

function CartItem() {

const [cartItem, setCartItem] = useState([
    { id: "1", name: "Sancocho" }
]);

 const hanldeRemove = (id: string) => {
    setCartItem((prev) => prev.filter((item) => item.id !== id));
 }

    return (
        <div>
            {cartItem.map((item) => (
                <div key={item.id}>
                    <span>{item.name}</span>
                    <RemoveItemCartButton itemId={item.id} onRemove={hanldeRemove} />
                </div>
            ))}
        </div>
    );
}

export default CartItem;