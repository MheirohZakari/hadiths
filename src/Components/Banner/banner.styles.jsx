import styled from "styled-components";

export const Wrapper = styled.div`
    background:linear-gradient(
        to bottom, rgba(0,0,0,0)
        41%, rgba(0,0,0,0.65)
        100%
    ),
     var(--darkGrey);
    background-size:100%, cover;
    background-position:center;
    height:600px;
    position:relative;
    animation: animateHeroImage 1s;


    @keyframes animateHeroImage {
        from{
            opacity:0;
        }
        from{
            opacity:1;
        }
    }
`;


export const Content = styled.div`
    padding:20px;
    max-width: var(--maxWidth);
    margin: 0 auto;
`;


export const Text = styled.div`
    z-index: 1000;
    max-width:700px;
    bottom:40px;
    margin-right:100px;
    min-height:100px;
    color:var(--white);
    

    h1{
        font-size:var(--fontSuperBig);
        font-size:60px;

        @media screen and (max-width:720px){
            font-size:var(--fontBig);
        }
    }

    p{
        font-size:var(--fontMed);
        font-size:20px;
        margin-bottom:40px;

        @media screen and (max-width:720px){
            font-size:var(--fontSmall);
        }
    }

    @media screen and (max-width:720px){
        max-width:100%;

    }
`;
