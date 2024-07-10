import React from "react";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "react-spring";

export function NumberCounter({
  n,
  d,
  decimal,
}: {
  n: number;
  d: number;
  decimal: number;
}) {
  const { ref, inView } = useInView({ triggerOnce: true }); // Add triggerOnce: true to useInView
  const { number } = useSpring({
    from: { number: 0 },
    to: { number: inView ? n : 0 }, // Animate to 'n' when in view
    delay: d, // Delay in milliseconds
    config: { mass: 1, tension: 20, friction: 10 },
    reset: true,
  });

  return (
    <div ref={ref}>
      <animated.div>{number.to((n) => n.toFixed(decimal))}</animated.div>
    </div>
  );
}
