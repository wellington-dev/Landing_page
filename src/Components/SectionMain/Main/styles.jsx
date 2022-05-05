import styled from 'styled-components'

export const Container = styled.section`
    color:#fff;
    min-height:80vh;
    width:75%;
    margin:20px auto;

    display:flex;
    justify-content:center;
    align-items:center;

    @media (max-width: 64em){
        width:85%;
    }
    @media (max-width: 48em){
        flex-direction:column-reverse;
        width:100%;
        &>*:first-child{
            width:100%;
            margin-top:2rem;
        }
    }

`
export const Box = styled.div`
    width:50%;
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`