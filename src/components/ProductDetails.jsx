import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addProduct } from '../redux/slices/ItemSlice';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const ProductDetails = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: '',
    price: '',
  });

  const { title, description, image, price } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const navigate = useNavigate();
  const isFormValid = title && description && image && price;
  const dispatch = useDispatch();

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    if (isFormValid) {
      const uniqueId = uuidv4();
      const newData = { ...formData, id: uniqueId };
      dispatch(addProduct(newData));
      navigate('/');
      toast.success("Add Product Successfully");
      setFormData({
        title: '',
        description: '',
        image: '',
        price: '',
      });
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-gray-100 rounded">
      <h2 className="text-2xl font-semibold mb-4">Product Details</h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={description}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
            Image
          </label>
          <input
            type="file"
            accept="image/*"
            id="image"
            name="image"
            onChange={handleImageChange}
            className="w-full px-3 py-2 border rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
            Price
          </label>
          <input
            type="number"
            id="price"
            name="price"
            value={price}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          />
        </div>

        <button
          type="button"
          onClick={handleSubmit}
          disabled={!isFormValid}
          className={`bg-blue-500 text-white py-2 px-4 rounded ${!isFormValid && 'opacity-50 cursor-not-allowed'}`}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ProductDetails;
