import React from "react";
import styled from "styled-components";
import { MainLayout } from "../styles/Layouts";
import Title from "../Components/Title";
import ImageSection from "../Components/ImageSection";
import Particle from "../Components/Particle";
import Skills from "../Components/Skills";
import Resume from "../Components/Resume";
function AboutPage() {
    return (
        <MainLayout>
            <AboutStyled>
                <Title title={"About Me"} span={"About Me"} />
                <ImageSection />
                <Skills />

                <Resume />
                {/* <ServicesSection />
                <ReviewsSection /> */}
            </AboutStyled>
        </MainLayout>
    );
}

const AboutStyled = styled.section`
    .particle-con {
        position: absolute;
    }
`;

export default AboutPage;
