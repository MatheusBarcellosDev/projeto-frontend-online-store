import styled from 'styled-components';

const Container = styled.div`
    padding: 0;
    margin: 0;
    box-sizing: border-box;

    .productName {
        display: flex;
        align-items: center;

        h1{
            font-size: 16px;
        }

        span{
            font-size: 16px;
            margin-left: 10px;
        }
    }

    .containerProductDetails{
        display: flex;
        justify-content: space-around;
        align-items: center;

        img{
            width: 300px;
        }
    }

`;

export default Container;
