import styled from "styled-components";

export const MainLayout = styled.div`
    padding: 5rem 5rem 0;
    @media screen and (max-width: 642px) {
        padding: 4rem;
    }
    /* @media screen and (max-width: 510px){
        padding: 3rem;
    } */
    @media screen and (max-width: 571px) {
        padding: 2rem 0.4rem;
    }
`;
export const InnerLayout = styled.div`
    padding: 5rem 0;
`;

export const InnerLayoutPdf = styled.div`
    padding: 2rem 5rem 5rem;
`;
