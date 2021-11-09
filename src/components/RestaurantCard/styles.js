import styled from "styled-components";

export const Restaurant = styled.div`
  display: flex;
  justify-content:space-between;
  cursor: pointer;
  margin-top: 5px;
  padding: 12px 8px;
  background-color: #fff;
  border-left: 5px solid transparent;
  border-radius: 5px;
  :hover{
    background-color: ${(props) => props.theme.colors.background};
    border-left: 5px solid ${(props) => props.theme.colors.primary};
  }
`

export const RestaurantInfo = styled.div`
  display: flex;
  flex-direction: column;
`

export const Title = styled.h2`
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors.text};
  font-size: 1.3em;
  font-weight: bold;
  line-height: 29px;
  margin-bottom: 10px;
`

export const Adress = styled.p`
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors.text};
  font-size: 1em;
  line-height: 1.3em;
  margin: 10px 0;
`

export const RestaurantPhoto = styled.img`
  width:100px;
  height: 100px;
  object-fit: cover;
  border-radius: 6px;
`
//desenvolvimento de componentes parte 4
