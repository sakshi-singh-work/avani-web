import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/Button";
import { useGlobalContext } from "../context";
import { WhatsAppButton } from "./Whatsapp";
import hero from "../assets/IMAGES/hero.png";
const HeroSection = () => {
  const { name } = useGlobalContext();
  const handleDial = () => {
    const phoneNumber = "+919910852911";
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <Wrapper>
      <div className="container grid grid-two-column">
        <div className="section-hero-data">
          <p className="hero-top-data"></p>
          <h1 className="hero-heading">{name}</h1>
          <p className="hero-para">
            We AVANI Ecocare are the Trusted service providers engaged in
            providing the best consultancy services like service of third party
            testing lab to a variety of industries: Automobile, Plastics,
            Consumer products, Metal, civil construction and food items etc.
          </p>
          <div className="container-btn">
            <div className="button">
              <Button className="btn call-btn" onClick={handleDial}>
                Call Us Today
              </Button>
              <Button>
                <WhatsAppButton />
              </Button>
            </div>
          </div>
        </div>

        {/* for image  */}
        <div className="section-hero-image">
          <picture>
            <img src={hero} alt="hero image" className="hero-img " />
          </picture>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;

  .section-hero-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .btn {
    max-width: 17rem;
  }

  .hero-top-data {
    text-transform: uppercase;
    font-weight: 500;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.helper};
  }

  .hero-heading {
    text-transform: uppercase;
    font-size: 6.4rem;
  }
  .call-btn {
    padding: 1rem 0.5rem;
    font-size: 1.8rem;
  }
  .hero-para {
    margin-top: 1.5rem;
    margin-bottom: 3.4rem;
    max-width: 60rem;
  }
  .container-btn {
    display: flex;
    gap: 6px;
    flex-direction: column;
  }
  .button {
    display: flex;
    gap: 6px;
  }

  .section-hero-image {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  picture {
    text-align: center;
  }

  .hero-img {
    max-width: 80%;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 7.2rem;
    }
  }
`;

export default HeroSection;
