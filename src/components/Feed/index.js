import React from 'react';
import {Story, Avatar, Row, Column, Mark, SearchBar, SearchInput, ImagesIcon, FriendIcon, HappyIcon,
VideoIcon, GroupIcon, MoreImage, ImgPost, Container, LikeIcon, CommentIcon, ShareIcon, HeartIcon
, CommentBar} from './styles';
import {EmojiHappy} from '@styled-icons/entypo/EmojiHappy';
import {Camera} from '@styled-icons/boxicons-solid/Camera';
import {Gif} from '@styled-icons/material/Gif';
import {Sticker} from '@styled-icons/boxicons-regular/Sticker';




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

    <Row JustifyContent={'space-between'}>
      <div>
        <HappyIcon/>
        <LikeIcon Color={'blue'}/>
        <HeartIcon/>
        600
      </div>
      <div>
        22 comentários 1 compartilhamento
      </div>

    </Row>
    <Row JustifyContent={'space-between'}>
      <LikeIcon/> <b>Curtir</b>
      <CommentIcon/> <b>Comentar</b>
      <ShareIcon/> <b>Compartilhar</b>
    </Row>

    <Row>
      <Column>
        <Avatar/>
      </Column>

      <Column>
        <Row>
          <CommentBar>
              <b>Pessoa Aleatória</b> <br/>
              Fera...
          </CommentBar>
        </Row>
        <Row Font={'10'}>
          Curtir • Responder • 7h
        </Row>
      </Column>
    </Row>
    <Row>
      <Avatar/>
      <SearchBar>
        <SearchInput placeholder={'Escreva um comentário'}/>
        <EmojiHappy size={15}/> <Camera size={15}/> <Gif size={15}/> <Sticker size={15}/>
      </SearchBar>
      
    </Row>

    </Column>
    </Container>
    
    
    </>
  );
}

export default Feed;
