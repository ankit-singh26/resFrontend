import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { data } from "../restApi.json";

const MenuPage = () => {
  const dishes = data[0].dishes; 

  return (
    
      <section className="notFound">
        <div className="container">
        <div className="menu-page">
      <h1>Our Menu</h1>
      <div className="menu-items">
        {dishes.map((dish) => (
          <div key={dish.id} className="menu-item">
            <img src={dish.image} alt={dish.title} className="menu-item-image" />
            <h3>{dish.title}</h3>
            <p>{dish.category}</p>
          </div>
        ))}
      </div>
    
          <Link to={"/"}>
            Back to Home <HiOutlineArrowNarrowRight />
          </Link>
        </div>
        </div>
      </section>
    
  );
};

export default MenuPage;
