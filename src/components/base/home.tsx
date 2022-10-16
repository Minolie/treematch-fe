import { Outlet } from "react-router-dom";
import Body from "../../corecomponents/body/body";
import Logo from '../../corecomponents/logo/logo';
import MainHeader from "./header";
import { Box } from "@mui/material";
import { PrimaryButton } from "../../corecomponents/button/button";
import {
  RegularText,
} from "../../corecomponents/typography/typography";

import "../../corecomponents/index.scss";
import { BodyBgColor, PrimaryButtonColor } from "../../corecomponents/color-constants";

const Home = () => {
  const handleClick = () => {};
  return (
    <>
      <MainHeader />
      <Body bgColor={BodyBgColor}>
        <div className="home-welcome-text">
          <h1>Welcome to&nbsp;</h1>
          <Logo fontSize={81} text="TreeMatch"/>
        </div>
        {/* <HeadingOne text={`Welcome to`} color="white" /><HeadingOneGradient  text="TreeMatch" color="red"/> */}
        <Box sx={{ justifyContent: "center", display: "flex" }}>
          {" "}
          <RegularText
            text="Find our the plant that you want"
            color="white"
            align="center"
          />
        </Box>
        <Box pt={5} sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
          <PrimaryButton
            buttonName="Sign In"
            onClick={handleClick}
            type="submit"
            color={PrimaryButtonColor}
          />
          <PrimaryButton
            buttonName="Register"
            onClick={handleClick}
            type="submit"
            color={PrimaryButtonColor}
          />
        </Box>
      </Body>

      {/* <Outlet /> */}
      {/* <Footer /> */}
    </>
  );
};

export default Home;
