"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import ShopCard from "./ShopCard";

const ShopCardList = () => {
  const [shops, setShops] = useState([]);

  useEffect(() => {
    const fetchShop = async () => {
      const response = await fetch("/api/shops", {
        method: "POST",
        body: JSON.stringify({
          limit: "4",
        }),
      });
      const data = await response.json();

      setShops(data);
    };

    fetchShop();
  }, []);

  return (
    <div className="flex justify-center">
      <ShopCard items={shops} />
    </div>
  );
};

export default ShopCardList;
