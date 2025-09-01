import { useEffect, useRef } from "react";

import SectionLayout from "../../layout/SectionLayout";
import NewGiftCard from "../../components/NewGiftCard";

function NewGiftSection({ data }) {
  const content = useRef(null);
  const handlePanY = (e) => {
    content.current.translate(10);
  };
  return (
    <SectionLayout title={"Start Giving This Christmas"} elementId={"new"}>
      <div
        className="overflow-x-hidden w-4/5 touch-pan-y"
        onPointerMove={handlePanY}>
        <div className="flex w-fit" ref={content}>
          {data.map((val) => {
            return <NewGiftCard data={val} key={val.id} />;
          })}
        </div>
      </div>
    </SectionLayout>
  );
}

export default NewGiftSection;
