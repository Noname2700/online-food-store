export interface CartItem {
    id: string;
    foodId: string;
    name: string;
    quantity: number;
    price: number;
    
}

export interface RemoveItemCartButtonProps {
  itemId: string;
  onRemove:(id: string) => void;
}


