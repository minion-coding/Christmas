import { useRef, useEffect } from "react";
import gsap from "gsap";

import CardImage from "../CardImage";

function Card({ data }) {
  const card = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      card.current,
      {
        opacity: 0,
        y: -50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
      }
    );
  }, []);
  return (
    <div className="flex flex-col items-center" ref={card}>
      <CardImage url={data.imageUrl} />
      <h3 className="text-base font-bold text-title-color">${data.title}</h3>
      <p className="text-sm font-light">{data.desc}</p>
    </div>
  );
}

export default Card;
