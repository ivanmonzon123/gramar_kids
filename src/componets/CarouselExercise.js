import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import CardExercise from "./CardExercise";
import "../styles/CarouselExercise.css";
import helado from "../images/helado.jpg";

function CarouselExercise() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <article className="cont-main-carousel">
      <Carousel activeIndex={index} onSelect={handleSelect} className="col-md-9">
        <Carousel.Item>
          <div className="cont-card-carousel">
            <CardExercise Nombre={"Delicioso"} foto={helado} />
          </div>
          {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <div className="cont-card-carousel">
            <CardExercise Nombre={"Dulce"} foto={helado} />
          </div>

          {/* <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <div className="cont-card-carousel">
            <CardExercise Nombre={"Suave"} foto={helado} />
          </div>

          {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p> Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>
    </article>
  );
}

export default CarouselExercise;
