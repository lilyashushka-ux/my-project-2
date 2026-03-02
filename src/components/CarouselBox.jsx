import React, {Component} from "react";
import { Carousel } from "react-bootstrap"; 
import Dog1 from "../assets/dog-1.jpg";
import Dog2 from "../assets/dog-2.jpg";
import Dog3 from "../assets/dog-3.jpg";
import Dog4 from "../assets/dog-4.jpg";
import { CarouselCaption } from "react-bootstrap";

export default class CaruselBox extends React.Component {
    render() {
        return(
          <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={Dog1}
                alt="Dog1"
                />
                <CarouselCaption>
                <h3>Dog 1</h3>
                <p>First dog in the carousel</p>
                </CarouselCaption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={Dog2}
                alt="Dog2"
                />
                 <CarouselCaption>
                <h3>Dog 1</h3>
                <p>First dog in the carousel</p>
                </CarouselCaption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={Dog3}
                alt="Dog3"
                />
                 <CarouselCaption>
                <h3>Dog 1</h3>
                <p>First dog in the carousel</p>
                </CarouselCaption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={Dog4}
                alt="Dog4"
                />
                 <CarouselCaption>
                <h3>Dog 1</h3>
                <p>First dog in the carousel</p>
                </CarouselCaption>
            </Carousel.Item>
          </Carousel>
        )
        }
    }