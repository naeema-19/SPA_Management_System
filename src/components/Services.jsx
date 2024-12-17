import React from "react";
import { salonData } from "../assets/assets";
const SalonServices = () => {
  return (
    <div className="salon-services">
      <h1 className='text-3xl font-medium'>Services Price List</h1>
      <br></br>
      {salonData.map((category, index) => (
        <div key={index} className="category-section">
          <h2 className="text-2xl font-medium">{category.category}</h2>
          <table className="responsive-table">
            <thead>
              <tr>
                <th>Service</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {category.services.map((service, idx) => (
                <tr key={idx}>
                  <td>{service.name}</td>
                  <td>{service.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default SalonServices;
