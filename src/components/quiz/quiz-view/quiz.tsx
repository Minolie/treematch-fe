import { Box } from "@mui/material";
import Body from "../../../corecomponents/body/body";
import Header from "../../../corecomponents/header/header";
import { HeadingOne } from "../../../corecomponents/typography/typography";
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
          }}
        >
          <HeadingOne text="Time to find your tree" color="black" />
          <QuizForm />
        </Box>
      </Body>
    </>
  );
};

export default Quiz;
