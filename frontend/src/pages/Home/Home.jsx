import styled from "styled-components";
import Benefits from "./components/Benifits";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Team from "./components/Team";

const Body = styled.div`
  background: #13111c;
  display: flex;
  justify-content: center;
  overflow-x: hidden;
`;
const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Top = styled.div`
  width: 100%;
  display: flex;
  padding-bottom: 50px;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(
      38.73deg,
      rgba(0, 153, 255, 0.15) 0%, /* primary color with transparency */
      rgba(2, 16, 36, 0) 50% /* bgLight with transparency */
    ),
    linear-gradient(
      141.27deg,
      rgba(2, 16, 36, 0) 50%, /* bgLight with transparency */
      rgba(0, 153, 255, 0.15) 100% /* primary color with transparency */
    );

  clip-path: polygon(0 0, 100% 0, 100% 100%, 50% 95%, 0 100%);
  @media (max-width: 768px) {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 50% 98%, 0 100%);
    padding-bottom: 0px;
  }
`;
const Content = styled.div`
  width: 100%;
  height: 100%;
  background: #13111c;
  display: flex;
  flex-direction: column;
`;

const Home = () => {
  return (
    <Body>
      <Container>
        <Top>
          <Navbar />
          <Hero />
        </Top>
        <Content>
          <Features />
          <Benefits />
          <Team />
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Footer />
          </div>
        </Content>
      </Container>
    </Body>
  );
};

export default Home;
