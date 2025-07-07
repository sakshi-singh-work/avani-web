import styled from "styled-components";
import Chemical from "./assets/IMAGES/ChemicalAnalysis.jpg";
import Mechanical from "./assets/IMAGES/MechanicalTesting.jpg";
import Corrosion from "./assets/IMAGES/CorrosionTesting.png";
import NDT from "./assets/IMAGES/non-destructive_testing.webp";
import Metallurgical_Analysis from "./assets/IMAGES/MetallurgicalAnalysis.jpg";
import HardnessTester from "./assets/IMAGES/HardnessTester.jpg";

const Services = () => {
  // const { services } = useGlobalContext();
  const services = [
    {
      id: "1",
      name: "Chemical Composition Analysis",
      image: Chemical,
      description:
        "Using advanced spectrometry and chemical analysis, we determine the exact elemental makeup of metals and alloys, ensuring they meet industry standards.",
    },
    {
      id: "2",
      name: "Mechanical Testing",
      image: Mechanical,
      description:
        "We evaluate the strength, hardness, and durability of metals through tensile, impact, and fatigue testing to ensure structural integrity.",
    },
    {
      id: "3",
      name: "Corrosion Testing",
      image: Corrosion,
      description:
        "Our corrosion resistance tests simulate real-world conditions to assess how metals withstand environmental factors like moisture, chemicals, and temperature changes.",
    },
    {
      id: "4",
      name: "Non-Destructive Testing (NDT)",
      image: NDT,
      description:
        "We use ultrasonic, radiographic (X-ray), magnetic particle, and dye penetrant testing to detect hidden flaws without damaging the material.",
    },
    {
      id: "5",
      name: "Metallurgical Analysis",
      image: Metallurgical_Analysis,
      description:
        "Our microscopic examination of metal structures helps identify defects, grain size, and heat treatment effectiveness.",
    },
    {
      id: "6",
      name: "Hardness Testing",
      image: HardnessTester,
      description:
        "We measure the hardness of metals using Brinell, Rockwell, and Vickers methods to determine wear resistance and material strength.",
    },
  ];

  return (
    <Wrapper className="section">
      <h2 className="heading">Services Our Labs Provide</h2>
      <div className="container grid grid-three-column">
        {services.map((curElem) => {
          const { id, name, image, description } = curElem;
          return (
            <div key={id} className="card">
              <figure>
                <img src={image} alt={name} />
              </figure>
              <div className="card-data">
                <h3 style={{ margin: "10px 0" }}>{name}</h3>
                <p style={{ padding: 0 }}>{description}</p>
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
  .heading {
    font-size: 44px;
    color: #3a5a40;
    margin-bottom: 24px;
    font-weight: 500;
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
  @media (max-width: ${({ theme }) => theme.media.tab}) {
    .heading {
      font-size: 36px;
      color: #3a5a40;
      margin-bottom: 24px;
      font-weight: 300;
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
