import React from "react";
import styled from "styled-components";
import { MainLayout } from "../styles/Layouts";
import { Link } from "react-router-dom";
import AllPortfoliosPage from "../Pages/PortfoliosPage";
function Portfolios({ title, projectPhoto, text }) {
    return (
        <PortfolioPageStyled>
            <MainLayout>
                <h2>{title}</h2>
                <img src={projectPhoto} alt="" />
                <h4>{text}</h4>
            </MainLayout>
        </PortfolioPageStyled>
    );
}

const PortfolioPageStyled = styled.div`
    h2 {
        color: var(--white-color);
        font-size: 3.1rem;
        font-weight: 600;
        text-transform: uppercase;
        position: relative;
        padding-bottom: 0.7rem;
        text-align: center;
        @media screen and (max-width: 496px) {
            font-size: 2.8rem;
        }
        @media screen and (max-width: 370px) {
            font-size: 2rem;
        }
        align-self: center;
    }
    img {
        width: 70%;
        margin-left: 14%;
    }
    h4 {
        margin-top: 5rem;
    }
`;
export default Portfolios;
