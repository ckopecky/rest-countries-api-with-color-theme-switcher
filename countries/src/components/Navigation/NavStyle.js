import styled from 'styled-components';

export const NavStyle = styled.nav`
    display: flex;
    justify-content: space-between;
    width: 98%;
    padding: 20px;
    margin: 0 auto;
    a {
        text-decoration-line: none;
        color: ${props => props.theme.color}
    }
    h1 {
        font-size: 3rem;
        font-weight: bolder;
        cursor: pointer;
    }
    div {
        cursor: pointer;
        font-size: 1.6rem;
    }
`;