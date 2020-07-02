import styled from 'styled-components';
import {Gift} from '@styled-icons/boxicons-solid/Gift';
import {VideoPlus} from '@styled-icons/boxicons-solid/VideoPlus';
import {PencilAlt} from '@styled-icons/heroicons-solid/PencilAlt';
import {MoreHoriz} from '@styled-icons/material/MoreHoriz';


export const Column = styled.div`
    width: 320px;
    > *{
        align-items: center;
    }
    
`;
export const Container = styled.div`
    height: calc(100vh - 50px);
    overflow-y: scroll;
    ::-webkit-scrollbar {
        width: 0px;
    }
`;
export const Row = styled.div`
    display: flex;
    margin: 20px 0px;
    justify-content: ${props => `${props.JustifyContent}`};
`;
export const Mark = styled.div`
    border: 1px solid gray;
    height: 0px;
    width: 95%;
`;
export const CompanyImage = styled.div`
    width: 105px;
    height: 215px;
    background-color: red;
    border-radius: 10px;
    margin-right: 15px;
`;
export const GiftImage= styled(Gift)`
    height: 35px;
    width: 35px;
    color: blue;
`;
export const Avatar = styled.div`
    width: 35px;
    height: 35px;
    background-color: green;
    border-radius: 50%;
    margin-right: 15px;
`;
export const VideoImage = styled(VideoPlus)`
    width: 20px;
    height: 20px;
    color: black;
`;
export const PencilImage = styled(PencilAlt)`
    width: 20px;
    height: 20px;
    color: black;
`;
export const MoreImage = styled(MoreHoriz)`
    width: 20px;
    height: 20px;
    color: black;
`;
