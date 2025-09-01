import List from "../../../components/List";
import PropertyItem from "../../../components/PropertyItem";

function PropertyList({ data }) {
  return (
    <List>
      {data.map((val) => {
        return <PropertyItem data={val} key={val.id} />;
      })}
    </List>
  );
}

export default PropertyList;
