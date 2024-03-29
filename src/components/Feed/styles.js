import styled from 'styled-components';
import {VideoPlus} from '@styled-icons/boxicons-solid/VideoPlus';
import {Images} from '@styled-icons/boxicons-regular/Images';
import {UserFriends} from '@styled-icons/fa-solid/UserFriends';
import {Happy} from '@styled-icons/boxicons-solid/Happy';
import {Group} from '@styled-icons/material-twotone/Group';
import {MoreHoriz} from '@styled-icons/material/MoreHoriz';
import {Like} from '@styled-icons/boxicons-solid/Like';
import {Comment} from '@styled-icons/boxicons-solid/Comment';
import {Share} from '@styled-icons/fa-solid/Share';
import {HeartCircle} from '@styled-icons/ionicons-outline/HeartCircle';


export const HeartIcon = styled(HeartCircle)`
    width: 20px;
    height: 20px;
    color: red;
`;
export const LikeIcon = styled(Like)`
    width: 20px;
    height: 20px;
    color: ${props => `${props.Color}`};
`;
export const CommentIcon = styled(Comment)`
    width: 20px;
    height: 20px;
`;
export const ShareIcon = styled(Share)`
    width: 20px;
    height: 20px;
`;
export const MoreImage = styled(MoreHoriz)`
    width: 25px;
    height: 25px;
    color: black;
`;
export const GroupIcon = styled(Group)`
    width: 15px;
    height: 15px;
    color: gray;
`;
export const VideoIcon = styled(VideoPlus)`
    width: 25px;
    height: 25px;
    color: purple;
    
`;
export const ImagesIcon = styled(Images)`
    width: 25px;
    height: 25px;
    color: green;
    
`;
export const FriendIcon = styled(UserFriends)`
    width: 25px;
    height: 25px;
    color: blue;
    
`;
export const HappyIcon = styled(Happy)`
    width: 25px;
    height: 25px;
    color: yellow;
    
`;
export const Story = styled.div`
    width: 105px;
    height: 215px;
    background-color: #708090;
    border-radius: 10px;
    margin-right: ${props => `${props.Margin}px`};
`;
export const Avatar = styled.div`
    width: 35px;
    height: 35px;
    background-color: orange;
    border-radius: 50%;
    margin-right: 15px;
`;
export const Row = styled.div`
    display: flex;
    margin: 20px 0px;
    justify-content: ${props => `${props.JustifyContent}`};
    font-size: ${props => `${props.Font}px`};
`;
export const Column = styled.div`
    width: ${props => `${props.Width}%`};
    > *{
        align-items: center;
    }
    
`;
export const Mark = styled.div`
    border: 1px solid gray;
    height: 0px;
    width: 100%;
`;
export const SearchInput = styled.input`
    ::placeholder{
        color: gray;
    }
    position: relative;
    left: 5px;
    border: none;
    outline: none;
    width: 100%;
    height: 30px;
    background: none;
    font-size: 15px;
`;
export const SearchBar = styled.div`
    margin-left: 5px;
    display: flex;
    background-color: #f5f6f7;
    width: 90%;
    height: 40px;
    border-radius: 25px;
    align-items: center;
`;
export const CommentBar = styled.div`
    margin-left: 5px;
    background-color: #f5f6f7;
    border-radius: 25px;
    align-items: center;
`;
export const ImgPost = styled.img`
    width: 500px;
    height: 282px;
`;
export const Container = styled.div`
    height: calc(100vh - 50px);
    overflow-y: scroll;
    ::-webkit-scrollbar {
        width: 0px;
    }
`;