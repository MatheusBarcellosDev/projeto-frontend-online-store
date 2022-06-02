import styled from 'styled-components';

const Container = styled.div`
    
    .input-group{
        width: 100%;
        position: relative;
    }

    input{
        border: none;
        border-radius: 5px;
    }

    input:focus{
        outline: none;
    }


    input, button {
        padding: 10px;
    }

    button {
        position: absolute;
        right: 0;
        top: 0;
        background-color: #F3A847;
        border: none;
        cursor: pointer;
        transition: 0.5s;
        height: 100%;
        border-radius: 0 5px 5px 0;
    }

    button:hover{
        background-color: #F3B847;
    }
`;

export default Container;
