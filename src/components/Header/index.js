import React from 'react';
import {Row, ContainerStart, ContainerMid, ContainerEnd, FacebookIcon, SearchIcon, SearchBar, SearchInput,
HomeIcon, VideoIcon, ShopIcon, GroupIcon, GamesIcon, Avatar, Button, MessengerIcon, NotificationsIcon,
MoreIcon} from './styles';




function Header() {
  return (
    <>
    <Row>
      <ContainerStart>
        <FacebookIcon/>
        <SearchBar>
          <SearchIcon/>
          <SearchInput placeholder={'Pesquisar no Facebook'}/>
        </SearchBar>
      </ContainerStart>


      <ContainerMid>
       <HomeIcon/>
       <VideoIcon/>
       <ShopIcon/>
       <GroupIcon/>
       <GamesIcon/>
      </ContainerMid>


      <ContainerEnd>
        <Avatar/>
        <b>Álvaro</b>
        <Button> <b>+</b> </Button>
        <Button> <MessengerIcon/> </Button>
        <Button> <NotificationsIcon/> </Button>
        <Button> <MoreIcon/> </Button>
      </ContainerEnd>
    </Row>
    
    </>
  );
}

export default Header;
