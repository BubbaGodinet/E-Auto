import styled from 'styled-components';

export const LoaderSection = styled.section`
    background-color: white;
    height: 100vh;
    display: flex;
    justify-content: center; 
    align-items: center;
    -webkit-box-align: center;

    @media screen and (max-width: 1000px) {
        height: unset;
        flex-direction: column-reverse;
        margin-bottom: 10vw;
        z-index: 0;
    }
} 
`