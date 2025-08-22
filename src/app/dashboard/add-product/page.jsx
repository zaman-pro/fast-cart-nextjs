"use client";

import React, { useState } from "react";
import { SlCloudUpload } from "react-icons/sl";
import { useRouter } from "next/navigation";
import addProduct from "@/app/actions/products/addProduct";

const AddProduct = () => {
  const [file, setFile] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Earphone");
  const [price, setPrice] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!name || !description || !price) {
      setError("All fields are required");
      return;
    }

    setLoading(true);
    try {
      const productData = {
        name,
        description,
        category,
        price: Number(price),
        image: file ? file.name : null, // এখন শুধু filename রাখলাম
      };

      const result = await addProduct(productData);

      setSuccess("Product added successfully!");
      setName("");
      setDescription("");
      setCategory("Earphone");
      setPrice("");
      setFile(null);

      // redirect
      setTimeout(() => router.push("/products"), 1000);
    } catch (err) {
      console.error(err);
      setError("Failed to add product");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex-1 min-h-screen flex flex-col justify-between">
      <form
        onSubmit={handleSubmit}
        className="md:p-10 p-4 grid md:grid-cols-[200px_1fr] gap-8 items-start"
      >
        {/* Left: Image Upload */}
        <div>
          <p className="text-base font-medium">Product Image</p>
          <div
            className={`mt-2 w-40 h-40 flex items-center justify-center border-2 border-dashed rounded cursor-pointer transition ${
              file ? "border-orange-500" : "border-gray-400"
            }`}
          >
            <label
              htmlFor="imageUpload"
              className="w-full h-full flex items-center justify-center"
            >
              <input
                onChange={(e) => setFile(e.target.files[0])}
                type="file"
                id="imageUpload"
                hidden
              />
              {file ? (
                <img
                  src={URL.createObjectURL(file)}
                  alt="Preview"
                  className="w-full h-full object-cover rounded"
                />
              ) : (
                <div className="flex flex-col items-center text-gray-500">
                  <SlCloudUpload className="text-3xl mb-1" />
                  <p className="text-sm">Click or drag image</p>
                </div>
              )}
            </label>
          </div>
        </div>

        {/* Right: Form Fields */}
        <div className="space-y-5 w-full">
          {error && <p className="text-red-600">{error}</p>}
          {success && <p className="text-green-600">{success}</p>}

          <div className="flex flex-col gap-1">
            <label className="text-base font-medium">Product Name</label>
            <input
              type="text"
              placeholder="Type here"
              className="outline-none py-2 px-3 rounded border border-gray-500/40"
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-base font-medium">Product Description</label>
            <textarea
              rows={4}
              className="outline-none py-2 px-3 rounded border border-gray-500/40 resize-none"
              placeholder="Type here"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              required
            ></textarea>
          </div>

          <div className="flex gap-5 flex-wrap">
            <div className="flex flex-col gap-1 w-32">
              <label className="text-base font-medium">Category</label>
              <select
                className="outline-none py-2 px-3 rounded border border-gray-500/40 h-[42px]"
                onChange={(e) => setCategory(e.target.value)}
                value={category}
              >
                <option value="Earphone">Earphone</option>
                <option value="Headphone">Headphone</option>
                <option value="Watch">Watch</option>
                <option value="Smartphone">Smartphone</option>
                <option value="Laptop">Laptop</option>
                <option value="Camera">Camera</option>
                <option value="Accessories">Accessories</option>
              </select>
            </div>
            <div className="flex flex-col gap-1 w-32">
              <label className="text-base font-medium">Product Price</label>
              <input
                type="number"
                placeholder="0"
                className="outline-none py-2 px-3 rounded border border-gray-500/40 h-[42px]"
                onChange={(e) => setPrice(e.target.value)}
                value={price}
                required
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="px-8 py-2.5 bg-orange-600 text-white font-medium rounded disabled:opacity-50"
          >
            {loading ? "Adding..." : "ADD"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
