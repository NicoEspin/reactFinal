import React from "react";
//components
import { ItemListContainer } from "../../components/ItemListContainer/ItemListContainer";
import { CategoryFilter } from "../../components/CategoryFilter/CategoryFilter";
export const HomePage = ({ addToCart }) => {
  return (
    <>
      <CategoryFilter></CategoryFilter>
      <ItemListContainer addToCart={addToCart} />
    </>
  );
};
