import { useEffect, useState, useRef } from "react";

export const useScrollDirection = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);
  const lastScrollYRef = useRef(0);
  const isAtTopRef = useRef(true);
  const isVisibleRef = useRef(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const lastScrollY = lastScrollYRef.current;

      // Guard clause: Si no hay cambio significativo en el scroll, salir
      if (Math.abs(currentScrollY - lastScrollY) < 10) {
        return;
      }

      // Guard clause: Si estamos en el top, siempre mostrar el menú
      if (currentScrollY < 50) {
        if (!isAtTopRef.current) {
          setIsAtTop(true);
          isAtTopRef.current = true;
        }
        if (!isVisibleRef.current) {
          setIsVisible(true);
          isVisibleRef.current = true;
        }
        lastScrollYRef.current = currentScrollY;
        return;
      }

      // Guard clause: Si estábamos en el top, actualizar estado
      if (isAtTopRef.current) {
        setIsAtTop(false);
        isAtTopRef.current = false;
      }

      // Guard clause: Detectar dirección del scroll
      const isScrollingDown = currentScrollY > lastScrollY;
      
      // Guard clause: Si el estado ya es el correcto, no actualizar
      if (isScrollingDown && !isVisibleRef.current) {
        lastScrollYRef.current = currentScrollY;
        return;
      }

      if (!isScrollingDown && isVisibleRef.current) {
        lastScrollYRef.current = currentScrollY;
        return;
      }

      // Actualizar visibilidad según dirección del scroll
      setIsVisible(!isScrollingDown);
      isVisibleRef.current = !isScrollingDown;
      lastScrollYRef.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { isVisible, isAtTop };
};
