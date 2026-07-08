import { ItemDetailProps } from "../../types/FoodItem";

function ItemDetail({ foodItem }: ItemDetailProps) {
  return (
    <div>
      <h1>Food Item Detail</h1>
      <p>ID: {foodItem.id}</p>
      <p>Name: {foodItem.name}</p>
      <p>Price: ${foodItem.price}</p>
      <p>Description: {foodItem.description}</p>
      <p>
        <img src={foodItem.imageUrl} alt={foodItem.name} />
      </p>
    </div>
  );
}

export default ItemDetail;
