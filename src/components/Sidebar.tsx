import { useEffect, useState } from "react";

interface Product {
  category: string;
}

interface FetchResponse {
  products: Product[];
}

const Sidebar = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const [keywords] = useState<string[]>([
    "apple",
    "watch",
    "Fashion",
    "trend",
    "shoes",
    "shirt",
  ]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data: FetchResponse = await response.json();
        const uniqueCategories = Array.from(
          new Set(data.products.map((product) => product.category))
        );
        console.log(uniqueCategories);
      } catch (error) {
        console.error("Error fetching product", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="w-64 p-5 h-screen">
      <h1 className="text-2xl font-bold mb-10 mt-4">DreamLand Shop</h1>
    </div>
  );
};

export default Sidebar;
