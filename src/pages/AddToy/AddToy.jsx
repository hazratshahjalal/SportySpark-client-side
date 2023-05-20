import React from 'react';
import { useForm } from "react-hook-form";


const AddToy = () => {

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => {
    console.log(data);
    reset(); // Reset the form after successful submission

  }


  return (
    <div className='container mx-auto py-12'>
      <h2 className="text-5xl font-semibold text-center pb-6">Add A Toy</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-lg mx-auto">
        <div className="mb-4">
          <label htmlFor="picture" className="block font-medium text-gray-700">Picture URL</label>
          <input type="text" id="picture" {...register('picture')} className="w-full border border-gray-700 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 lg:text-lg" />
        </div>

        <div className="mb-4">
          <label htmlFor="toyName" className="block font-medium text-gray-700">Toy Name</label>
          <input type="text" id="toyName" {...register('toyName')} className="w-full border border-gray-700 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 lg:text-lg" />
        </div>

        <div className="mb-4">
          <label htmlFor="sellerName" className="block font-medium text-gray-700">Seller Name</label>
          <input type="text" id="sellerName" {...register('sellerName')} className="w-full border border-gray-700 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 lg:text-lg" />
        </div>

        <div className="mb-4">
          <label htmlFor="sellerEmail" className="block font-medium text-gray-700">Seller Email</label>
          <input type="email"
            // value={user?.email}
            id="sellerEmail"
            {...register('sellerEmail')}
            className="w-full border border-gray-700 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 lg:text-lg" />
        </div>

        <div className="mb-4">
          <label htmlFor="subCategory" className="block font-medium text-gray-700">Sub-category</label>
          <select id="subCategory" {...register('subCategory')} className="w-full border border-gray-700 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 lg:text-lg">
            <option value="Remote Control Toys">Select Subcategory</option>
            <option value="Remote Control Toys">Remote Control Toys</option>
            <option value="Sports Gear">Sports Gear</option>
            <option value="Sports Equipment">Sports Equipment</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="price" className="block font-medium text-gray-700">Price</label>
          <input type="number" id="price" {...register('price')} className="w-full border border-gray-800 rounded-md shadow-lg focus:ring-indigo-500 focus:border-indigo-500 lg:text-lg" />
        </div>

        <div className="mb-4">
          <label htmlFor="rating" className="block font-medium text-gray-700">Rating</label>
          <input type="number" id="rating" {...register('rating')} className="w-full border border-gray-700 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 lg:text-lg" />
        </div>

        <div className="mb-4">
          <label htmlFor="quantity" className="block font-medium text-gray-700">Available Quantity</label>
          <input type="number" id="quantity" {...register('quantity')} className="w-full border border-gray-700 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 lg:text-lg" />
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="block font-medium text-gray-700">Detail Description</label>
          <textarea id="description" {...register('description')} className="w-full border border-gray-800 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 lg:text-lg" />
        </div>

        <div className="flex justify-end">
          <button type="submit" className="px-4 py-2 text-white bg-gray-700 w-full rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500">
            Submit
          </button>
        </div>
      </form>

    </div>
  );
};

export default AddToy;