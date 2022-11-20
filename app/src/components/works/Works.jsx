import React from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { sliderItems } from "../../data";

import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  margin-top: 70px;
  position: relative;
  overflow: hidden;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
  @media (max-width: 600px) {
    flex-wrap: wrap;
  }
`;

const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
  @media (max-width: 900px) {
    flex: 4;
  }
  @media (max-width: 600px) {
    flex: 6;
  }
  @media (max-width: 600px) {
    width: 100%;
  }
`;

const Image = styled.img`
  height: 80%;
  @media (max-width: 900px) {
    max-width: 100%;
    height: 500px;
  }
  @media (max-width: 600px) {
    width: 100%;
  }
  @media (max-width: 500px) {
    maxiwidth: 400px;
  }
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
  @media (max-width: 600px) {
    display: none;
  }
`;

const Title = styled.h1`
  font-size: 40px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;

const Works = () => {
  const [slideIndex, setSlideIndex] = React.useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 5);
    } else {
      setSlideIndex(slideIndex < 5 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container id="works">
      <Arrow
        direction="left"
        onClick={() => handleClick("left")}>
        <AiOutlineLeft />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide
            bg={item.bg}
            key={item.id}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <a href={item.src}>
                <Button>SHOW MORE</Button>
              </a>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow
        direction="right"
        onClick={() => handleClick("right")}>
        <AiOutlineRight />
      </Arrow>
    </Container>
  );
};
export default Works;
