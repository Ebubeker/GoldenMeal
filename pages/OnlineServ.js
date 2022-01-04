import React from "react";
import { OneLineImage } from "../components";
import { pageTitle, pageDesc, productSection } from "./OnlineServ.module.css";
import { OnlineProd } from "../components";
import { products } from "../staticData/products";

const OnlineServ = () => {
  return (
    <div className="containerRoot">
      <OneLineImage url="https://images.unsplash.com/photo-1428515613728-6b4607e44363?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" />
      <p className={pageTitle}>Online Service</p>
      <p className={pageDesc}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo ratione
        vel molestiae, eius deserunt consequuntur molestias aspernatur laborum
        doloribus architecto quibusdam nostrum iure in dolor? Eum sit asperiores
        quo dolore.
      </p>
      <div className={productSection}>
        {products.map((prod) => (
          <OnlineProd
            key={prod.url}
            url={prod.url}
            title={prod.title}
            desc={prod.description}
            incl={prod.includes}
            loc={prod.location}
            price={prod.price}
          />
        ))}
      </div>
    </div>
  );
};

export default OnlineServ;
