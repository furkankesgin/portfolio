import React from "react";
import styled from "styled-components";
import GithubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";

import Particle from "../Components/Particle";

function HomePage() {
    return (
        <HomePageStyled>
            <div className="particle-con">
                <Particle />
            </div>
            <div className="typography">
                <h1>
                    Hi I'm <span>Furkan Kesgin</span>
                </h1>
                <p>
                    A talented individual with an information technology
                    background, a strong desire to grow technical skills, and
                    the ability to learn new technologies swiftly. Highly
                    organized computer technology professional with exceptional
                    attention to detail and critical thinking skills.
                    Enthusiastic about computer programming and cybersecurity.
                </p>

                <div className="icons">
                    <a
                        href="https://github.com/furkankesgin/"
                        className="icon i-github"
                    >
                        <GithubIcon />
                    </a>
                    <a
                        href="https://www.instagram.com/securitydiary"
                        className="icon i-instagram"
                    >
                        <InstagramIcon />
                    </a>
                </div>
            </div>
        </HomePageStyled>
    );
}

const HomePageStyled = styled.header`
    width: 100%;
    height: 100vh;
    position: relative;

    .typography {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        width: 80%;

        .icons {
            display: flex;
            justify-content: center;
            margin-top: 1rem;
            .icon {
                border: 2px solid var(--border-color);
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transition: all 0.4s ease-in-out;
                cursor: pointer;
                &:hover {
                    border: 2px solid var(--primary-color);
                    color: var(--primary-color);
                }
                &:not(:last-child) {
                    margin-right: 1rem;
                }
                svg {
                    margin: 0.5rem;
                }
            }

            .i-instagram {
                &:hover {
                    border: 2px solid #5851db;
                    color: #5851db;
                }
            }
            .i-github {
                &:hover {
                    border: 2px solid #5f4687;
                    color: #5f4687;
                }
            }
        }
    }
`;

export default HomePage;
