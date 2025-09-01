import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

import { RiArrowLeftBoxLine, RiArrowRightBoxLine } from "@remixicon/react";

function SlideShowGallery({ urlArray }) {
  const [index, setIndex] = useState(0);
  const [length, setLength] = useState(urlArray.length);

  const activeImg = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      activeImg.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 0.4,
      }
    );
  }, [index]);

  return (
    <div className="w-2xl bg-gray-100 inner-shadow-2xl rounded-xl">
      <div className="relative flex justify-center-safe items-center">
        <span className="absolute top-3 left-3">
          {index + 1}/{urlArray.length}
        </span>
        <img src={urlArray[index]} ref={activeImg} />
        <a className="absolute top-1/2 left-2">
          <RiArrowLeftBoxLine
            size={24}
            color="red"
            onClick={() => (index === 0 ? setIndex(0) : setIndex(index - 1))}
          />
        </a>
        <a className="absolute top-1/2 right-2">
          <RiArrowRightBoxLine
            size={24}
            color="red"
            onClick={() =>
              index + 1 >= length ? setIndex(length - 1) : setIndex(index + 1)
            }
          />
        </a>
      </div>
      <div className="flex justify-around items-center">
        {urlArray.map((val, i) => {
          return (
            <img
              src={val}
              className={`w-1/4`}
              key={crypto.randomUUID()}
              onClick={() => setIndex(i)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default SlideShowGallery;
