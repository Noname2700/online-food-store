function FoodCard({ name, price, ingredients, imageUrl }: { name: string; price: number; ingredients: string[]; imageUrl: string }) {
    return (
        <div className= "food-card">
            <button className="food-card__addbutton" type = "button">Add to Cart</button>
            <img src={imageUrl} alt={name} className="food-card__image" />
            <h2 className="food-card__name">{name}</h2>
            <p className="food-card__price">${price.toFixed(2)}</p>
            <ul className="food-card__ingredients">
                {ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>
        </div>
    )
}

export default FoodCard;