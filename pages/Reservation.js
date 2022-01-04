import React from "react";
import {} from "./Reservation.module.css";
import { PhotoWithText } from "../components";
import { reservationData } from "../staticData/textPhoto";
import { ReservationAppl } from "../components";

const Reservation = () => {
  return (
    <div className="containerRoot">
      <PhotoWithText
        pos={"left"}
        titlepo={reservationData.title}
        text={reservationData.text}
        image={reservationData.image}
      />
      <ReservationAppl />
    </div>
  );
};

export default Reservation;
