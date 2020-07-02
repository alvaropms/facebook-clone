import React from 'react';
import {Row, Column, Avatar, Mark, HeartIcon, MessengerIcon, FlagIcon, ShopIcon, GroupIcon,
MoreIcon, GroupImage, Container} from './styles';


function Menu() {
  return (
    <>
    <Container>
    <Column>
      <Row>
        <Avatar/>
        <b>Álvaro Melquíades</b>
      </Row>

      <Row>
        <HeartIcon/>
        <b>COVID-19: Central de Informações</b>
      </Row>

      <Row>
        <GroupIcon/>
        <b>Amigos</b>
      </Row>

      <Row>
        <MessengerIcon/>
        <b>Messenger</b>
      </Row>

      <Row>
        <FlagIcon/>
        <b>Páginas</b>
      </Row>

      <Row>
        <ShopIcon/>
        <b>Marketplace</b>
      </Row>

      <Row>
        <MoreIcon/>
        <b>Ver mais</b>
      </Row>

      <Row>
        <Mark/>
      </Row>

      <Row>
        <b>Atalhos</b>
      </Row>

      <Row>
        <GroupImage/>
        <b>Grupo Aleatório</b>
      </Row>

      <Row>
        <GroupImage/>
        <b>Grupo Aleatório</b>
      </Row>

      <Row>
        <GroupImage/>
        <b>Grupo Aleatório</b>
      </Row>
      
      <Row>
        <GroupImage/>
        <b>Grupo Aleatório</b>
      </Row>


    </Column>
    </Container>
    </>
  );
}

export default Menu;
