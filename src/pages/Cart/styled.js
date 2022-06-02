import styled from 'styled-components';

const Container = styled.div`
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    .cardProduct{
        display: flex;
        align-items: center;
        border: 1px solid #ccc;
        padding: 10px;
    }

    .cardProductTitle{
        font-size: 12px;
        width: 20%;
    }

    .cardProductQuantity{
        padding: 8px
    }
`;

export default Container;
