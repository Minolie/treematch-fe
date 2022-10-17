import { FieldValues, FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { Grid, Box } from "@mui/material";
import { observer } from "mobx-react";

import {
  RegularText,
  TitleText,
} from "../../../corecomponents/typography/typography";
import AnswerForm from "./quiz-answer-form";
import quizValidations from "../validation";
import Logo from "../../../corecomponents/logo/logo";
import useRootStore from "../../../store/useRootStore";
import { PrimaryButtonColor } from "../../../corecomponents/color-constants";
import { PrimaryButton } from "../../../corecomponents/button/button";

const QuizForm = observer(() => {
  const {
    question,
    setQuestion,
    getQuestions,
    questionLoading,
    submitAnswer,
    stepId,
    match,
    answers,
    setMatch,
  } = useRootStore().quizStore;
  const [answersT, setAnswers] = useState<any>([]);

  const methods = useForm({
    shouldUnregister: false,
    resolver: yupResolver(quizValidations),
    mode: "onChange",
  });

  const { handleSubmit, trigger } = methods;

  useEffect(() => {
    fetchQuestions();
  }, [questionLoading]);

  const fetchQuestions = async () => {
    const resp = await getQuestions();
    if (resp) {
      setQuestion(resp?.question);
      setAnswers(resp?.answers);
    }
  };

  const handleFormSubmit = async () => {
    if (await handleValidations()) {
      handleSubmit(onSubmit)();
    }
  };

  const onSubmit = async (form: FieldValues) => {
    const responseObj: IQuizStore.Answer = {
      step_id: stepId,
      answer: form?.answers,
    };
    await submitAnswer(responseObj);
    methods.reset({ answers: "" });
  };

  const handleValidations = async () => {
    const isStepValid = await trigger();
    if (isStepValid) {
      return true;
    }
    return false;
  };

  const handleQuizReset = () => {
    getQuestions();
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
                  <RegularText text={question.question} color="black" />
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
});

export default QuizForm;
