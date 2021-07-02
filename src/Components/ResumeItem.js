import React from "react";
import styled from "styled-components";

function ResumeItem({ year, title, subTitle, text }) {
    return (
        <ResumeItemStyled>
            <div className="left-content">
                <p>{year}</p>
            </div>
            <div className="right-content">
                <h5>{title}</h5>
                <h6>{subTitle}</h6>
                <p>{text}</p>
            </div>
        </ResumeItemStyled>
    );
}

const ResumeItemStyled = styled.div`
    display: flex;
    @media screen and (max-width: 421px) {
        p,
        h5,
        h6 {
            font-size: 80%;
        }
    }
    &:not(:last-child) {
        padding-bottom: 3rem;
    }
    .left-content {
        width: 0rem;
        padding-left: 50px;
        position: relative;
        &::before {
            content: "";
            position: absolute;
            left: -10px;
            top: 5px;
            height: 15px;
            width: 15px;
            border-radius: 50%;
            border: 2px solid var(--border-color);
            background-color: var(--background-dark-color);
        }

        p {
            display: inline-block;
        }
    }
    .right-content {
        padding-left: 10rem;
        position: relative;
        &::before {
            content: "";
            position: absolute;
            left: 6rem;
            top: 15px;
            height: 2px;
            width: 3rem;
            background-color: var(--border-color);
        }
        h5 {
            color: var(--primary-color);
            font-size: 2rem;
            padding-bottom: 0.4rem;
        }
        h6 {
            padding-bottom: 0.6rem;
            font-size: 1.5rem;
        }
    }
`;
export default ResumeItem;
