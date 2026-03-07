import React from "react";
import CarouselBox from "../components/CarouselBox.jsx";
import { Container, Card } from "react-bootstrap";

export default class Home extends React.Component {
    render() {
        return(
            <>
          <CarouselBox />
           <Container className="cards-wrapper mb-5">
      <Card className="card-left">
        <Card.Body className="text-center h-100">
          <Card.Title className="card-text-left">Why Us?</Card.Title>
          <Card.Text className="card-text-left">
       At our kennel, we are passionate about raising happy, healthy, and well-socialized Border Collies. From the very first weeks of life, our puppies are nurtured in a loving environment, receiving constant attention and care. We prioritize both temperament and health, ensuring our dogs are energetic, intelligent, and ready to become loyal family members.
</Card.Text>
          <Card.Text className="card-text-left">
Our breeding practices are responsible and ethical: all parents are health-tested, and puppies are regularly checked by veterinarians. We also provide early socialization, basic training guidance, and ongoing support to new owners, making the transition to your home smooth and joyful.
          </Card.Text>
          <Card.Text className="card-text-left">
Choosing our kennel means choosing quality, dedication, and a lifelong connection with one of the smartest and most affectionate dog breeds in the world. Your perfect Border Collie companion is waiting here.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="card-right">
        <Card.Body className="text-center">
          <Card.Title>Why Border Collies?</Card.Title>
          <Card.Text>
            Border Collies are one of the most intelligent and versatile dog breeds in the world. They are energetic, eager to learn, and highly trainable, making them perfect companions for active families, dog sports, and work on farms. Their loyalty, agility, and problem-solving abilities are unmatched, and their playful yet affectionate nature makes them wonderful family members.
          </Card.Text>
          <Card.Text>
            Choosing a Border Collie means choosing a dog that will challenge you, inspire you, and bring endless joy to your home. With proper care, training, and attention, they become lifelong friends who are always ready for adventure and companionship.
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
           </>
        )
    }
}
