import styled from 'styled-components';

export const Section2 = styled.section`
    transform: translateX(0%);
    padding: 6vw 5% 0px;
    background-color: white;
    height: 100vh;
    display: flex;
    
    
    @media screen and (max-width: 480px) {
        height: unset;
        flex-direction: column-reverse;
        margin-bottom: 10vw;
        z-index: 0;
    }

    @media screen and (max-width: 1000px) {
        height: unset;
        flex-direction: column-reverse;
        margin-bottom: 10vw;
        z-index: 0;
    }
} 
`