import styled from 'styled-components';

const Container = styled.div`
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 2fr));
    gap: 10px;


    .card{
        display: flex;
        flex-direction: column;
        justify-content: space-around;

        padding:10px;

        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);

        .card-image img{
            width: 100%;
        }

        .card-title{
            height: 55px;
            overflow: hidden;
        }
    }
`;

export default Container;
