import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import Title from "../Components/Title";
import SmallTitle from "../Components/SmallTitle";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import SchoolIcon from "@material-ui/icons/School";
import ResumeItem from "../Components/ResumeItem";

function Resume() {
    const briefcase = <BusinessCenterIcon />;
    const school = <SchoolIcon />;
    return (
        <ResumeStyled>
            <Title title={"Resume"} span={"resume"} />
            <InnerLayout>
                <div className="small-title">
                    <SmallTitle icon={briefcase} title={"Working Experience"} />
                </div>
                <div className="resume-content">
                    <ResumeItem
                        year={"2018 - 2019"}
                        title={"Penetration Tester"}
                        subTitle={"Infinitum IT"}
                        text={
                            "Worked well independently and on a team to solve problems. Served as a friendly, hardworking, and punctual employee. Organized and prioritized work to complete assignments in a timely, efficient manner. Served as a positive and enthusiastic team player. Performed thorough research for planning purposes. Testing companies' security environment."
                        }
                    />
                    <ResumeItem
                        year={"2019 - Present"}
                        title={"Tubitak Project Assistance"}
                        subTitle={"Bahcesehir University"}
                        text={
                            <p>
                                Tubitak Project No :{" "}
                                <a href="#" class="project-link">
                                    118E832
                                </a>
                                , Tubitak Project Name : Classifying Food Type
                                from Food Images with ContextEmpowered Deep
                                Neural Networks. Worked well with team for food
                                increase prediction result. Creating datasets,
                                creating own models for training and testing.{" "}
                            </p>
                        }
                    />
                    <ResumeItem
                        year={"2020 - 2020"}
                        title={"Teacher"}
                        subTitle={"Bilge Adam Tech School"}
                        text={
                            "Create contents in C# programming language for high school student. Recording C# programming language videos from scratch to object oriented. "
                        }
                    />
                    <ResumeItem
                        year={"2020 - Present"}
                        title={"Teacher"}
                        subTitle={"Hibrit Çocuk"}
                        text={
                            "I teach coding for student in an online session. "
                        }
                    />
                </div>
                <div className="small-title u-small-title-margin">
                    <SmallTitle
                        icon={school}
                        title={"Educational Qualifications"}
                    />
                </div>
                <div className="resume-content ">
                    <ResumeItem
                        year={"2016 - Present"}
                        title={
                            "Computer Education and Instructional Technology"
                        }
                        subTitle={"Bahcesehir University"}
                        text={
                            "I improve myself by searching and understand technical lesson."
                        }
                    />
                </div>
            </InnerLayout>
        </ResumeStyled>
    );
}

const ResumeStyled = styled.section`
    .small-title {
        padding-bottom: 3rem;
    }
    .u-small-title-margin {
        margin-top: 4rem;
    }

    .resume-content {
        border-left: 2px solid var(--border-color);
    }
    .project-link {
        color: var(--primary-color);
        &:hover {
            color: var(--light-white-color);
        }
    }
`;
export default Resume;
