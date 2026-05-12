const foodCards = [{
    id:1,
    name:"Mangu",
    image:"",
    description:"Delicious mashed plantains",
    price:9.99},
    {
    id:2,
    name:"Sancocho",
    image:"",
    description:"Hearty Dominican stew with meat and vegetables",
    price:14.99
},
 {
    id:3,
    name:"Tostones",
    image:"",
    description:"Crispy fried plantains",
    price:5.99},
    {
    id:4,
    name:"Mofongo",
    image:"",
    description:"Mashed plantains with garlic and pork",
    price:12.99
}];

export function getFoodCards() {
    return foodCards;
}