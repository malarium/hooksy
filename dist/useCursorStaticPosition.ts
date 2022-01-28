import { useEffect, useRef } from "react";

const useCursorStaticPosition = () => {
  // const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const mousePosition = useRef({ x: 0, y: 0 });

  const updateMousePosition = (ev: { clientX: number; clientY: number }) => {
    console.log(`clicked`);
    // setMousePosition({ x: ev.clientX, y: ev.clientY });
    mousePosition.current = { x: ev.clientX, y: ev.clientY };
  };

  useEffect(() => {
    window.addEventListener("click", updateMousePosition);

    return () => window.removeEventListener("click", updateMousePosition);
  }, []);

  return mousePosition.current;
};

export default useCursorStaticPosition;
