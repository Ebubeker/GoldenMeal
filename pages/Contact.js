import React from "react";
import { OneLineImage } from "../components";
import { ContactSplit } from "../components";
import { pageTitle, pageDesc } from "./Contact.module.css";

const Contact = () => {
  return (
    <div className="containerRoot">
      <OneLineImage
        url={
          "https://images.unsplash.com/uploads/1413222992504f1b734a6/1928e537?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
        }
      />
      <p className={pageTitle}>Contact Us</p>
      <p className={pageDesc}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus ut
        voluptates nostrum molestias perferendis, eligendi recusandae
        voluptatibus eos consequatur perspiciatis eius quasi, laborum labore
        sapiente amet obcaecati. Amet, odit officiis. Nisi fuga, ad mollitia,
        voluptatibus labore odit accusantium numquam eum quasi deserunt quidem
        ducimus distinctio sit atque nemo quisquam aspernatur.
      </p>
      <ContactSplit />
    </div>
  );
};

export default Contact;
