import React, { useMemo } from "react";
import { Images } from "../../constants/images";
import "./index.css";

const FoodCard: React.FC<{ item: MenuItem }> = ({ item }): JSX.Element => {
  const Price = useMemo((): string => {
    return (item.precio * 18.12).toFixed(2);
  }, [item]);

  const nameWithoutSpaces = useMemo((): string => {
    return item.nombre.replace(/\s/g, "");
  }, [item]);

  return (
    <div className="foodCard">
      <img
        className="foodCard__img"
        src={Images.get(nameWithoutSpaces) || Images.get("default")}
        alt="imagen de comida y/o bebida"
      />
      <div className="Info">
        <strong>
          <h2>{item.nombre}</h2>
        </strong>
        <div>
          <p className="Description">{item.descripcion}</p>
          <p className="Price">${Price}mxn</p>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
