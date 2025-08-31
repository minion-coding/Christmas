import { useEffect, useRef } from "react";
import { gsap } from "gsap";

import Button from "../../components/Button";

function Hero() {
  const heroImg = useRef(null);
  const right = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      heroImg.current,
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
    gsap.fromTo(
      right.current,
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
  }, []);

  return (
    <section className="my-15" id="home">
      <div className="container flex flex-col items-center md:gap-5 sm:flex-row">
        <img
          src="./src/assets/home.png"
          className="w-xs md:w-sm lg:w-md"
          ref={heroImg}
        />
        <div className="text-center w-3/5 sm:text-start" ref={right}>
          <h1 className="font-bold text-2xl text-title-color mb-5 sm:text-4xl">
            Merry Christmas and Happy New Year!
          </h1>
          <p className="font-light text-sm text-wrap sm:w-4/5 mb-10">
            Christmas and a new year is about to begin, all good wishes and
            successes.
          </p>
          <Button title={"Get Started"} type={"primary"}></Button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
