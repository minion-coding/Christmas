function PropertyItem({ data }) {
  return (
    <li className="hover:bg-gray-200 transition-colors duration-300 w-full">
      <div className="flex">
        <h4 className="text-base font-semibold text-title-color">
          {data.title}
        </h4>
        <p className="text-base font-light">{data.desc}</p>
      </div>
      <hr></hr>
    </li>
  );
}

export default PropertyItem;
