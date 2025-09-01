import { useEffect, useRef } from "react";
import { gsap } from "gsap";

import Button from "../../components/Button";
import MessageInput from "../../components/MessageInput";

function MessageSection() {
  const messageImage = useRef(null);
  const right = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      messageImage.current,
      {
        opacity: 0,
        x: 100,
      },
      {
        opacity: 1,
        x: 0,
        delay: 0.5,
        duration: 1,
      }
    );
    gsap.fromTo(
      right.current,
      {
        opacity: 0,
        x: -100,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
      }
    );
  }, []);

  return (
    <section className="my-15" id="message">
      <div className="container py-14 flex flex-col bg-first-color rounded-2xl items-center md:gap-5 sm:flex-row justify-center   ">
        <form className="text-center sm:text-start" ref={right}>
          <h2 className="font-extrabold text-2xl text-white mb-5 sm:text-4xl">
            Send Good <br></br> Wishes!
          </h2>
          <MessageInput />
          <Button title={"Get Started"} type={""}></Button>
        </form>
        <figure>
          <img
            src="./src/assets/message.png"
            className="w-xs  rotate-10"
            ref={messageImage}
          />
        </figure>
      </div>
    </section>
  );
}

export default MessageSection;
