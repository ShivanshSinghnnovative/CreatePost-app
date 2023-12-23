import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  async function fetchProductData() {
    setLoading(true);
    try {
      const data = JSON.parse(localStorage.getItem('productStorage')) || [];
      console.log(data.length)
      setPosts(data);
    } catch {
      console.log("unable to fetch data");
      setPosts([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchProductData();
  }, []);

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : posts.length >0 ? (
        <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h">
          {posts.map((product) => (
            <Product key={product.id} post={product} />
          ))}
        </div>
      ) : (
        <div className="flex justify-center -mt-10 text-xl font-bold items-center h-screen">No data Found Add Items</div>
      )}
    </div>
  );
};

export default Home;
