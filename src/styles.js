import styled, {createGlobalStyle} from 'styled-components';


export default createGlobalStyle`
    *{
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;  
    }

    html, body, #root{
        height: 100%;
    }
`;

export const Grid = styled.div`
    display: grid;
    grid-template-areas:
    'Header Header Header'  
    'Container Container Container';
    grid-template-columns: '320 100% 320';
    grid-template-rows: '60 100%';
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 10px;
`;
export const Body = styled.div`
    grid-area: Container;
    display: flex;
    justify-content: space-between;
`;


