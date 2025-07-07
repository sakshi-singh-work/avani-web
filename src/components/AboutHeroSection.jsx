import styled from "styled-components";

const AboutHeroSection = () => {
  return (
    <>
      <Section>
        <h2>{"About Us"}</h2>
        <p>
          Welcome to AvaniEcocare Labs, a dedicated testing laboratory
          specializing in polymer and metal analysis. We provide comprehensive,
          science-backed testing solutions to support product development,
          quality assurance, failure analysis, and compliance across a wide
          range of industries.
        </p>
        <p>
          Our lab is powered by a team of highly qualified experts, including
          specialists with Master’s degrees in Plastic Technology and
          Metallurgy, bringing deep domain knowledge and a research-oriented
          approach to every project. We are committed to delivering accurate,
          reliable, and timely test results using state-of-the-art instruments
          and globally recognized testing standards.
        </p>
        <p>
          Whether you’re developing a new product, troubleshooting material
          issues, or validating the quality of raw materials, AvaniEcocare Labs
          is your trusted partner in polymer and metal testing.
        </p>
      </Section>

      <WhyChooseUsSection>
        <h2>Why Choose Us</h2>
        <ul>
          <li>
            <strong>Technical Expertise:</strong>
            <p>
              Our team is led by professionals with advanced degrees in Plastic
              Technology and hands-on industry experience.
            </p>
          </li>
          <li>
            <strong>Research-Driven Mindset:</strong>
            <p>
              We focus on root-cause analysis, innovation, and material
              optimization.
            </p>
          </li>
          <li>
            <strong>Client-Centric Service:</strong>
            <p>
              We prioritize transparency, fast turnaround times, and custom
              solutions tailored to your product goals.
            </p>
          </li>
          <li>
            <strong>Advanced Infrastructure:</strong>
            <p>
              Equipped with state-of-the-art instruments and software to ensure
              precise, reliable results.
            </p>
          </li>
          <li>
            <strong>Comprehensive NPD Testing Consultancy:</strong>
            <p>
              End-to-end testing support for new automotive products—from
              concept to launch. We ensure performance, compliance, and quality
              through expert labs across mechanical, electrical, environmental,
              and regulatory domains.
            </p>
          </li>
        </ul>
      </WhyChooseUsSection>
    </>
  );
};

// ✅ Unified Section Styling (used for About and Why Choose Us)
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
    padding: 0;
  }

  .btn-wrapper {
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
      padding: 0;
    }
  }
`;

const WhyChooseUsSection = styled(Section)`
  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin-bottom: 20px;
    background: #f5f7f9;
    padding: 16px 20px;
    border-radius: 10px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  }

  strong {
    display: block;
    color: #0b5c68;
    font-size: 18px;
    margin-bottom: 8px;
  }

  p {
    margin: 0;
  }
`;

export default AboutHeroSection;
