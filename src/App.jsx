import { useState } from "react";
import './App.css';
import ProductCard from "./ProductCard";
function App() {
  const data = [
    {
      productImage:
        "https://www.skechers.in/on/demandware.static/-/Sites-skechers_india/default/dw17940ed5/images/large/195969748763-1.jpg",
      productName: "Sketchers",
    },
    {
      productImage:
        "https://www.skechers.in/on/demandware.static/-/Sites-skechers_india/default/dw17940ed5/images/large/195969748763-1.jpg",
      productName: "Nike",
    },
    {
      productImage:
        "https://www.skechers.in/on/demandware.static/-/Sites-skechers_india/default/dw17940ed5/images/large/195969748763-1.jpg",
      productName: "Puma",
    },
    {
      productImage:
        "https://www.skechers.in/on/demandware.static/-/Sites-skechers_india/default/dw17940ed5/images/large/195969748763-1.jpg",
      productName: "USP",
    },
  ];

  const [product, setProduct] = useState([]);
  const [inCart, setInCart] = useState(0);

  // dummy dely
  setTimeout(() => {
    setProduct(data);
  }, 1000);

  return(
    <div className='app'>
    <TopBar/>
    <Sidebar/>
    <Main/>
    </div>
    
  );
}

export default App;
