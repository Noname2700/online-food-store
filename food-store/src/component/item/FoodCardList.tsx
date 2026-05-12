import FoodCard from "./FoodCard";
import { useState } from "react";
import { FoodCardListProps } from "../../types/food";

function FoodCardList({ foodItems }: FoodCardListProps) {
  const [visibleCards, setVisibleCards] = useState(6);

  return (
    <div>
      <ul className="food-card__list">
        {foodItems.slice(0, visibleCards).map((item) => (
          <li key={item.id}>
            <FoodCard
              id={item.id}
              name={item.name}
              description={item.description}
              price={item.price}
              imageUrl={item.imageUrl}
            />
          </li>
        ))}
      </ul>
      {visibleCards < foodItems.length && (
        <button onClick={() => setVisibleCards(visibleCards + 3)}>
          Load More
        </button>
      )}
    </div>
  );
}

export default FoodCardList;
