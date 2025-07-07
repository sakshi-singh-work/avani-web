import styled from "styled-components";
import { Button } from "../styles/Button";
import { useGlobalContext } from "../context";
const HeroSection = () => {
  const { name } = useGlobalContext();

  const handleWhatsAppClick = () => {
    const phoneNumber = "+919910852911";
    const message = encodeURIComponent(
      "Hello, I would like to inquire about your services."
    );
    window.location.href = `https://wa.me/${phoneNumber}?text=${message}`;
  };

  return (
    <Wrapper>
      <div className="para-wrapper">
        <div className="caption">
          <h1 className="hero-heading">{name}</h1>
          <p className="hero-para">
            Avani performs chemical analysis, mechanical testing, and
            metallurgical examination of alloys, composites, plastics, and
            coatings to accurately define material composition and performance
            characteristics. We have extensive experience with all metallurgical
            tests, examinations and metal failure investigations. We also
            perform field inspections and Polymer testing services. All tests
            and inspections are performed by extensive experience with all ISO
            17025 and Nabl accredited laboratories. Our metallurgical team has
            experience with all manufacturing industries and base metals.
          </p>
          <div className="container-btn">
            <div className="button">
              <Button className="call-btn" onClick={handleWhatsAppClick}>
                Enquire Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 0;
  .hero-img {
    width: auto;
    height: auto;
    min-width: 100%;
    min-height: 100%;
    max-width: none;
    max-height: 480px;
    position: absolute;
    top: 21%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
  }
  .para-wrapper {
    height: 380px;
    position: relative;
    max-width: 1200px;
    margin: 0 auto;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .para-wrapper {
      height: 700px;
    }
  }

  .caption {
    position: absolute;
    color: #fff;
    width: 90%;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    z-index: 2;
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 16px;
  }
  p {
    color: #2d2d2d;
    font-size: 18px;
    line-height: 26px;
    letter-spacing: 0.02em;
    margin-top: 0;
  }
  h1 {
    color: #13343b;
    font-size: 40px;
    line-height: 48px;
    font-weight: 600;
    letter-spacing: -0.02em;
    margin-bottom: 20px;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 7.2rem;
    }
  }
`;

export default HeroSection;
