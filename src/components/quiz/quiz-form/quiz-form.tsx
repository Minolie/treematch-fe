import { FieldValues, FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { TreeMatchClient } from "../../../api/treematch.api";
import {
  RegularText,
  TitleText,
} from "../../../corecomponents/typography/typography";
import { Grid, Box } from "@mui/material";
import AnswerForm from "./quiz-answer-form";
import { PrimaryButton } from "../../../corecomponents/button/button";
import { PrimaryButtonColor } from "../../../corecomponents/color-constants";
import quizValidations from "../validation";
import Logo from "../../../corecomponents/logo/logo";

const QuizForm = () => {
  const [question, setQuestion] = useState("");
  const [answers, setAnswers] = useState<any>([]);
  const [activeStep, setActiveStep] = useState(1);
  const [match, setMatch] = useState({
    name: "",
    description: "",
  });

  const methods = useForm({
    shouldUnregister: false,
    resolver: yupResolver(quizValidations),
    mode: "onChange",
  });

  const { handleSubmit, trigger } = methods;

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    const resp = await TreeMatchClient.FetchQuestion();
    if (resp) {
      setQuestion(resp?.question);
      setAnswers(resp?.answers);
    }
    return resp;
  };

  const handleFormSubmit = async () => {
    if (await handleValidations()) {
      handleSubmit(onSubmit)();
    }
  };

  const onSubmit = async (form: FieldValues) => {
    const resp = await TreeMatchClient.SendAnswers(activeStep, form?.answers);
    if (resp?.match === null && resp?.question) {
      setQuestion(resp?.question?.question);
      setActiveStep(resp?.question?.step_id);
      setAnswers(resp?.question?.answers);
      methods.reset({ answers: "" });
    } else if (resp?.question === null && resp?.match) {
      setMatch(resp?.match);
    }
  };

  const handleValidations = async () => {
    const isStepValid = await trigger();
    if (isStepValid) {
      return true;
    }
    return false;
  };

  const handleQuizReset = () => {
    fetchQuestions();
    setMatch({ name: "", description: "" });
  };

  return (
    <div>
      <FormProvider {...methods}>
        <Grid container pt={2} sx={{ justifyContent: "space-between" }}>
          <Grid item xs={12}>
            {match?.name !== "" ? (
              <>
                <Box sx={{ justifyContent: "center", display: "flex" }}>
                  <Logo fontSize={36} text="Match found!" />
                </Box>
                <Box pt={5} sx={{ justifyContent: "center", display: "flex" }}>
                  <TitleText text={match?.name} color="black" align="center" />
                </Box>
                <Box
                  sx={{ justifyContent: "center", display: "flex", padding: 4 }}
                >
                  <RegularText text={match?.description} color="black" />
                </Box>

                <Box pt={5} sx={{ justifyContent: "center", display: "flex" }}>
                  <PrimaryButton
                    buttonName="Take the quiz again"
                    onClick={() => handleQuizReset()}
                    type="submit"
                    color={PrimaryButtonColor}
                  />
                </Box>
              </>
            ) : (
              <>
                <Box sx={{ justifyContent: "center", display: "flex" }}>
                  <RegularText text={question} color="black" />
                </Box>
                <AnswerForm answers={answers} />
                <Box pt={5} sx={{ justifyContent: "center", display: "flex" }}>
                  <PrimaryButton
                    buttonName="Submit"
                    onClick={handleFormSubmit}
                    type="submit"
                    color={PrimaryButtonColor}
                  />
                </Box>
              </>
            )}
          </Grid>
        </Grid>
      </FormProvider>
    </div>
  );
};

export default QuizForm;
