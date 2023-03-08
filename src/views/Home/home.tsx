import React, { useEffect } from "react";
import useQuery from "../../hooks/useQuery/useQuery";
import FoodList from "../../components/FoodList/Index";
import "./index.css";

const Home: React.FC = (): JSX.Element => {
  const { data, isSuccess, loading } = useQuery(
    "https://3.140.212.226/pruebasAPI/menu.json"
  );
  const [food, setFood] = React.useState<MenuItem[]>([]);
  const [drinks, setDrinks] = React.useState<MenuItem[]>([]);

  useEffect((): void => {
    if ((data as RootObject).items) {
      setFood(
        (data as RootObject).items.filter(
          (item) => item.categoria === "alimento"
        )
      );
      setDrinks(
        (data as RootObject).items.filter((item) => item.categoria === "bebida")
      );
    }
  }, [data]);

  return (
    <div>
      <header className="header">Menú de alimentos</header>
      <div className="Lists">
        <div className="Food">
          <h4 className="h4">Alimentos</h4>
          <FoodList menu={food} />
        </div>
        <div className="Drink">
          <h4 className="h4">Bebidas</h4>
          <FoodList menu={drinks} />
        </div>
      </div>
    </div>
  );
};

export default Home;
