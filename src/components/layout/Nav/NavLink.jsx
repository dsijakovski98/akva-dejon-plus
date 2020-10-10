import React from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";

function NavLink(props) {

  // const productsRef = props.children ? props.children.ref : null;
  const parentRef = useRef(null);

  const displayProductsList = () => {

    if (props.children && props.children.ref) {
      props.children.ref.current.classList.add("products-list-active");
    }

    // Add extra space to the Products link
    if (parentRef && parentRef.current.id === "products") {
      parentRef.current.classList.add("make-room");
    }
  };

  const removeProductsList = e => {
    if(props.products && !props.products.current.matches(":hover") && !e.target.matches(":hover")){
      props.children.ref.current.classList.remove("products-list-active");
    }

    // Remove extra space to the Products link
    if (parentRef && parentRef.current.id === "products") {
      parentRef.current.classList.remove("make-room");
    }
    
  }

  return (
    <li className="nav-link" ref={parentRef} id={props.id} onMouseLeave={e => removeProductsList(e)}>
      <Link to={props.location} onMouseOver={displayProductsList} >
        {props.name}
      </Link>
      {props.children}
    </li>
  );
}

export default NavLink;
