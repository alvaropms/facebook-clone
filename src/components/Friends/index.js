import React from 'react';
import {Column, Row, Mark, CompanyImage, GiftImage, Avatar, VideoImage, PencilImage, MoreImage, Container} from './styles';


function Menu() {
  return (
    <>
    <Container>
    <Column>
    <Row>
      <b>Patrocinado</b>
    </Row>

    <Row>
      <CompanyImage/>
      <b>Empresa Aleatória</b>
      
    </Row>

    <Row>
      <Mark/>
    </Row>

    <Row>
      <b>Aniversários</b>
    </Row>

    <Row>
      <GiftImage/>
      <p>Pessoa Aleatória faz aniversário hoje</p>
    </Row>

    <Row>
      <Mark/>
    </Row>

    <Row JustifyContent={'space-between'}>
      <b>Contatos</b>
      <div>
      <VideoImage/>
      <PencilImage/>
      <MoreImage/>
      </div>
    </Row>

    <Row>
      <Avatar/>
      <b>Pessoa Aleatória</b>
    </Row>

    <Row>
      <Avatar/>
      <b>Pessoa Aleatória</b>
    </Row>

    <Row>
      <Avatar/>
      <b>Pessoa Aleatória</b>
    </Row>

    <Row>
      <Avatar/>
      <b>Pessoa Aleatória</b>
    </Row>

    <Row>
      <Avatar/>
      <b>Pessoa Aleatória</b>
    </Row>

    <Row>
      <Avatar/>
      <b>Pessoa Aleatória</b>
    </Row>

    <Row>
      <Avatar/>
      <b>Pessoa Aleatória</b>
    </Row>

    </Column>
    </Container>
    </>
  );
}

export default Menu;
