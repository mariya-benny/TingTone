import React from "react";
import Carousel from "react-material-ui-carousel";
import MainBanner1 from "../../assets/Main Banner1.jpg";
import MainBanner2 from "../../assets/Main Banner2.jpg";
import MainBanner3 from "../../assets/Main Banner3.jpg";
import Item from "./Item";

export default function UserBanner() {
  var items = [MainBanner1, MainBanner2, MainBanner3];

  return (
    <div style={{ position: "relative",marginTop:"85px" }}>
      <Carousel navButtonsAlwaysVisible={true}>
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
    </div>
  );
}
