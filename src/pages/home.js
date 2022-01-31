import React from "react";
import { OptForm, Feature } from "../components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HeaderContainer } from "../containers/header";
import { JumbotronContainer } from "../containers/jumbotron";
import { FaqsContainer } from "../containers/faqs";
import { FooterContainer } from "../containers/footer";
import * as ROUTES from "../constants/routes";

export default function Home() {
  return (
    <>
      <Routes>
        <Route
          exact
          path={ROUTES.HOME}
          element={
            <>
              <HeaderContainer>
                <Feature>
                  <Feature.Title>
                    Unlimited films, TV programmes and more.
                  </Feature.Title>

                  <Feature.SubTitle>
                    Watch Anywhere. Cancel At Any Time.
                  </Feature.SubTitle>
                </Feature>
                <OptForm>
                  <OptForm.Input placeholder="Email Address" />
                  <OptForm.Button>Try It Now</OptForm.Button>
                  <OptForm.Break />
                  <OptForm.Text>
                    Ready to watch? Enter your email to create or restart your
                    membership
                  </OptForm.Text>
                </OptForm>
              </HeaderContainer>
              <JumbotronContainer />
              <FaqsContainer />
              <FooterContainer />
            </>
          }
        ></Route>
      </Routes>
    </>
  );
}
