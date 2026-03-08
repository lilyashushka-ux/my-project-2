import React, {Component} from "react";
import { Carousel } from "react-bootstrap"; 
import Dog1 from "../assets/dog-1.jpg";
import Dog2 from "../assets/dog-2.jpg";
import Dog3 from "../assets/dog-3.jpg";
import Dog4 from "../assets/dog-4.jpg";


export default class CaruselBox extends React.Component {
    render() {
        return(
          <Carousel className="mt-5">
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={Dog1}
                alt="Dog1"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={Dog2}
                alt="Dog2"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={Dog3}
                alt="Dog3"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={Dog4}
                alt="Dog4"
                />
            </Carousel.Item>
          </Carousel>
        )
        }
    }