import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CountryStyle = styled.div`
    background: ${props => props.theme.elements};
    padding: 20px;
    border-radius: 10px;
    margin: 20px;
`;

export const CountryStyledLink = styled(Link)`

    color: ${props => {
        console.log(props.theme);
        return props.theme.color
    }
    };
    text-decoration-line: none;
    img {
        margin-bottom: 20px;
    }
    .country-name {
        font-weight: 700;
        font-size: 2rem;
        text-decoration: underline;
        line-height: 2;
    }
    p {
        font-size: 1.6rem;
        line-height: 1.25;
    }
`