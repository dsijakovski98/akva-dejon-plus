const { useState, useEffect } = require("react");

const useGetProductBlock = (productBlock) => {
  const [block, setBlock] = useState(null);

  useEffect(() => {
    setBlock(document.querySelector(productBlock));
  }, [productBlock]);

  return block;
};

export default useGetProductBlock;
