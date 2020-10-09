import React from "react";

function ProductBlock(props) {
  const divId = props.divId;
  const title = props.title;
  return (
    <div
      className={`product-block ${divId}`}
      onMouseEnter={() => props.toggleBg(divId, true)}
      onMouseLeave={() => props.toggleBg(divId, false)}
    >
      <div className="child">
        <div className="product-body">
          <h1 className="product-title">{title} производи</h1>
        </div>
        <div className="bottles">
          {/* <img src={img1} alt="bottle img" />
          <img src={img2} alt="bottle img" />
          <img src={img1} alt="bottle img" /> */}
        </div>
      </div>
    </div>
  );
}

export default ProductBlock;
