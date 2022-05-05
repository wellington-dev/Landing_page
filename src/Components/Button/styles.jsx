import styled from 'styled-components'

export const Btn = styled.button`

cursor:pointer;
padding: 15px 35px;
font-weight:800;
outline:none;

display: inline-block;
border-radius: 100px;
transition: all 0.2s ease;
position: relative;
border:none;

background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%);
color: #fff;

    &:hover {
        transform: translateY(-3px);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    }
 
    &::after {
        content: '';
        display:block;
        height: 100%;
        width:100%;
        border-radius: 100px;
        position: absolute;
        top:0;
        left:0;
        z-index: -1;
        transition: all .4s ease;
        background-image: linear-gradient(90deg, #00DBDE 30%, #e80197fa 70%);

    }

    &:hover::after{
        transform: scaleX(1.4) scaleY(1.6);
        opacity: 0;
    }
    
    &:hover{
    transform: translateY(-3px);
    box-shadow: 0 5px 5px #c20ada, 0 5px 10px #00DBDE ;
    }

@media (max-width:48em){
    padding: 5px 10px;
}
         
`

