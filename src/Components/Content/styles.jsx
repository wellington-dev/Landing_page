import styled from 'styled-components'

export const Container = styled.div`
    width:100%;
    max-width:1110px;
    margin:auto;
    /* border:1px solid black; */
    /* background-image:url(${({mask})=> mask}) ; */
  
`
export const NavBar = styled.div`
   display:flex;
   justify-content:space-between;
   align-items:center;

   width:85%;
   height:5rem;
   margin:0 auto;  
`
export const Menu = styled.ul`
    display:flex;
    justify-content:space-between;
    align-items:center;
    list-style:none;

    @media(max-width: 64em){
                /* 1024 px */
    position:fixed;
    top:5.3rem;
    left:0;
    right:0;
    bottom:0;
    width:100vw; 
    height:calc(100vh - 5.3rem);
    z-index:50;
    background:rgba(17, 20, 25, 0.85);
    backdrop-filter:blur(2px);

    transform:${({click})=>click ? 'translateY(0)' : 'translateY(100%)'};
    transition: all 0.3s ease;
    flex-direction:column;
    justify-content:center;

}
`
export const MenuItem = styled.li`
    margin:0 1rem;
    color:#fff;
    font-weight:800;
    font-size:20px;
    cursor:pointer;
        
    &::after{
        content:'';
        display:block;
        width:0%;
        height:2px;

        background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%);
        transition:width 0.3s ease;
    }

    &:hover{
        text-shadow:  0 0 5px #00DBDE, 0 0 5px #C850C0;
    }

    &:hover::after{
        width:100%;
    }

@media(max-width: 64em){
    /* 1024 px*/
    margin: 1rem 0;
}
`

export const HamburgueMenu = styled.span`
    width:${({click})=> click ? '2rem': '1.5rem'};
    height:2px;
    background:#ddd;

    position: absolute;
    top:2.5rem;
    left:50%;
    transform:${({click})=> click ? 'translateX(-50%) rotate(90deg)': 'translateX(-50%) rotate(0)'};

    display:none;
    justify-content:center;
    align-items:center;

    cursor:pointer;
    transition: all 0.3s ease;
    
@media(max-width: 64em){
     /* 1024px */
    display:flex;
}

    &::after, &::before{
        content:' ';
        width: ${({click})=> click ? '1rem': '1.5rem'};
        height:2px;
        right:${({click})=> click ? '-2px': '0'};
        background:#ddd;
        position:absolute;
        transition: all 0.3s ease;
    }
        
    &::after{
        top:${({click})=> click ? '0.3rem': '0.5rem'};
        transform:${({click})=> click ? 'rotate(-40deg)': 'rotate(0)'};
    }
    &::before{
        bottom:${({click})=> click ? '0.3rem': '0.5rem'};
        transform:${({click})=> click ? 'rotate(40deg)': 'rotate(0)'};
    }
`