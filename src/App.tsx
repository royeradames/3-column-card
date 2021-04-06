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
  const pickIconBackground = (brand: string) => {
    switch (brand) {
      case "Sedans":
        return { icon: iconSedans, background: "card--sedans-background" };
      case "SUVs":
        return { icon: iconSuvs, background: "card--suvs-background" };
      case "Luxury":
        return { icon: iconLuxury, background: "card--luxury-background" };
      default:
        return { icon: "Brand not found", background: "" };
    }
  };

  const card = (
    data: {
      brand: string;
      message: string;
    }[],
    pickIconBackground: (
      brand: string
    ) => {
      icon: string;
      background: string;
    }
  ) => {
    return data.map((entry) => {
      const brandData = pickIconBackground(entry.brand);
      return (
        <article
          className={`card ${
            brandData?.background ? brandData.background : ""
          }`}
        >
          <img src={brandData?.icon} alt="" className="card__img" />
          <h2 className="card__title">{entry.brand}</h2>
          <p className="card__message">{entry.message}</p>
          <button className="card__button">Learn More</button>
        </article>
      );
    });
  };
  return <>{card(data, pickIconBackground)}</>;
}

export default App;
