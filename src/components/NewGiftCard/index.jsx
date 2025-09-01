import { useEffect, useRef } from "react";
import gsap from "gsap";

import CardImage from "../CardImage";
import NewButton from "../NewButton";

function NewGiftCard({ data }) {
  return (
    <article className="relative grid p-4 pb-6 mb-20 mr-20 w-58 h-68 shadow-lg overflow-hidden rounded-xl text-center ">
      <div className="absolute -top-20 -left-2 w-62 h-62 rounded-full z-0 bg-first-color"></div>
      <CardImage url={data.imageUrl} size={30} />
      <h3 className="font-semibold text-xl mt-10 text-title-color">
        ${data.price}
      </h3>
      <p>{data.title}</p>
      <NewButton />
    </article>
  );
}

export default NewGiftCard;
