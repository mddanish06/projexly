import { useNavigate } from "react-router-dom";
import HeaderImage from "../../../assets/images/Header.png";
import styled from "styled-components";

const Container = styled.div`
  height: 80vh;
  margin: 6px 14px;
  max-width: 1320px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 80px;
  padding: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
    padding: 20px 12px 30px 12px !important;
    height: 70vh;
  }
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const TitleTag = styled.div`
  font-size: 58px;
  font-weight: 800;
  color: ${({ theme }) => theme.text};
  @media (max-width: 768px) {
    font-size: 40px;
  }
`;

const DescriptiveTag = styled.p`
  font-size: 17px;
  @media (max-width: 768px) {
    font-size: 15px;
  }
  font-weight: 300;
  margin-bottom: 32px;
  line-height: 1.5;
  color: ${({ theme }) => theme.soft2};
`;
const Button = styled.button`
  width: 50%;
  padding: 16px 20px;
  font-size: 20px;
  font-weight: 600;
  background: linear-gradient(
    225deg,
  rgba(0, 51, 153, 0.9) 0%,
  rgba(0, 204, 255, 0.8) 100%
  );
  color: ${({ theme }) => theme.text};
  border: none;
  border-radius: 10px;
  cursor: pointer;
  @media (max-width: 1250px) {
    width: 80%;
  }
  @media (max-width: 600px) {
    width: 100%;
    font-size: 16px;
  }
`;
const Image = styled.img`
  width: 500px;
  height: 500px;
  flex: 0.8;
  display: flex;
  object-fit: scale-down;
  border-radius: 10px;
  @media (max-width: 1000px) {
    display: none;
  }
`;

const Hero = () => {
  const navigate = useNavigate();
  return (
    <Container id="home">
      <Left>
        <TitleTag>
          <b>Power Your Projects with Our App.</b>
        </TitleTag>
        <DescriptiveTag>
          Take control of your projects and stay on top of your goals with our
          intuitive project management app. Say goodbye to chaos and hello to
          streamlined efficiency. Try it now and experience the difference.
        </DescriptiveTag>
        <Button onClick={() => navigate("/auth")}>Manage a New Project</Button>
      </Left>
      <Image src={HeaderImage} />
    </Container>
  );
};

export default Hero;
