import styled from 'styled-components';

const Container = styled.div`
    padding: 0;
    margin: 0;
    box-sizing: border-box;

    display: flex;
    gap: 50px;
 
  /*   span{
        display: none;
    } */

    /* display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 2fr));
    gap: 10px; */

    @media (max-width: 568px) {
        display: flex;
        flex-direction: column;
        
        gap: 10px;
        padding:30px;
    }

`;

export default Container;
