import { useState, useEffect } from "react";
const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  useEffect(() => {
    const updateMousePosition = (ev: any) => {
      setMousePosition({
        x: (window.innerWidth - ev.clientX * 2) / 90,
        y: (window.innerWidth - ev.clientY * 2) / 90,
      });
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);
  return mousePosition;
};
export default useMousePosition;
