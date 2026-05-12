interface CartItem {
    id: string;
    name: string;
}

export interface RemoveItemCartButtonProps {
  itemId: string;
  onRemove:(id: string) => void;
}


export default CartItem;