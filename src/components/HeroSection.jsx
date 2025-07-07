import styled from "styled-components";
import { Button } from "../styles/Button";

const HeroSection = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "+919910852911";
    const message = encodeURIComponent(
      "Hello, I would like to inquire about your services."
    );
    window.location.href = `https://wa.me/${phoneNumber}?text=${message}`;
  };

  return (
    <>
      <HeroWrapper>
        <div className="overlay">
          <div className="content">
            <h1>Materials Testing</h1>
            <p>
              Comprehensive testing solutions for polymers, metals, coatings &
              composites
            </p>
            <Button className="call-btn" onClick={handleWhatsAppClick}>
              Enquire Now
            </Button>
          </div>
          {/* <div className="btn-wrapper">
            <Button className="call-btn" onClick={handleWhatsAppClick}>
              Enquire Now
            </Button>
          </div> */}
        </div>
      </HeroWrapper>

      <ContentSection>
        <p>
          Avani performs chemical analysis, mechanical testing, and
          metallurgical examination of alloys, composites, plastics, and
          coatings to accurately define material composition and performance
          characteristics.
        </p>
        <p>
          We have extensive experience with all metallurgical tests,
          examinations and metal failure investigations. We also perform field
          inspections and polymer testing services.
        </p>
        <p>
          All tests and inspections are performed by ISO 17025 and NABL
          accredited laboratories. Our metallurgical team has experience with
          all manufacturing industries and base metals.
        </p>
      </ContentSection>
    </>
  );
};

const HeroWrapper = styled.section`
  width: 100%;
  height: 480px;
  background-image: url("/public/bg.jpg");
  background-size: cover;
  background-position: center;
  position: relative;

  .overlay {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5); // Dark overlay for contrast
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: center;
    padding: 0 20px;
  }

  .content {
    color: rgb(255, 255, 255);
    max-width: 800px;
    padding-left: 120px;
    text-align: justify;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }

  h1 {
    font-size: 48px;
    font-weight: 600;
    color: white;
  }

  p {
    font-size: 20px;
    line-height: 1.6;
    color: #f1f1f1;
    padding: 0px;
    margin: 0;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    height: 320px;
    h1 {
      font-size: 32px;
    }
    p {
      font-size: 16px;
    }
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    height: 420px;

    .content {
      text-align: justify;
      padding-left: 0px;
      display: flex;
      gap: 10px;
    }

    h1 {
      font-size: 32px;
      width: max-content;
      margin: 0px;
    }

    p {
      font-size: 16px;
      text-align: left;
    }
  }
`;

const ContentSection = styled.section`
  max-width: 1000px;
  margin: 60px auto;
  padding: 0 20px;

  p {
    font-size: 18px;
    line-height: 1.6;
    color: #2d2d2d;
    margin-bottom: 20px;
  }

  .btn-wrapper {
    margin-top: 30px;
  }

  .call-btn {
    font-size: 18px;
    padding: 12px 24px;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    p {
      font-size: 16px;
    }
  }
`;

export default HeroSection;
