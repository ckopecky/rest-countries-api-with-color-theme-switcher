import styled from 'styled-components';

export const SearchStyle = styled.form`
    height: 50px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-left: 75px;
    border-radius: 10px;
    input {
            background: blanchedalmond;
            color: black;
            height: 100%;
            padding-left: 10px;
            min-width: 200px;
        };
    div {
        height: 98%;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50px;
        background: ${props => props.theme.background};
    }

`;