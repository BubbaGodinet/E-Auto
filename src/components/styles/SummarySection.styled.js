import styled from 'styled-components';

export const SummarySection = styled.section`
display: flex;
padding: 0px 5%;
background-color: rgb(255, 255, 255);
height: 70vh;
overflow: hidden;
@media screen and (max-width: 1000px) {
    flex-direction: column;
    padding: 16vh 5% 0px;
    height: unset;
}
`