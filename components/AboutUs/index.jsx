import {
  AboutTitle,
  About,
  AboutBelow,
  AboutImage,
  AboutContent,
  AboutDescription,
  AboutQuote,
  AboutLink,
  Section,
  Container,
  AboutContentLowerContainer,
  AboutButton,
  AboutImageDiv,
} from "./AboutUs.styled";
import Link from 'next/link'

const AboutUs = () => {
  return (
    <Section id="about-us">
      <Container>

          <AboutBelow>
            <AboutImageDiv
            >
              <AboutImage src="/images/about.jpeg" alt="Two female team members discussing project"/>
            </AboutImageDiv>
            <AboutContent>
              <AboutTitle>¡Conoce Duality Domain!</AboutTitle>
              <AboutDescription>
              Somos un equipo especializado en diseño, desarrollo web y programación, 
              creando soluciones digitales innovadoras y
              adaptadas a cada negocio. 
              Programación y Tecnología
Desarrollo responsive para móviles, tablets y desktops.

Tecnologías avanzadas: React, Node.js, APIs, bases de datos y más.

Seguridad y escalabilidad para garantizar el crecimiento de tu negocio.
              solution for you.
              </AboutDescription>
              <Link href='#contact-us'>
                <AboutButton>Accelerate your growth</AboutButton>
                </Link>
            </AboutContent>
          </AboutBelow>
     
      </Container>
    </Section>
  );
};

export default AboutUs;
