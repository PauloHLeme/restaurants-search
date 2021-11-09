import styled from "styled-components";
import Slider from "react-slick";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Container = styled.aside`
  background-color: ${(props) => props.theme.colors.background};
  width: 360px;
  height: 100vh;
  overflow-y: auto;
`;

export const Search = styled.section`
  display: flex;
  flex-direction: column;
  justfy-content: center;
  background-color: #ffffff;
  padding: 16px;
`;

export const Logo = styled.img`
  max-width: 250px;
  margin: auto;
  padding-bottom: 16px;
`;

export const Map = styled.div`
  background-color: lightgreen;
  width:100%;
`

export const Carousel = styled(Slider)`

  .slick-slide{
    margin-right: 16px;

  }
`

export const CarouselTitle = styled.h1`
  font-family: ${props => props.theme.fonts.regular};
  color: ${props => props.theme.colors.text};
  font-size: 1.5em;
  font-weight: bold;
  margin: 16px 0;
`
