"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const ShopCard = () => {
  const [shops, setShops] = useState([]);

  useEffect(() => {
    const fetchShop = async () => {
      const response = await fetch("/api/orders");
      const data = await response.json();

      setShops(data);
    };

    fetchShop();
  }, []);

  return (
    <div className="">
      {shops.map((shop) => {
        <div key={shop.providerid}>
          {shop.shopname}adjfklafjweojfalkvskvnawoejwr
        </div>;
      })}
    </div>
  );
};

export default ShopCard;
