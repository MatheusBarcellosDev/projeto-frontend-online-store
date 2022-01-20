import styled from 'styled-components';

const Container = styled.div`
    padding: 0;
    margin: 0;
    box-sizing: border-box;

    display: flex;
    justify-content: center;
    gap: 150px;
 
    span{
        display: none;
    }

    @media (max-width: 568px) {
        display: flex;
        flex-direction: column;
        
        gap: 10px;
        padding:30px;
    }
    
    .list-product{

        width: 100%;

        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    }

`;

export default Container;
