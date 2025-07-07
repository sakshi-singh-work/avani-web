import logos from "../assets/isologo.png";
import logos2 from "../assets/isologo1.png";
import logos3 from "../assets/nabllogo.png";
import "./TeamCertification.css";

const TeamCertification = () => {
  return (
    <div className="team-certification">
      <div className="content">
        <h1>Our Labs are Certified!</h1>
        <p>
          We support our clients in their New Product development activities by
          providing them with engineering, testing and homologation services
          that fit their needs.
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
  );
};
// export default TeamCertification;

// import React from "react";

// const TeamCertification = () => {
//   return <div>TeamCertification</div>;
// };

export default TeamCertification;
