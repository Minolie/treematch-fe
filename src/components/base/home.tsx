import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

import Body from "../../corecomponents/body/body";
import Logo from "../../corecomponents/logo/logo";
import MainHeader from "./header";
import { PrimaryButton } from "../../corecomponents/button/button";
import { RegularText } from "../../corecomponents/typography/typography";
import {
  BodyBgColor,
  PrimaryButtonColor,
} from "../../corecomponents/color-constants";
import SignInView from "../auth/sign-in/sign-in-view";
import { useState } from "react";
import SignUpView from "../auth/sign-up/sign-up-view";
import "../../corecomponents/index.scss";
import ROUTE from "../../routes/routes";

const Home = () => {
  const [signInPopVisible, setVisible] = useState(false);
  const [registerPopVisible, setRegisterPopVisible] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <MainHeader />
      <Body bgColor={BodyBgColor}>
        <div className="home-welcome-text">
          <h1>Welcome to&nbsp;</h1>
          <Logo fontSize={81} text="TreeMatch" />
        </div>
        <Box sx={{ justifyContent: "center", display: "flex" }}>
          {" "}
          <RegularText
            text="Let's find out a plant that will match your preferences"
            color="white"
            align="center"
          />
        </Box>
        <Box pt={5} sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
          <PrimaryButton
            buttonName="Sign In"
            onClick={() => setVisible(true)}
            type="submit"
            color={PrimaryButtonColor}
          />
          <PrimaryButton
            buttonName="Register"
            onClick={() => setRegisterPopVisible(true)}
            type="submit"
            color={PrimaryButtonColor}
          />
        </Box>
        <Box pt={5} sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
          <PrimaryButton
            buttonName="Take the quiz"
            onClick={() => navigate(ROUTE.QUESTIONNAIRE)}
            type="submit"
            color={PrimaryButtonColor}
          />
        </Box>

      </Body>
      <SignInView
        open={signInPopVisible}
        onClose={() => setVisible(false)}
        onSignIn={() => {
          setVisible(false);
        }}
      />
      <SignUpView
        open={registerPopVisible}
        onClose={() => setRegisterPopVisible(false)}
        onSignIn={() => {
          setVisible(false);
        }}
      />

      {/* <Outlet /> */}
      {/* <Footer /> */}
    </>
  );
};

export default Home;
