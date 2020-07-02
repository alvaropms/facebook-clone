import React from 'react';
import {Story, Avatar, Row, Column, Mark, SearchBar, SearchInput, ImagesIcon, FriendIcon, HappyIcon,
VideoIcon, GroupIcon, MoreImage, ImgPost, Container} from './styles';




function Feed() {
  return (
    <>
    <Container>
    <Column>
    <Row JustifyContent={'space-between'}>
      <Story Margin={20}/>
      <Story Margin={20}/>
      <Story Margin={20}/>
      <Story/>
    </Row>

    <Row>
      <Avatar/>
      <SearchBar>
        <SearchInput placeholder={'No que você está pensando, Álvaro?'}/>
      </SearchBar>
      
    </Row>

    <Row JustifyContent={'space-between'}>
      <ImagesIcon/> <b>Foto/vídeo</b>
      <FriendIcon/> <b>Marcar amigos</b>
      <HappyIcon/> <b>Sentimento/atividade</b>
    </Row>

    <Row>
      <Mark/>
    </Row>

    <Row JustifyContent={'space-between'}>
      <div>
        <VideoIcon/>
        <b>Salas</b>
      </div>
      <b>Criar</b>
    </Row>

    <Row>
      <Avatar/>
      <Avatar/>
      <Avatar/>
      <Avatar/>
      <Avatar/>
      <Avatar/>
      <Avatar/>
      <Avatar/>
      <Avatar/>
      <Avatar/>
    </Row>


    <Row>
      <Mark/>
    </Row>

    <Row>
      <Column>
        <Avatar/>
      </Column>

      
      <Column Width={100}>
        <Row>
          <b>Pessoa Aleatória → Grupo Aleatório</b>
        </Row>
        <Row>
          2h•<GroupIcon/>
        </Row>
      </Column>

      <Column>
        <MoreImage/>
      </Column>
      
    </Row>
        
    <Row>
      Dimebag Darrell - guitarrista do Pantera
    </Row>
    <Row>
      <ImgPost src ={require('./guitar.jpg')}/>
    </Row>

    <Row>
      <Column>
        <Avatar/>
      </Column>

      
      <Column Width={100}>
        <Row>
          <b>Pessoa Aleatória → Grupo Aleatório</b>
        </Row>
        <Row>
          2h•<GroupIcon/>
        </Row>
      </Column>

      <Column>
        <MoreImage/>
      </Column>
      
    </Row>
        
    <Row>
      Dimebag Darrell - guitarrista do Pantera
    </Row>
    <Row>
      <ImgPost src ={require('./guitar.jpg')}/>
    </Row>

    <Row>
      <Column>
        <Avatar/>
      </Column>

      
      <Column Width={100}>
        <Row>
          <b>Pessoa Aleatória → Grupo Aleatório</b>
        </Row>
        <Row>
          2h•<GroupIcon/>
        </Row>
      </Column>

      <Column>
        <MoreImage/>
      </Column>
      
    </Row>
        
    <Row>
      Dimebag Darrell - guitarrista do Pantera
    </Row>
    <Row>
      <ImgPost src ={require('./guitar.jpg')}/>
    </Row>

    <Row>
      <Column>
        <Avatar/>
      </Column>

      
      <Column Width={100}>
        <Row>
          <b>Pessoa Aleatória → Grupo Aleatório</b>
        </Row>
        <Row>
          2h•<GroupIcon/>
        </Row>
      </Column>

      <Column>
        <MoreImage/>
      </Column>
      
    </Row>
        
    <Row>
      Dimebag Darrell - guitarrista do Pantera
    </Row>
    <Row>
      <ImgPost src ={require('./guitar.jpg')}/>
    </Row>

    </Column>
    </Container>
    
    
    </>
  );
}

export default Feed;
