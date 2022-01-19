import styled from 'styled-components';

const Container = styled.div`

    padding:0;
    margin:0;
    box-sizing:border-box;


    width: 100%;
    max-width: 1200px;

    .container-content {
        width: 100%;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        padding: 20px;


        input {
            width: 300px;
            padding: 5px;
        }

        span {
            padding: 10px;
        }
        
    }

`;

export default Container;
