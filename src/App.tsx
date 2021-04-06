import React from "react";
import "./styles/_root.scss";
import iconLuxury from "./images/icon-luxury.svg";
import iconSedans from "./images/icon-sedans.svg";
import iconSuvs from "./images/icon-suvs.svg";
const data = [
  {
    brand: "Sedans",
    message:
      "Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.",
  },
  {
    brand: "SUVs",
    message:
      "Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.",
  },
  {
    brand: "Luxury",
    message:
      "Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.",
  },
];
function App() {
  const pickIcon = (brand: string) => {
    switch (brand) {
      case "Sedans":
        return iconSedans;
      case "SUVs":
        return iconSuvs;
      case "Luxury":
        return iconLuxury;
      default:
        return "brand not recognize";
    }
  };
  const card = (
    data: {
      brand: string;
      message: string;
    }[],
    pickIcon: (brand: string) => string
  ) => {
    return data.map((entry) => {
      return (
        <article className="card">
          <img src={pickIcon(entry.brand)} alt="" className="card__img" />
          <h2 className="card__title">{entry.brand}</h2>
          <p className="card__message">{entry.message}</p>
          <button className="card__button">Learn More</button>
        </article>
      );
    });
  };
  return <>{card(data, pickIcon)}</>;
}

export default App;
