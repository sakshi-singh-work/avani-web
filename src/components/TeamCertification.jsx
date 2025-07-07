import styled from "styled-components";
import logos from "../assets/isologo.png";
import logos2 from "../assets/isologo1.png";
import logos3 from "../assets/nabllogo.png";
import "./TeamCertification.css";

const TeamCertification = () => {
  return (
    <Section>
      <div className="team-certification">
        <div className="content">
          <h2>Our Labs are Certified!</h2>
          <p>
            We support our clients in their New Product development activities
            by providing them with engineering, testing and homologation
            services that fit their needs.
          </p>
        </div>
        <div className="logo">
          <div className="img1">
            <img src={logos} />
          </div>
          <div className="img2">
            <img src={logos2} height={"30%"} width={"30%"} />
          </div>
          <div className="img3">
            <img src={logos3} />
          </div>
        </div>
        {/* <picture>
        <source media="(max-width:768px)" srcSet={logosMobile} />
        <source media="(min-width:1440px)" srcSet={logos} />
        <img src={logos} alt="cloud-logos" />
      </picture> */}
      </div>
    </Section>
  );
};
// export default TeamCertification;

// import React from "react";

// const TeamCertification = () => {
//   return <div>TeamCertification</div>;
// };

const Section = styled.section`
  margin: 60px auto;
  padding: 0 20px;
  text-align: left;

  h2 {
    font-size: 44px;
    color: #3a5a40;
    margin-bottom: 24px;
    text-align: left;
    font-weight: 600;
    text-transform: uppercase;
  }

  p {
    font-size: 19px;
    line-height: 1.6;
    margin-bottom: 20px;
  }

  @media (max-width: ${({ theme }) => theme.media.tab}) {
    h2 {
      font-size: 36px;
      color: #3a5a40;
      margin-bottom: 24px;
      font-weight: 300;
    }
    p {
      font-size: 15px;
      line-height: 1.6;
      margin-bottom: 20px;
    }
  }
`;

export default TeamCertification;
