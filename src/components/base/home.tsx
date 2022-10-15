import { Outlet } from "react-router-dom";
import Body from "../../corecomponents/body/body";
import MainHeader from "./header";
import { Box, Grid } from "@mui/material";
import { Stack } from "@mui/system";
import { PrimaryButton } from "../../corecomponents/button/button";
import { HeadingOne } from "../../corecomponents/typography/typography";

const Home = () => {
  const handleClick = () => {};
  return (
    <>
      <MainHeader />
      <Body bgColor="#16103F">
      <HeadingOne text="Welcome to TreeMatch" color="white" />
          <Stack spacing={2} pt={5}>
            <PrimaryButton
              buttonName="Sign In"
              onClick={handleClick}
              type="submit"
              color="red"
              fullWidth={true}
            />
            <PrimaryButton
              buttonName="Register"
              onClick={handleClick}
              type="submit"
              color="red"
              fullWidth={true}
            />
          </Stack>
        </Body>

      {/* <Outlet /> */}
      {/* <Footer /> */}
    </>
  );
};

export default Home;
