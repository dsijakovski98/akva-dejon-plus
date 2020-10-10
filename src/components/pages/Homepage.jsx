import React from "react";
import ProductBlock from "../products/ProductBlock";
import useGetProductBlock from "../../hooks/useGetProductBlock";
import vinegarBottle from "../../images/bottles/vinegar-bottle.png";
import oilBottle from "../../images/bottles/oil-bottle.png";
import antifreeze1 from "../../images/bottles/antifreeze-1.png";


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
        orientation={"left"}
        images={[oilBottle, vinegarBottle]}
      />
      <ProductBlock toggleBg={noBg} divId={"hemiski"} title={"Хемиски"} orientation={"right"} images={[antifreeze1, antifreeze1]} />
    </div>
  );
}

export default HomePage;
