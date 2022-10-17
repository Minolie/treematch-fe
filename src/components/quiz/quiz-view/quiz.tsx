import { Box } from "@mui/material";

import Body from "../../../corecomponents/body/body";
import Header from "../../../corecomponents/header/header";
import { TitleText } from "../../../corecomponents/typography/typography";

import QuizForm from "../quiz-form/quiz-form";
import { Style } from "../style";

const Quiz = () => {
  return (
    <>
      <Header />
      <Body bgColor="white">
        <Box
          sx={Style}
          style={{
            justifyContent: "space-around",
            borderRadius: "5px",
            width: "590px",
            alignContent: "center",
          }}
        >
          <Box sx={{ justifyContent: "center", display: "flex" }}>
            <TitleText
              text="Time to find your tree"
              color="black"
              align="center"
            />
          </Box>
          <QuizForm />
        </Box>
      </Body>
    </>
  );
};

export default Quiz;
