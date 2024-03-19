import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "./context";
import { NavLink } from "react-router-dom";
import { Button } from "./styles/Button";
import dhc from "./assets/IMAGES/testingPlastics.jpg";
import quv from "./assets/IMAGES/quv.jpg";
import gcms from "./assets/IMAGES/gcms.webp";
import rubber from "./assets/IMAGES/rubber.jpg";
import electronic from "./assets/IMAGES/electronic.jpg";
import food from "./assets/IMAGES/food.jpg";
import Environmental from "./assets/IMAGES/Environmental.jpg";
import automotive from "./assets/IMAGES/automotive.jpg";

const Services = () => {
  // const { services } = useGlobalContext();
  const services = [
    {
      id: "1",
      name: "DSC Testing Of Polymer",
      image: dhc,
      description:
        "Differential scanning calorimetry (DSC) is a technique used to investigate the response of polymers to heating. DSC can be used to study the melting of a crystalline polymer or the glass transition.",
    },
    {
      id: "2",
      name: "Quv Weatherometer Testing Of Plastic",
      image: quv,
      description:
        "The test simulates the degradation caused by the exposure to sunlight and weather conditions. The sample is exposed to UVA-light during several hours, in dry and humid conditions. ",
    },
    {
      id: "3",
      name: "ION Chromatography of water by gcms",
      image: gcms,
      description:
        "Ion chromatography can be used to identify and quantify ionic contaminants such as chlorides, sulfates, phosphates and ammonia.",
    },
    {
      id: "4",
      name: "Rubber part testing",
      image: rubber,
      description:
        "Rubber testing evaluates the processing and final properties of rubber, polymer, and elastomer materials.",
    },
    {
      id: "5",
      name: "Electrical component testing",
      image: electronic,
      description:
        "Electronic components testing is a process to know if the components are working fine or not in the circuit or off the circuit.",
    },
    {
      id: "6",
      name: "NABL accredited food testing",
      image: food,
      description:
        "Food Testing and analysis is an essential part of the food safety ecosystem to assure that the food is safe to consume.",
    },
    {
      id: "7",
      name: "Environmental Testing Service",
      image: Environmental,
      description:
        "Environmental testing simulates the different climatic conditions and mechanical stress that products are exposed to during their lifetime.",
    },
    {
      id: "8",
      name: "Automotive Component Testing",
      image: automotive,
      description:
        "Prototype and production test and development services for automotive components, either single component or system testing for product development, product validation and type approval testing.",
    },
  ];
  console.log(services);

  return (
    <Wrapper className="section">
      <h2 className="common-heading">Services Our Labs Provide</h2>
      <div className="container grid grid-three-column">
        {services.map((curElem) => {
          const { id, name, image, description } = curElem;
          return (
            <div key={id} className="card">
              <figure>
                <img src={image} alt={name} />
              </figure>
              <div className="card-data">
                <h3>{name}</h3>
                <p>{description}</p>
                {/* <NavLink to="/service">
                  <Button className="btn">Read More</Button>
                </NavLink> */}
              </div>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;
  background-color: ${({ theme }) => theme.colors.bg};

  .container {
    max-width: 120rem;
  }

  .card {
    border: 0.1rem solid rgb(170 170 170 / 40%);
    .card-data {
      padding: 0 2rem;
    }

    h3 {
      margin: 2rem 0;
      font-weight: 300;
      font-size: 2.4rem;
    }
    .btn {
      margin: 2rem auto;
      background-color: rgb(0 0 0 / 0%);
      border: 0.1rem solid rgb(98 84 243);
      display: flex;
      justify-content: center;
      align-items: center;
      color: rgb(98 84 243);
      font-size: 1.4rem;

      &:hover {
        background-color: rgb(98 84 243);
        color: #fff;
      }
    }
  }

  figure {
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    transition: all 0.5s linear;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 0%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      transition: all 0.2s linear;
      cursor: pointer;
    }
    &:hover::after {
      width: 100%;
    }
    &:hover img {
      transform: scale(1.2);
    }
    img {
      max-width: 90%;
      margin-top: 1.5rem;
      height: 20rem;
      transition: all 0.2s linear;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.tab}) {
    .grid-three-column {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-two-column,
    .grid-three-column {
      grid-template-columns: 1fr;
    }
  }
`;

export default Services;
