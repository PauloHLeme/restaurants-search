import React, { useState} from "react";
import TextField, { Input} from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';
import Slider from "react-slick";

import logo from '../../assets/logo.svg'
import restaurant from '../../assets/restaurante-fake.png'

import { Card, RestaurantCard } from "../../components";
import { Container, Search, Logo, Wrapper, Map, CarouselTitle, Carousel} from "./styles";

const Home = () =>{

  const settings = {
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 3,
    adaptiveHeight: true,
    arrows:false,
  }
  const [inputValue, setInputValue] = useState()


  return(
    <Wrapper>
      <Container>
        <Search>
          <Logo src={logo} alt="Logo do Restaurante" />
          <TextField
            label='Pesquisar Restaurantes'
            outlined
            trailingIcon={<MaterialIcon role="button" icon="search"/>}
          >
            <Input
             value={inputValue}
             onChange={(e) => setInputValue(e.target.value)}
            />
          </TextField>
          <CarouselTitle>
            Na sua Área
          </CarouselTitle>
          <Carousel {...settings}>
            <Card photo={restaurant} title='restaurante do zé'/>
            <Card photo={restaurant} title='Food now'/>
            <Card photo={restaurant} title='Olá fome'/>
            <Card photo={restaurant} title='Come Come'/>
            <Card photo={restaurant} title='Oba'/>
            <Card photo={restaurant} title='lorem ipsum'/>
            <Card photo={restaurant} title='cacilds ipsum'/>
            <Card photo={restaurant} title='Casa do Bacon'/>
            <Card photo={restaurant} title='Delícia!'/>
          </Carousel>
        </Search>
        <RestaurantCard />
      </Container>
      <Map />
    </Wrapper>
  )
}

export default Home;
