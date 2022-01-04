import React from "react";
import { PhotoWithText } from "../components";
import { MenuList } from "../components";
import { menudata } from "../staticData/textPhoto";
// import { config } from "@fortawesome/fontawesome-svg-core";
// config.autoAddCss = false;

const Menu = () => {
  return (
    <div className="containerRoot">
      <PhotoWithText
        pos={"right"}
        titlepo={menudata.title}
        text={menudata.text}
        image={menudata.image}
      />
      <MenuList />
    </div>
  );
};

export default Menu;
