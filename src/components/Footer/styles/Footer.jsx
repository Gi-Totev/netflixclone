import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 70px 56px;
  margin: auto;
  max-width: 1000px;

  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const Row = styled.div`
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));

  @media (max-width: 1025px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }

  @media (max-width: 769px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
`;

export const Link = styled.a`
  color: #757575;
  margin-bottom: 20px;
  text-decoration: none;
  text-align: center;
`;

export const Title = styled.p`
  font-size: 16px;
  color: #757575;
  margin-bottom: 40px;
  padding-left: 2.5rem;

  @media (max-width: 1025px) {
    padding-left: 1.7rem;
  }

  @media (max-width: 769px) {
    padding-left: 0.3rem;
  }

  @media (max-width: 426px) {
    text-align: center;
    padding-left: 0;
  }
`;

export const Text = styled.p`
  font-size: 16px;
  color: #757575;
  margin-bottom: 40px;
`;

export const Break = styled.p`
  flex-basis: 100%;
  height: 0;
`;
