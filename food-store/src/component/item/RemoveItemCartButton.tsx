import { RemoveItemCartButtonProps } from "@/src/types/cartItem";

function RemoveItemCartButton({ itemId, onRemove }: RemoveItemCartButtonProps) {
  const handleClickRemove = () => {
    onRemove(itemId);
  };

  return (
    <button onClick={handleClickRemove}>
      Remove
    </button>
  );
}

export default RemoveItemCartButton;
