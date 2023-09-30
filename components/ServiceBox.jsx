"use client";

import { useEffect, useState } from "react";

const ServiceBox = ({ provider }) => {
  console.log(provider);
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchService = async () => {
      const response = await fetch("/api/service", {
        method: "POST",
        body: JSON.stringify({
          providerid: provider,
        }),
      });
      const data = await response.json();

      setServices(data);
    };

    fetchService();
  }, []);

  return (
    <div>
      {services.map((service) => (
        <div key={service.serviceid}>{service.name}</div>
      ))}
    </div>
  );
};

export default ServiceBox;
