import AddToCartButton from "./AddToCartButton";
import { FoodItem} from "../../types/food";

function FoodCard({ name, price, description, imageUrl}: FoodItem) {
  return (
    <div className="food-card">
      <h2>{name}</h2>
      <img src={imageUrl} alt={name} />
      <p>{description}</p>
      <p>Price: ${price.toFixed(2)}</p>
      <AddToCartButton />
    </div>
  );
}

export default FoodCard;
