import React, { useState } from "react";

export default function RegisterProduct() {
  const [catgory, setCategory] = useState("bags");
  return (
    <div>
      <h1 className="text-center bg-red-200 uppercase font-mono ">
        Product Registration
      </h1>
      <div className="w-[90%] md:w-[600px] h-[400px] bg-green-400 m-auto mt-3 p-3 rounded-3xl">
        <form className="  px-4 w-full">
          <p>Category</p>
          <div className="font-mono space-x-3">
            <input type="radio" name="category" id="bags" defaultChecked /> Bags
            <input type="radio" name="category" id="shoes" /> Shoes and Sandals
            <input type="radio" name="category" id="clothes" /> Clothes
            <input type="radio" name="category" id="other" /> Others
          </div>

          <p>Brand Name</p>
          <input
            type="text"
            name="produceName"
            placeholder="Product name"
            className="w-full px-3"
          />
          <p>Product Name</p>
          <input
            type="text"
            name="produceName"
            placeholder="Product name"
            className="w-full px-3 "
          />
          <p>Desciption</p>
          <input
            type="text"
            name="produceName"
            placeholder="Product name"
            className="w-full px-3 "
          />
          <p>Price</p>
          <input
            type="number"
            name="produceName"
            placeholder="Product price"
            className="w-full px-3"
          />
          {catgory !== "bags" && <input name="size" type="checkbox" id="" />}
          <button
            type="submit"
            className="w-full bg-red-300 hover:bg-blue-500 mt-[20px]"
          >
            Register Product
          </button>
        </form>
      </div>
    </div>
  );
}
