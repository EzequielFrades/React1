import { addDoc, collection } from "firebase/firestore";
import { db } from "C:\Users\Usuario\Desktop\React1\React\src\config\Configfirebase.js";
   
    const products = [
      {
        name: "Chocolinas", 
        img: "https://th.bing.com/th/id/OIP.uA4_1O50NT1wPP0bG5pVAAHaE8?rs=1&pid=ImgDetMainS", 
        price: 120, 
        category: "golosinas", 
        description: "Galletitas de chocolate",
        age: "Todos",
        size: "200 gr",
        brand: "Chocolinas Co.",
        weight: "200 gr",
        stock: 20
      },
      {
        name: "Malvaviscos Deluxe", 
        img: "https://th.bing.com/th/id/R.547f830d8bb42d6e239304dd105df8a4?rik=ne5uPWWY2U73gQ&pid=ImgRaw&r=0S", 
        price: 250, 
        category: "golosinas", 
        description: "Malvaviscos cubiertos de chocolate",
        age: "Todos",
        size: "150 gr",
        brand: "Sweet Delights",
        weight: "150 gr",
        stock: 15
      },
      {
        name: "Gomitas Frutales", 
        img: "https://th.bing.com/th/id/OIP.I9V1IfjFan-tlTXj5zL4EwHaHa?rs=1&pid=ImgDetMain", 
        price: 80, 
        category: "golosinas", 
        description: "Gomitas de frutas surtidas",
        age: "Todos",
        size: "250 gr",
        brand: "Frutitas Ricas",
        weight: "250 gr",
        stock: 30
      },
      {
        name: "Paletas de Caramelo", 
        img: "https://th.bing.com/th/id/OIP.dViNbGoWMP7bslyaIijLhwHaFP?rs=1&pid=ImgDetMain", 
        price: 150, 
        category: "golosinas", 
        description: "Paletas de caramelo de colores",
        age: "Todos",
        size: "Pack de 10",
        brand: "Dulce Encanto",
        weight: "200 gr",
        stock: 25
      },
      {
        name: "Barra de Chocolate Blanco", 
        img: "https://th.bing.com/th/id/OIP.rmqKUWBdTIaCCV7IodMaYgHaGw?rs=1&pid=ImgDetMain", 
        price: 180, 
        category: "golosinas", 
        description: "Barra de chocolate blanco premium",
        age: "Todos",
        size: "100 gr",
        brand: "ChocoBliss",
        weight: "100 gr",
        stock: 18
      }
    ];
    

  export const seedProducts = () => {
    products.forEach((product) => {
      addDoc(collection(db, "products"), product);
    });
  };