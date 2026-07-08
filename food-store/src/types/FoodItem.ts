export interface FoodItem {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
}

export interface ItemDetailProps {
  foodItem: FoodItem;
}

export interface FoodCardListProps {
  foodItems: FoodItem[];
}

