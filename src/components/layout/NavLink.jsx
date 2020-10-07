import React from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import useOutsideClick from "../../hooks/useOutsideClick";

function NavLink(props) {
  const productsRef = props.children ? props.children.ref : null;
  const parentRef = useRef(null);
  useOutsideClick(productsRef, parentRef, "products-list-active");

  const displayProductsList = () => {
    if (props.children && props.children.ref) {
      props.children.ref.current.classList.add("products-list-active");
    }

    // Add extra space to the Products link
    if (parentRef && parentRef.current.id === "products") {
      parentRef.current.classList.add("make-room");
    }
  };

  return (
    <li className="nav-link" ref={parentRef} id={props.id}>
      <Link to={props.location} onMouseOver={displayProductsList}>
        {props.name}
      </Link>
      {props.children}
    </li>
  );
}

export default NavLink;
