import SectionLayout from "../../layout/SectionLayout";
import Card from "../../components/Card";

function Giving({ data }) {
  return (
    <SectionLayout title={"Start Giving This Christmas"}>
      <div className="grid grid-cols-3 justify-center gap-x-1.5 gap-y-2.5">
        {data.map((val) => {
          return <Card data={val} key={val.id} />;
        })}
      </div>
    </SectionLayout>
  );
}

export default Giving;
