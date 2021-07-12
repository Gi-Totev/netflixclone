import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  border-bottom: 8px solid #222;
  padding: 165px 45px;

  @media (max-width: 1025px) {
    padding: 135px 45px;
  }

  @media (max-width: 769px) {
    padding: 125px 45px;
  }

  @media (max-width: 426px) {
    padding: 90px 45px;
  }

  @media (max-width: 321px) {
    padding: 65px 45px;
  }
`;

export const Title = styled.h1`
  color: #fff;
  max-width: 640px;
  font-size: 50px;
  font-weight: 500;
  margin: auto;

  @media (max-width: 600px) {
    font-size: 35px;
  }
`;

export const SubTitle = styled.h2`
  color: #fff;
  max-width: 640px;
  font-size: 26px;
  font-weight: normal;
  margin: 16px auto;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;
