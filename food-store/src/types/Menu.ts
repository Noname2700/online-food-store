import { FoodItem } from "./FoodItem";
import { Category } from "./Category";

export interface Menu {
  restaurantId: string;
  items: FoodItem[];
  categories: Category[];
}
