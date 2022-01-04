import React from "react";
import { pageTitle, pageDesc } from "./Jobs.module.css";
import { OneLineImage } from "../components";
import JobList from "../components/JobList";

const Jobs = () => {
  return (
    <div className="containerRoot">
      <OneLineImage url="https://images.unsplash.com/photo-1622021142947-da7dedc7c39a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80" />
      <p className={pageTitle}>Jobs</p>
      <p className={pageDesc}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
        accusamus quibusdam deleniti magni voluptas laborum debitis culpa, aut
        alias minima rerum excepturi expedita earum dolorum hic, quas atque.
        Voluptate nesciunt architecto odio deleniti cumque quos nulla, itaque
        repellendus qui veritatis aperiam incidunt fugiat dolorem libero dolore
        veniam iste ea alias pariatur in vitae rem labore temporibus illum!
        Possimus pariatur ducimus obcaecati architecto enim totam sed voluptas
        corrupti et laboriosam mollitia eaque asperiores tempora animi eius
        illum delectus laborum modi, quasi consequatur molestias quibusdam,
        aspernatur dolore placeat! <br />
        <br /> Repudiandae reiciendis delectus neque aspernatur perferendis
        minima reprehenderit dolores soluta! Excepturi esse animi sit,
        laudantium autem earum? Magnam cum consequuntur, odio, inventore
        consectetur suscipit sapiente optio placeat debitis perspiciatis ipsum
        asperiores, nobis quia! Tenetur, fugit. Aliquid culpa quae, porro
        voluptas repellendus, alias recusandae optio, possimus mollitia suscipit
        voluptatibus deserunt placeat ratione maiores dolorem. Veritatis nemo,
        itaque earum dolore cum ducimus porro aut dolorum tempore velit numquam.
        Dolorem, accusamus nulla aliquam minima totam praesentium vel pariatur,
        veritatis excepturi fuga saepe consectetur veniam voluptatem doloremque
        adipisci iste ipsa neque facilis ducimus impedit! Dolores earum
        mollitia, doloremque reiciendis deleniti placeat fugiat minima ipsam
        consequuntur unde excepturi explicabo recusandae omnis ad minus. Quasi
        optio cumque maxime nemo quisquam?
      </p>
      <JobList />
      <p className={pageDesc}>
        Another way to apply for these jobs contact us at +355 68-372-7888 or at
        jobs@goldenmeat.com
      </p>
    </div>
  );
};

export default Jobs;
