import React from "react";
import FoodCard from "../FoodCard";
import "./index.css";

const FoodList: React.FC<{ menu: MenuItem[] }> = ({ menu }): JSX.Element => {
  if (!menu) {
    return <div>Loading...</div>;
  }
  return (
    <div className="FoodList">
      {menu.map((items: MenuItem) => (
        <FoodCard key={items.nombre} item={items} />
      ))}
    </div>
  );
};

export default FoodList;
