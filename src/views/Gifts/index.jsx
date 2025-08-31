import SectionLayout from "../../layout/SectionLayout";

function Giving({ data }) {
  return (
    <SectionLayout title={"Start Giving This Christmas"}>
      <div className="grid grid-cols-3 justify-center gap-x-1.5 gap-y-2.5">
        {data.map((val) => {
        })}
      </div>
    </SectionLayout>
  );
}

export default Giving;
