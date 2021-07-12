import React from "react";
import JumbotronContainer from "../containers/Jumbotron";
import FAQ from "../containers/FAQ";
import FooterContainer from "../containers/Footer";
import HeaderContainer from "../containers/Header";
import { Feature, OptForm } from "../components";

const Home = () => {
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>Unlimited Films, TV Programmes and More</Feature.Title>
          <Feature.SubTitle>
            Watch anywhere, Cancel at any time
          </Feature.SubTitle>
          <OptForm>
            <OptForm.Input placeholder="Email Address" />
            <OptForm.Button>Try It Now</OptForm.Button>
            <OptForm.Break />
            <OptForm.Text>
              Ready to watch? Enter your email to create or restart your
              membership
            </OptForm.Text>
          </OptForm>
        </Feature>
      </HeaderContainer>
      <JumbotronContainer />
      <FAQ />
      <FooterContainer />
    </>
  );
};

export default Home;
