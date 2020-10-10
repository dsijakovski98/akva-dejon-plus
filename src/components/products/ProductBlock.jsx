import React from "react";
import {motion} from "framer-motion";

function ProductBlock(props) {
  const divId = props.divId;
  const title = props.title;
  const images = props.images;
  const initial = props.orientation === "left" ? "-100vw" : "100vw";
  // const bottleCorner = props.orientation === "left" ? "left" : "right";

  return (
    <motion.div
      className={`product-block ${divId}`}
      onMouseEnter={() => props.toggleBg(divId, true)}
      onMouseLeave={() => props.toggleBg(divId, false)}
      initial={{x: initial}}
      animate={{x: 0, animationFillMode: "forwards"}}
      // transition={{type: "spring"}}
      whileHover={{scaleX: 1.2}}
    >
      <motion.div className="child"
      whileHover={{scaleX: 1/1.2}}>
        <div className="product-body">
          <h1 className="product-title">{title} производи</h1>
        </div>
        <div className="bottles">
          <img src={images[0]} alt="bottle img" />
          <img src={images[1]} alt="bottle img" />
          <img src={images[0]} alt="bottle img" />
        </div>
      </motion.div>
    </motion.div>
  );
}

export default ProductBlock;
