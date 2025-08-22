"use client";

import React, { useState } from "react";
import { SlCloudUpload } from "react-icons/sl";

const AddProduct = () => {
  const [file, setFile] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Earphone");
  const [price, setPrice] = useState("");
  const [dragActive, setDragActive] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
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
              dragActive
                ? "border-orange-500 bg-orange-600/10"
                : "border-gray-400"
            }`}
            onDragEnter={handleDrag}
            onDragOver={handleDrag}
            onDragLeave={handleDrag}
            onDrop={handleDrop}
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
          <div className="flex flex-col gap-1">
            <label className="text-base font-medium" htmlFor="product-name">
              Product Name
            </label>
            <input
              id="product-name"
              type="text"
              placeholder="Type here"
              className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40"
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
            />
          </div>

          <div className="flex flex-col gap-1">
            <label
              className="text-base font-medium"
              htmlFor="product-description"
            >
              Product Description
            </label>
            <textarea
              id="product-description"
              rows={4}
              className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40 resize-none"
              placeholder="Type here"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              required
            ></textarea>
          </div>

          <div className="flex gap-5 flex-wrap">
            <div className="flex flex-col gap-1 w-32">
              <label className="text-base font-medium" htmlFor="category">
                Category
              </label>
              <select
                id="category"
                className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40 h-[42px]"
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
              <label className="text-base font-medium" htmlFor="product-price">
                Product Price
              </label>
              <input
                id="product-price"
                type="number"
                placeholder="0"
                className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40 h-[42px]"
                onChange={(e) => setPrice(e.target.value)}
                value={price}
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="px-8 py-2.5 bg-orange-600 text-white font-medium rounded"
          >
            ADD
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
