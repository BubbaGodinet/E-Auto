import styled from 'styled-components';

export const Section = styled.section`
transform: translateX(0%);
padding: 100px 5% 0px;
background-color: rgb(251, 200, 67);
height: 100vh;
@media screen and (max-width: 1000px) {
    padding: 10vh 5% 0px;
    position: relative;
    height: unset;
    display: flex;
    flex-direction: column;
    -webkit-box-pack: justify;
    justify-content: space-between;
}
`