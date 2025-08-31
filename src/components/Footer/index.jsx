//import base
import { useState } from "react";

// import external component
import List from "../List";
import Logo from "../Logo";

// import virtual data
import { supports, services } from "../../vdatas/VDatas";

function Footer() {
  return (
    <footer className="my-10">
      <div className="relative flex container justify-between items-start">
        <div>
          <Logo title={"Christmas"}></Logo>
          <p className="text-wrap mt-5 w-40 text-sm">
            This Christmas give a lot of love
          </p>
        </div>
        <List title={"Our Services"} data={services}></List>
        <List title={"Support"} data={supports}></List>
        <List title={"Available on"}>
          <a>
            <img
              src="./src/assets/aviable1.png"
              alt="available "
              className="w-24 mb-2"
            />
          </a>
          <a>
            <img
              src="./src/assets/aviable2.png"
              alt="available "
              className="w-24 mb-2"
            />
          </a>
        </List>
        <img src="./src/assets/footer1.png" className="absolute w-30 top-25 left-0"/>
        <img src="./src/assets/footer2.png" className="absolute w-30 top-30 right-0"/>
      </div>
      <p className="mt-25 mb-5 text-center w-full text-sm">
        ©minion-coding. All rights reserved
      </p>
    </footer>
  );
}

export default Footer;
