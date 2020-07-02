import styled from 'styled-components';
import {Facebook} from '@styled-icons/fa-brands/Facebook';
import {Search} from '@styled-icons/material/Search';
import {Home} from '@styled-icons/boxicons-solid/Home';
import {OndemandVideo} from '@styled-icons/material/OndemandVideo';
import {Shop} from '@styled-icons/entypo/Shop';
import {Group} from '@styled-icons/typicons/Group';
import {Games} from '@styled-icons/material-rounded/Games';
import {Messenger} from '@styled-icons/boxicons-logos/Messenger';
import {Notifications} from '@styled-icons/ionicons-sharp/Notifications';
import {ExpandMore} from '@styled-icons/material-rounded/ExpandMore';


export const MessengerIcon = styled(Messenger)`
    color: black;
    height: 25px;
    width: 25px;
    box-sizing: content-box;
    
`;
export const NotificationsIcon = styled(Notifications)`
    color: black;
    height: 25px;
    width: 25px;
    box-sizing: content-box;
    
`;
export const MoreIcon = styled(ExpandMore)`
    color: black;
    height: 25px;
    width: 25px;
    box-sizing: content-box;
    
`;
export const HomeIcon = styled(Home)`
    color: blue;
    height: 30px;
    width: 30px;
    box-sizing: content-box;
    padding: 0px 40px;
`;
export const VideoIcon = styled(OndemandVideo)`
    color: gray;
    height: 30px;
    width: 30px;
    box-sizing: content-box;
    padding: 0px 40px;
`;
export const ShopIcon = styled(Shop)`
    color: gray;
    height: 30px;
    width: 30px;
    box-sizing: content-box;
    padding: 0px 40px;
`;
export const GroupIcon = styled(Group)`
    color: gray;
    height: 30px;
    width: 30px;
    box-sizing: content-box;
    padding: 0px 40px;
`;
export const GamesIcon = styled(Games)`
    color: gray;
    height: 30px;
    width: 30px;
    box-sizing: content-box;
    padding: 0px 40px;
`;
export const Row = styled.div`
    display: flex;
    grid-area: Header;
    

    > *{
        align-items: center;
    }
`;
export const ContainerStart = styled.div`
    display: flex;
    justify-content: flex-start;
    min-width: 320px;

`;
export const ContainerMid = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;

`;
export const ContainerEnd = styled.div`
    display: flex;
    justify-content: flex-end;
    min-width: 320px;

`;
export const FacebookIcon = styled(Facebook)`
    color: blue;
    height: 40px;
    width: 40px;
`;
export const SearchIcon = styled(Search)`
    color: gray;
    height: 25px;
    width: 25px;
`;
export const SearchInput = styled.input`
    ::placeholder{
        color: gray;
    }
    border: none;
    outline: none;
    width: 240px;
    height: 30px;
    background: none;
    font-size: 15px;
`;
export const SearchBar = styled.div`
    margin-left: 5px;
    display: flex;
    background-color: #f5f6f7;
    width: 280px;
    height: 40px;
    border-radius: 25px;
    align-items: center;
`;
export const Button = styled.div`
    width: 40px;
    height: 40px;
    background-color: #f5f6f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 15px;

`;
export const Avatar = styled.div`
    width: 35px;
    height: 35px;
    background-color: orange;
    border-radius: 50%;
    margin-right: 15px;
`;