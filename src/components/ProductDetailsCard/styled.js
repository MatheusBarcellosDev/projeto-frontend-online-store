import styled from 'styled-components';

const Container = styled.div`
    padding: 0;
    box-sizing: border-box;

    max-width: 1200px;
    margin: 0 auto;


    .conteinerContent{
        display: flex;
        padding: 30px;
        
    }

    .product {
        display: flex;
        flex-direction: column;
        width: 40%;


        h1{
            font-size: 20px;
            text-align: center;
        }

        span{
            font-size: 16px;
            text-align: center;
        }

        .imgProduct{
            display: flex;
            justify-content: center; 
            align-items: center; 

        }
    }

    .containerProductDetails{
        width: 65%;
        padding: 15px 85px;

        h2{
            text-align: center;
            font-size: 18px;
            margin-bottom: 35px;
        }
    }

    .containerDetailsItem{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 10px;
        width: 100%;
        text-align: center;

        .detailsItem{
            padding: 10px;
            border: 1px solid black;
            border-radius: 5px;

            span{
                font-size: 12px;
                word-wrap: break-word;
            }
        }

    }

`;

export default Container;
