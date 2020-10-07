import { useEffect } from "react";

const useOutsideClick = (ref, parentRef, classToRemove) => {
  useEffect(() => {
    if (ref === null) {
      return;
    }

    const handleOutsideClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        ref.current.classList.remove(classToRemove);
      }

      if (
        e.target.parentNode &&
        e.target.parentNode.parentNode &&
        e.target.parentNode.parentNode.classList.contains("products-list")
      ) {
        return;
      }

      // Remove the extra space given to the Products link
      if (parentRef && parentRef.current.classList.contains("make-room")) {
        console.log(e.target.parentNode.parentNode);
        parentRef.current.classList.remove("make-room");
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [ref, parentRef, classToRemove]);
};

export default useOutsideClick;
