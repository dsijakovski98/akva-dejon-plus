import React from "react";
import ProductBlock from "../products/ProductBlock";
import useGetProductBlock from "../../hooks/useGetProductBlock";

function HomePage() {
  const prehranbeni = useGetProductBlock(".prehranbeni");
  const hemiski = useGetProductBlock(".hemiski");

  const noBg = (ref, state) => {
    if (!hemiski || !prehranbeni) {
      return;
    }
    switch (ref) {
      case "prehranbeni":
        hemiski.classList.toggle("transparent-bg", state);
        return;
      case "hemiski":
        prehranbeni.classList.toggle("transparent-bg", state);
        return;
      default:
        return;
    }
  };

  return (
    <div className="main-blocks">
      <ProductBlock
        toggleBg={noBg}
        divId={"prehranbeni"}
        title={"Прехранбени"}
      />
      <ProductBlock toggleBg={noBg} divId={"hemiski"} title={"Хемиски"} />
    </div>
  );
}

export default HomePage;
