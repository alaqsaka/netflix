import React from "react";
import { HeaderContainer } from "../containers/header";
import { FooterContainer } from "../containers/footer";
import { SigninForm } from "../containers/siginform";

export default function Signin() {
  return (
    <>
      <HeaderContainer>
        <SigninForm />
      </HeaderContainer>
      <FooterContainer />
    </>
  );
}
