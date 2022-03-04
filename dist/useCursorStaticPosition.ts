import { useEffect, useState } from "react";

const useCursorStaticPosition = (): {
  x: number;
  y: number;
} => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const updateMousePosition = (ev: { clientX: number; clientY: number }) => {
    setMousePosition({ x: ev.clientX, y: ev.clientY });
  };

  useEffect(() => {
    window.addEventListener("click", updateMousePosition);

    return () => window.removeEventListener("click", updateMousePosition);
  }, []);

  return mousePosition;
};

export default useCursorStaticPosition;
