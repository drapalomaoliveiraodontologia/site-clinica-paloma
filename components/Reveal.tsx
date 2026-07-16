"use client";

import { ElementType, ReactNode, useEffect, useRef, useState } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  direction?: "up" | "left" | "right";
  delay?: number;
  scaleFrom?: number;
  threshold?: number;
  once?: boolean;
};

export default function Reveal({
  children,
  className = "",
  as: Component = "div",
  direction = "up",
  delay = 0,
  scaleFrom = 1,
  threshold = 0.15,
  once = true,
}: RevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [once, threshold]);

  const transformValue = isVisible
    ? "translate3d(0,0,0) scale(1)"
    : direction === "left"
      ? `translate3d(-24px,0,0) scale(${scaleFrom})`
      : direction === "right"
        ? `translate3d(24px,0,0) scale(${scaleFrom})`
        : `translate3d(0,24px,0) scale(${scaleFrom})`;

  return (
    <Component
      ref={ref as never}
      className={`transition-all duration-700 ease-out ${isVisible ? "opacity-100" : "opacity-0"} ${className}`}
      style={{ transform: transformValue, transitionDelay: `${delay}ms` }}
    >
      {children}
    </Component>
  );
}
