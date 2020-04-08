//detail
import styled from 'styled-components';

export const CountryStyle = styled.div`
    display: flex;
    width: 100%;
    margin: 20px auto;
    h3 {
        width: 50%;
        font-weight: bolder;
        font-size: 3rem;
        line-height: 2;
        margin: 20px;
    }
    .h3-div {
        display: flex;
        flex-direction: column;
        width: 100%;

        
        .styled-div{
            width: 100%;
            display: flex;
            flex-direction: row;
        }

        .section {
            margin: 20px;
            p {
                line-height: 2.5;
                font-size: 1.6rem;

            }
            p > .headings {
                font-weight: bolder;
            }
        }
    }
    
`;

export const StyledBorderButtons = styled.div`
    margin: 20px;
    .headings {
        font-weight: bolder;
        line-height: 2.5;
        font-size: 1.6rem;
    }
    div:first-of-type {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    button {
        width: 100%;
    }


`;

export const StyledImg = styled.div`
    background-image: ${props => `url(${props.url})`};
    max-width: 40%;
    width: 100%;
    background-size: contain;
    background-repeat: no-repeat;
    margin-left: 80px;
    margin-top: 40px;
`;