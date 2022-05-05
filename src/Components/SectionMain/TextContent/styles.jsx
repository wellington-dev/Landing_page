import styled from "styled-components";

export const Title = styled.h2`
    font-size:3em;
    width:80%;
    align-self: flex-start;
    font-family: 'Roboto', sans-serif;

   > span{
    background-image: linear-gradient(to right, #00DBDE 40%, #C850C0 60%);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    }

    @media (max-width: 70em){
        font-size:2em;
    }
    @media (max-width: 48em){
        align-self:center;
        text-align:center;
    }
    @media (max-width: 40em){
        width:90%;
    }


    
`
export const SubTitle = styled.h3`
     font-size:1.1rem;
     width:80%;
     align-self: flex-start;
     font-weight:600;
     margin-bottom:1rem;
     color:#ddd;
     font-family: 'Source Sans Pro', sans-serif;

     @media (max-width: 40em){
        font-size:1em;
     }
     @media (max-width: 48em){
        align-self:center;
        text-align:center;
    }
     
`
export const ButtonContainer = styled.div`
    width:80%;
    align-self: flex-start;
    @media (max-width: 48em){
        align-self:center;
        text-align:center;
    }
    button{
        margin:0 auto;
    }
`