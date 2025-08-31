import { useEffect, useRef } from "react";
import gsap from "gsap";

import CardImage from "../CardImage";
import { RiHeartLine } from "@remixicon/react";

function GiftCard({ data }) {
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
    <article
      ref={card}
      className="relative shadow-lg rounded-2xl p-6 pt-10 w-50 grid">
      <CardImage url={data.imageUrl} size={30} />
      <a className="absolute top-3 right-3">
        <RiHeartLine size={24} color="#ff0000" />
      </a>
      <h3 className="font-semibold text-xl text-title-color">${data.price}</h3>
      <p>{data.title}</p>
    </article>
  );
}

export default GiftCard;
