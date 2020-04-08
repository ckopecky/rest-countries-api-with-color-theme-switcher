//detail
import styled from 'styled-components';

export const CountryStyle = styled.div`
    display: flex;
    width: 100%;
    margin: 20px auto;
    div:first-of-type {
        display: flex;
        flex-direction: column;
        width: 100%;
        h3 {
            width: 50%;
            font-weight: bolder;
            font-size: 3rem;
            line-height: 2;
            margin: 20px;
        }
        img {
            width: 50%;
        }
        .styled-div{
            width: 100%;
            display: flex;
            flex-direction: row;
            margin: 20px;
        }

        .section {
            width: 50%;
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