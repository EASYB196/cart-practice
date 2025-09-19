import image1 from "../images/Margherita.webp";
import image2 from "../images/Pepperoni.jpg";
import image3 from "../images/BBQ Chicken.jpg";
import image4 from "../images/Veggie Supreme.jpg";
import image5 from "../images/Hawaiian-pizza.jpg";
import image6 from "../images/Cheesy Delight.jpg";
import image7 from "../images/Chicken Tikka.jpg";
import image8 from "../images/Meat Feast.jpg";
import image9 from "../images/Spinach & Feta.jpg";
import image10 from "../images/Mexican Heat.jpg";

const pizzaData = [
  {
    id: 1,
    name: "Margherita",
    price: 12.99,
    image: image1,
    desc: "Classic delight with 100% real mozzarella cheese.",
    link: "/Margherita",
  },
  {
    id: 2,
    name: "Pepperoni",
    price: 14.99,
    image: image2,
    desc: "Loaded with spicy pepperoni and cheese.",
    link: "/Pepperoni",
  },
  {
    id: 3,
    name: "BBQ Chicken",
    price: 15.99,
    image: image3,
    desc: "Grilled chicken with smoky BBQ sauce and onions.",
    link: "/BBQChicken",
  },
  {
    id: 4,
    name: "Veggie Delight",
    price: 13.49,
    image: image4,
    desc: "Fresh veggies with tomato sauce and cheese.",
    link: "/Veggie Delight",
  },
  {
    id: 5,
    name: "Hawaiian",
    price: 14.49,
    image: image5,
    desc: "Tropical mix of pineapple and ham on cheese.",
    link: "/Hawaiian",
  },
  {
    id: 6,
    name: "Cheesy Delight",
    price: 13.99,
    image: image6,
    desc: "Loaded with 3 types of cheese for extra indulgence.",
    link: "/Cheese Burst",
  },
  {
    id: 7,
    name: "Tandoori Paneer",
    price: 14.79,
    image: image7,
    desc: "Indian-style paneer with spicy tandoori flavors.",
    link: "/Tandoori Paneer",
  },
  {
    id: 8,
    name: "Meat Lovers",
    price: 16.99,
    image: image8,
    desc: "A feast of bacon, beef, ham, and sausage.",
    link: "/Meat Lovers",
  },
  {
    id: 9,
    name: "Spinach Feta",
    price: 13.89,
    image: image9,
    desc: "Creamy feta with fresh spinach and garlic.",
    link: "/Spinach Feta",
  },
  {
    id: 10,
    name: "Mexican Wave",
    price: 15.49,
    image: image10,
    desc: "Mexican spices, jalapeños, corn, and cheese.",
    link: "/Mexican Wave",
  },
];

export default pizzaData;
