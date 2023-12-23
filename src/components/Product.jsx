import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { add, remove } from "../redux/slices/CartSlice";
import { FcDeleteDatabase } from 'react-icons/fc';
import { deleteItem } from "../redux/slices/ItemSlice"
import { useEffect, useState } from "react";

const Product = ({ post }) => {
   const { cart } = useSelector((state) => state);
   const dispatch = useDispatch();
   const [quantity, setQuantity] = useState(1);
   const addToCart = () => {
      dispatch(add(post));
      toast.success("Item Added to Cart")
   }
   const deleteProduct = () => {
      dispatch(deleteItem(post.id));
      dispatch(remove(post.id));
      toast.success("Delete SuessFully")
      window.location.reload();
    }
   const removeFromCart = () => {
      dispatch(remove(post.id));
      toast.error("Item Removed From Cart")
   }
   const handleQuantityChange = (e) => {
      const newQuantity = parseInt(e.target.value, 10);
      setQuantity(newQuantity);
   }

   return (
    <div className="flex flex-col items-center justify-between hover:scale-110 transition duration-300 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl  shadow-xl hover:shadow-2xl">
       <div>
            <p className="text-gray-700 font-semibold text-2xl text-left truncate w-40 mt-1 ">{post.title}</p>
         </div>
         <div>
            <p className="w-40 text-gray-400 font-normal text-xs text-left ">{post.description.split(" ").slice(0, 10).join(" ") + "..."}</p>
         </div>
         <div className="h-[180px]">
            <img src={post.image} className="h-full w-full " />
         </div>
         <div className="flex justify-between w-full ">
            <div>
               <p className="text-green-600 font-semibold ">${post.price}</p>
            </div>
               {
               cart.some((p) => p.id == post.id) ?
                  (<div></div>) :
                  ( <div className="flex items-center gap-2">
                     <label htmlFor="quantity">Quantity</label>
               <select
                  id="quantity"
                  name="quantity"
                  value={quantity}
                  onChange={handleQuantityChange}
                  className="border rounded px-2 py-1"
               >
                  {[1, 2, 3, 4, 5].map((value) => (
                     <option key={value} value={value}>
                        {value}
                     </option>
                  ))}
               </select>
               </div>)
            }
            
         </div>
         <div className="flex justify-between w-full">
           
            <div className='bg-red-300 w-8 h-8 mr-10 rounded-full' onClick={deleteProduct}>
              <div className='flex m-auto mt-2 justify-center items-center cursor-pointer'><FcDeleteDatabase /></div>
            </div>
            {
               cart.some((p) => p.id == post.id) ?
                  (<button className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in "
                  onClick={removeFromCart}>
                     <p>Remove Item</p>
                  </button>) :
                  (<button className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in " onClick={addToCart}>
                     <p>Add Item</p>
                  </button>)
            }
         </div>

      </div>
   );
}

export default Product;
