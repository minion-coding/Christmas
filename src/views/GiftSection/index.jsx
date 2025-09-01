import SectionLayout from "../../layout/SectionLayout";
import GiftCard from "../../components/GiftCard";

function GiftSection({ data }) {
  return (
    <SectionLayout title={"Start Giving This Christmas"} elementId={"gifts"}>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center gap-x-9 gap-y-7">
        {data.map((val) => {
          return <GiftCard data={val} key={val.id} />;
        })}
      </div>
    </SectionLayout>
  );
}

export default GiftSection;
