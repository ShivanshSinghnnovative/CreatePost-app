import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { Route, Routes } from "react-router";
import ProductDetails from "./components/ProductDetails";


const App = () => {
  return (
   <div>
     <div className="bg-slate-900">
      <NavBar/>
     </div>
     <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/cart" element={<Cart/>}/>
       <Route path="/additem" element={<ProductDetails/>}/>
     </Routes>
   </div>
  );
}

export default App;