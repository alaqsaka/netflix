import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
