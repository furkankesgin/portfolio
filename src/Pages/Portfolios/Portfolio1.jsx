import React, { useState } from "react";
import Portfolios from "../../Components/PortfoliosProject";
import portImage1 from "../../img/portImages/portfolioItem-1.png";
import pdf from "../../data/pdfs/IDLast.pdf";
import styled from "styled-components";
import { InnerLayoutPdf } from "../../styles/Layouts";
import portfolios from "../../data/portfolios";
import Menu from "../../Components/Menu";
function renderElement(item) {
    if (item.havepdf)
        return (
            <DownloadButtonStyled>
                <InnerLayoutPdf>
                    <a href={pdf} target="_blank">
                        <h3>Click for pdf</h3>
                    </a>
                </InnerLayoutPdf>
            </DownloadButtonStyled>
        );
    return null;
}
function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable) {
            return pair[1];
        }
    }
    return false;
}
function Portfolio1() {
    console.log();
    const [menuItem] = useState(portfolios);
    return (
        <PortfolioWithPdf isPDF={true}>
            {menuItem.map((item) => {
                if (item.id.toString() === getQueryVariable("id")) {
                    return (
                        <div key={item.id}>
                            <Portfolios
                                title={item.title}
                                projectPhoto={item.image}
                                text={item.text}
                            />
                            <div>{renderElement(item)}</div>
                        </div>
                    );
                }
            })}
        </PortfolioWithPdf>
    );
    // <PortfolioWithPdf>
    //     <Portfolios
    //         title="Instructional Design Problem"
    //         projectPhoto={portImage1}
    //         text="In instructional design lesson, we try to solve a problem.
    //     The problem is that 3rd grade ELT students who have taken CET1101
    //     course at Bahcesehir University cannot use simple functions , they
    //     cannot create tables and graphics. This instructional design goal
    //     is that 3rd grade ELT students will be able to use the functions on
    //     simple problems and table-graphs, they create tables and graphs
    //     using specific data. We collect some data for this project is really
    //     need for those students. We made this project by using Gagne’s 9
    //     Steps of Instruction. In out project document, you can access it
    //     deep detail. For full document, Check in the PDF below:"
    //     />

    //     <DownloadButtonStyled>
    //         <InnerLayoutPdf>
    //             <a href={pdf} target="_blank">
    //                 <h3>Click for pdf</h3>
    //             </a>
    //         </InnerLayoutPdf>
    //     </DownloadButtonStyled>
    // </PortfolioWithPdf>
}
const DownloadButtonStyled = styled.div`
    position: relative;
    color: var(--font-color);
    font-weight: bold;

    h3 {
        padding: 1rem;
        border-radius: 10px;
        background-color: var(--primary-color);
        position: absolute;
    }
`;

const PortfolioWithPdf = styled.div``;
export default Portfolio1;
