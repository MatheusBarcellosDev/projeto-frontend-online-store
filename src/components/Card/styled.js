import styled from 'styled-components';

const Container = styled.div`
    box-sizing: border-box;

    width: 200px;
    height: 290px;
    padding: 15px;
    margin-bottom: 10px;

    display: flex;
    flex-direction: column;
    justify-content: space-around;

    overflow: hidden;

    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);

    .card-image img {
        width: 100%;
    }

    .card-title {
        height: 35px;
        font-size: 10px;

        overflow: hidden;
    }

    .card-price{
        font-size: 15px;
        height: 20px;
        color: #007185;
    }



    
`;

export default Container;
