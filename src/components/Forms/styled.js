import styled from 'styled-components';

const Container = styled.div`
    padding: 0;
    box-sizing: border-box;

    margin-top: 80px;

    border-top: 1px solid #ccc;
    

    .form-group{
        h2{
            font-size: 24px;
            text-align: center;
        }

        display: flex;
        flex-direction: column;
    }


    .containerEmailAndStar{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;

        input{
            padding: 8px;
            border: none;
            border-bottom: 1px solid #ccc;
        }

        input:focus{
            outline: none;
        }
    }

        textarea{
            width: 100%;
            height: 75px;
        }

        .btnAvaliation{
            padding: 8px !important;
            border: none !important;
            border-radius: 5px !important;
            background-color: #00a8ff !important;
            color: #fff !important;
            font-size: 16px !important;
            cursor: pointer !important;
            margin-top: 20px !important;
            transition: background-color 0.3s !important;

            &:hover{
                background-color: #00a0ff !important;
            }
        }

        h3{
            font-size: 18px;
            text-align: center;
            margin-top: 50px;
            color: #ccc;
            font-weight: bold;
        }

        .containerAvaliation{
            display: flex;
            flex-direction: column;

            border: 1px solid #ccc;
            border-radius: 5px;
            padding: 15px;
            margin-top: 35px;

            .user{
                display: flex;
                align-items: center;
                gap: 10px;

                .userIcon{
                    font-size: 24px;
                }
            }
            
        }
    
`;

export default Container;
