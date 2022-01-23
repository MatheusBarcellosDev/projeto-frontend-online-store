import styled from 'styled-components';

const Container = styled.div`
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 10px;


    .card{
        display: flex;
        flex-direction: column;
        justify-content: space-around;

        padding:10px;

        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);

        .card-image img{
            width: 200px;
        }

        .card-title{
            width: 100%;
            height: 55px;
            overflow: hidden;
        }
    }
`;

export default Container;
