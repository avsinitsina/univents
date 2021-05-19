import React from "react";
import "./CommunityCarousel.css";
import { Carousel } from "react-bootstrap";
import add_pic from "./add.svg";

function CommunityCarousel({ className, name, items }) {
  const remainder = items.length % 3;
  const pageCount =
    remainder === 0 ? items.length / 3 : (items.length - remainder) / 3 + 1;

  return (
    <div className={className}>
      <div className="carousel__heading">
        <div>{name}</div>
        <img
          onClick={() => console.log("jepa")}
          src={add_pic}
          width="15px"
          height="15px"
          className="d-inline-block align-top community-pic"
          alt="Add community pic"
        />
      </div>
      <Carousel indicators={false} interval={null} wrap={false} slide={false}>
        {[...Array(pageCount).keys()].map((pageNumber) => (
          <Carousel.Item>
            {items.slice(pageNumber * 3, pageNumber * 3 + 3)}
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default CommunityCarousel;
