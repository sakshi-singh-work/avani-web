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
    <Section>
      <h2>{name}</h2>
      <p>
        Avani performs chemical analysis, mechanical testing, and metallurgical
        examination of alloys, composites, plastics, and coatings to accurately
        define material composition and performance characteristics.
      </p>
      <p>
        We have extensive experience with all metallurgical tests, examinations
        and metal failure investigations. We also perform field inspections and
        Polymer testing services.
      </p>
      <p>
        All tests and inspections are performed by ISO 17025 and NABL accredited
        laboratories. Our metallurgical team has experience with all
        manufacturing industries and base metals.
      </p>
      <div className="btn-wrapper">
        <Button className="call-btn" onClick={handleWhatsAppClick}>
          Enquire Now
        </Button>
      </div>
    </Section>
  );
};

const Section = styled.section`
  max-width: 1000px;
  margin: 60px auto;
  padding: 0 20px;
  text-align: left;

  h2 {
    font-size: 44px;
    color: #3a5a40;
    margin-bottom: 24px;
    text-align: left;
    font-weight: 500;
    font-family: "Kanit, sans-seri";
  }

  p {
    font-size: 19px;
    line-height: 1.6;
    margin-bottom: 20px;
    font-family: "Kanit, sans-seri";
  }

  .btn-wrapper {
    // text-align: center;
    margin-top: 30px;
  }

  .call-btn {
    font-size: 18px;
    padding: 12px 24px;
  }

  @media (max-width: ${({ theme }) => theme.media.tab}) {
    h2 {
      font-size: 36px;
      color: #3a5a40;
      margin-bottom: 24px;
      font-weight: 300;
      font-family: "Kanit, sans-seri";
    }
    p {
      font-size: 15px;
      line-height: 1.6;
      margin-bottom: 20px;
      font-family: "Kanit, sans-seri";
    }
  }
`;

export default HeroSection;
