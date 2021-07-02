import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import portfolios from "../data/portfolios";

// export default Menu;
function Menu({ menuItem }) {
    return (
        <MenuItemStyled>
            {menuItem.map((item) => {
                return (
                    <div className="grid-item" key={item.id}>
                        <div className="portfolio-content">
                            <div className="portfolio-image">
                                <img src={item.image} alt="" />
                                <ul>
                                    <li>
                                        <Link
                                            to={item.link1 + "?id=" + item.id}
                                        >
                                            Click here for more
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <h6>{item.title}</h6>
                        </div>
                    </div>
                );
            })}
        </MenuItemStyled>
    );
}

const MenuItemStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
    @media screen and (max-width: 920px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 670px) {
        grid-template-columns: repeat(1, 1fr);
    }
    .grid-item {
        .portfolio-content {
            display: block;
            position: relative;
            overflow: hidden;
            h6 {
                font-size: 1.5rem;
            }
            img {
                width: 100%;
                height: 30vh;
                object-fit: fill;
            }
            ul {
                transform: translateY(-600px);
                transition: all 0.4s ease-in-out;
                position: absolute;
                left: 50%;
                top: 40%;
                opacity: 0;
                li {
                    background-color: var(--border-color);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 1rem;
                    border-radius: 20px;
                    margin: 0 0.5rem;
                    transition: all 0.4s ease-in-out;
                    &:hover {
                        background-color: var(--primary-color);
                    }
                    a {
                        width: 100%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        transition: all 0.4s ease-in-out;
                    }
                }
            }

            .portfolio-image {
                &::before {
                    content: "";
                    position: absolute;
                    /* left: 2%;
                    top: 4%; */
                    height: 0;
                    width: 0;
                    transition: all 0.4s ease-in-out;
                }
            }
            .portfolio-image:hover {
                img {
                    filter: blur(8px);
                }
                ul {
                    transform: translateY(0);
                    transform: translate(-50%, -50%);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.4s ease-in-out;
                    opacity: 1;
                    li {
                        transition: all 0.4s ease-in-out;
                        &:hover {
                            background-color: var(--primary-color);
                        }
                        a {
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            transition: all 0.4s ease-in-out;
                        }
                    }

                    li:hover {
                        svg {
                            color: var(--white-color);
                        }
                    }
                    svg {
                        font-size: 2rem;
                    }
                }
                &::before {
                    height: calc(100% - 20%);
                    width: calc(100%);
                    background-color: var(--border-color);
                    opacity: 0.7;
                    transform-origin: left;

                    transition: all 0.4s ease-in-out;
                }
            }
        }
    }
`;

export default Menu;
