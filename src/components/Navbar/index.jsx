import NavItem from "./NavItem";
import { navbarLists } from "../../vdatas/VDatas";

import { useState } from "react";

function Navbar({}) {
  const [index, setIndex] = useState(null);
  return (
    <ul className="flex-1 flex flex-row items-center justify-end gap-8">
      {navbarLists.map((val, i) => {
        return (
          <NavItem
            key={crypto.randomUUID()}
            caption={val}
            handleClick={() => setIndex(i)}
            isActive={index === i}></NavItem>
        );
      })}
    </ul>
  );
}

export default Navbar;
