import React from "react";
import {} from "./About.module.css";
import { PhotoWithText } from "../components";

const About = () => {
  return (
    <div className="containerRoot">
      <PhotoWithText
        pos={"right"}
        titlepo="About us"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ad, numquam enim dignissimos incidunt, nemo iste reiciendis nisi doloremque ducimus voluptate ab. Neque porro iusto autem incidunt, ducimus nostrum delectus sit soluta quae fugit minus ab. Vel a iste ad hic rem culpa! Repellendus laborum eligendi sed quo accusantium exercitationem, minima mollitia nam, officiis in culpa ea enim suscipit tempore architecto. Sint, numquam voluptates quia soluta exercitationem ipsa a in excepturi atque dignissimos assumenda possimus modi ducimus, nemo maiores? Eveniet odit."
        image="https://images.unsplash.com/photo-1599580546666-c26f15e00933?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80"
      />
      <PhotoWithText
        pos={"left"}
        titlepo="Our History"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ad, numquam enim dignissimos incidunt, nemo iste reiciendis nisi doloremque ducimus voluptate ab. Neque porro iusto autem incidunt, ducimus nostrum delectus sit soluta quae fugit minus ab. Vel a iste ad hic rem culpa! Repellendus laborum eligendi sed quo accusantium exercitationem, minima mollitia nam, officiis in culpa ea enim suscipit tempore architecto. Sint, numquam voluptates quia soluta exercitationem ipsa a in excepturi atque dignissimos assumenda possimus modi ducimus, nemo maiores? Eveniet odit."
        image="https://images.unsplash.com/photo-1491841651911-c44c30c34548?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
      />
      <PhotoWithText
        pos={"right"}
        titlepo="Our Achievements"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ad, numquam enim dignissimos incidunt, nemo iste reiciendis nisi doloremque ducimus voluptate ab. Neque porro iusto autem incidunt, ducimus nostrum delectus sit soluta quae fugit minus ab. Vel a iste ad hic rem culpa! Repellendus laborum eligendi sed quo accusantium exercitationem, minima mollitia nam, officiis in culpa ea enim suscipit tempore architecto. Sint, numquam voluptates quia soluta exercitationem ipsa a in excepturi atque dignissimos assumenda possimus modi ducimus, nemo maiores? Eveniet odit."
        image="https://images.unsplash.com/photo-1585537647937-6797d374276a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
      />
    </div>
  );
};

export default About;
