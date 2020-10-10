import React, { useRef, useState } from 'react';
import NavLink from "./NavLink";
import {Link} from "react-router-dom";
import {motion} from "framer-motion";
import logo from "../../../images/akva-dejon-logo-transparent.png";

const NavLinks = React.forwardRef((props,ref) => {
    const productListRef = useRef(null);
    const [rotateAngle, setRotateAngle] = useState(360);

    const newRotateAngle = () => {
      const angle = Math.random()  < 0.5 ? 360 : -360;
      setRotateAngle(angle);
    }


    return (
        <motion.ul className="nav-links" ref={ref}
        initial={{opacity: 0, y:-100}}
        animate={{opacity: 1, y:0}}
        // transition={{type:"spring"}}
        >
        <NavLink location="/akva-dejon-plus/home" name="Почетна" />

        {/* Products NavLink */}
        <NavLink
          location="/akva-dejon-plus/products"
          name="Производи"
          id="products"
          products={productListRef}
        >
          <ul className="products-list" ref={productListRef}>
            <li>
              <Link to="/akva-dejon-plus/products/ch">
                Хемиски производи
              </Link>
            </li>

            <li>
              <Link to="/akva-dejon-plus/products/hr">
                Прехранбени производи
              </Link>
            </li>
          </ul>
        </NavLink>
        
        <li className="nav-logo"
        >
          <Link to="/akva-dejon-plus/home">
            <motion.img src={logo} alt="company logo" onMouseLeave={newRotateAngle} whileHover={{rotateZ: rotateAngle}}
            transition={{duration: .3}} />
          </Link>
        </li>
        
        <NavLink location="/akva-dejon-plus/about" name="За нас" />
        
        <NavLink location="/akva-dejon-plus/contact" name="Контакт" />
      </motion.ul>
    )
});

export default NavLinks
