import { useEffect, useRef } from "react";
import { gsap } from "gsap";

import Button from "../../components/Button";

function Celebrate() {
  const celebrateImg = useRef(null);
  const right = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      celebrateImg.current,
      {
        opacity: 0,
        y: -50,
      },
      {
        opacity: 1,
        y: 0,
        delay: 0.5,
        duration: 1,
      }
    );
    gsap.fromTo(
      right.current,
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
    <section className="my-15" id="home">
      <div className="container flex flex-col items-center md:gap-5 sm:flex-row">
        <div className="text-center w-3/5 sm:text-start" ref={right}>
          <h2 className="text-title-color text-xl font-semibold mb-5 sm:text-2xl">
            Celebrate With A Lot Of Love
          </h2>
          <p className="font-light text-sm text-wrap sm:w-4/5 mb-10">
            In this holidays, celebrate with much love and peace, offering many
            blessings to our loved ones, friends and neighbors, wishing them a
            good Christmas message.
          </p>
          <Button title={"Send Good Wishes"} type={"primary"}></Button>
        </div>
        <img
          src="./src/assets/celebrate.png"
          className="w-xs md:w-sm lg:w-md"
          ref={celebrateImg}
        />
      </div>
    </section>
  );
}

export default Celebrate;
