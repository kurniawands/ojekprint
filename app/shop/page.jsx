"use client";

import { useEffect, useState } from "react";
import ShopCard from "@/components/ShopCard";

const Shop = () => {
  const [shops, setShops] = useState([]);

  useEffect(() => {
    const fetchShop = async () => {
      const response = await fetch("/api/shops", {
        method: "POST",
        body: JSON.stringify({
          limit: "100",
        }),
      });
      const data = await response.json();

      setShops(data);
    };

    fetchShop();
  }, []);

  return (
    <div className="my-8">
      <ShopCard items={shops} />
    </div>
  );
};

export default Shop;
