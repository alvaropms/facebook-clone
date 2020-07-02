import styled from 'styled-components';
import {HeartCircle} from '@styled-icons/boxicons-solid/HeartCircle';
import {Group} from '@styled-icons/material/Group';
import {Messenger} from '@styled-icons/boxicons-logos/Messenger';
import {Flag} from '@styled-icons/material-rounded/Flag';
import {Shop} from '@styled-icons/entypo/Shop';
import {ExpandMore} from '@styled-icons/material-rounded/ExpandMore';


export const MessengerIcon = styled(Messenger)`
    color: blue;
    height: 40px;
    width: 40px;
    margin-right: 15px;
`;
export const HeartIcon = styled(HeartCircle)`
    color: red;
    height: 40px;
    width: 40px;
    box-sizing: content-box;
    margin-right: 15px;
`;
export const GroupIcon = styled(Group)`
    color: blue;
    height: 40px;
    width: 40px;
    margin-right: 15px;
`;
export const FlagIcon = styled(Flag)`
    color: orange;
    height: 40px;
    width: 40px;
    margin-right: 15px;
`;
export const ShopIcon = styled(Shop)`
    color: blue;
    height: 40px;
    width: 40px;
    margin-right: 15px;
`;
export const MoreIcon = styled(ExpandMore)`
    color: black;
    height: 40px;
    width: 40px;
    margin-right: 15px;
    
`;
export const Container = styled.div`
    height: calc(100vh - 50px);
    overflow-y: scroll;
    ::-webkit-scrollbar {
        width: 0px;
    }
`;
export const Column = styled.div`
    max-width: 320px;
    > *{
        align-items: center;
    }
`;
export const Avatar = styled.div`
    width: 35px;
    height: 35px;
    background-color: orange;
    border-radius: 50%;
    margin-right: 15px;
`;
export const Mark = styled.div`
    border: 1px solid gray;
    height: 0px;
    width: 95%;
`;
export const Row = styled.div`
    display: flex;
    margin: 20px 0px;
`;
export const GroupImage = styled.div`
    width: 35px;
    height: 35px;
    background-color: blue;
    border-radius: 10px;
    margin-right: 15px;
`;