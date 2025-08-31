function List({ title, data, children }) {
  return (
    <div>
      <h3 className="text-xl text-title-color font-bold mb-5">{title}</h3>
      {children}
      <ul className="flex flex-col gap-y-3">
        {data !== undefined &&
          data.map((val) => {
            return (
              <li key={crypto.randomUUID()}>
                <a className=" hover:text-first-color transition-colors duration-200">
                  {val.title}
                </a>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default List;
