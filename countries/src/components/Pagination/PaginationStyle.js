import styled from 'styled-components';


export const PaginationContainer = styled.div`
    display: flex;
    div {
        margin: 10px;
        align-self: center;
    }

    .hidden {
        visibility: hidden;
    }
`;


export const PaginationButton = styled.button`
    background: ${props => props.activePage === "active" ? props.theme.color: props.theme.elements};
    color: ${props => props.activePage === "active" ? props.theme.elements: props.theme.color};
    text-decoration-line: ${props => props.activePage === "active" ? "underline" : "none"};
    padding: 10px 20px;
    font-size: 1.4rem;
`;