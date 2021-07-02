import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import Title from "../Components/Title";
import ProgressBar from "./ProgressBar";

function Skills() {
    return (
        <InnerLayout>
            <SkillsStyled>
                <Title title={"My Skills"} span={"my skills"} />
                <InnerLayout>
                    <div className="skills">
                        <ProgressBar
                            title={"Penetration Testing"}
                            width={"75%"}
                            text={""}
                        />
                        <ProgressBar title={"Python"} width={"60%"} text={""} />
                        <ProgressBar title={"Java"} width={"75%"} text={""} />
                        <ProgressBar
                            title={"Android Studio"}
                            width={"60%"}
                            text={""}
                        />
                        <ProgressBar title={"C#"} width={"70%"} text={""} />
                        <ProgressBar title={"MySQL"} width={"75%"} text={""} />
                        <ProgressBar
                            title={"Arduino"}
                            width={"75%"}
                            text={""}
                        />
                        <ProgressBar
                            title={"React Js"}
                            width={"60%"}
                            text={""}
                        />
                        <ProgressBar
                            title={"HTML/CSS/JavaScript"}
                            width={"90%"}
                            text={""}
                        />
                        <ProgressBar title={"Php"} width={"40%"} text={""} />
                        <ProgressBar
                            title={"Autodesk 3ds Max"}
                            width={"60%"}
                            text={""}
                        />
                        <ProgressBar
                            title={"Adobe Premiere Pro"}
                            width={"95%"}
                            text={""}
                        />
                        <ProgressBar
                            title={"Adobe Photoshop"}
                            width={"75%"}
                            text={""}
                        />
                        <ProgressBar
                            title={"Microsoft Office"}
                            width={"75%"}
                            text={""}
                        />
                    </div>
                </InnerLayout>
            </SkillsStyled>
        </InnerLayout>
    );
}

const SkillsStyled = styled.section`
    .skills {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-row-gap: 2rem;
        grid-column-gap: 3rem;
        @media screen and (max-width: 700px) {
            grid-template-columns: repeat(1, 1fr);
        }
    }
`;

export default Skills;
