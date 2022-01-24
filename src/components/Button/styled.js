import styled from 'styled-components';

const Container = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    
    button{
        padding: 8px;
        border: none;
        border-radius: 5px;
        background-color: #F3A847;
        font-size: 12px;
        cursor: pointer;
        margin-top: 20px;
        transition: background-color 0.3s;
    }

    button:hover{
        background-color: #F3B834;
    }
`;

export default Container;
