import { Box, Grid } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import {
  PrimaryButton,
  GhostButton,
} from "../../../corecomponents/button/button";
import { ErrorText, OxfordBlue, PrimaryButtonColor } from "../../../corecomponents/color-constants";
import CustomTextField from "../../../corecomponents/text-field/text-field";
import { RegularText } from "../../../corecomponents/typography/typography";
import { SignInFormProps, UserSignInFormState } from "../interface";

const SignUpForm = (props: SignInFormProps) => {
  const { onSubmit, onSignIn } = props;
  const {
    control,
    formState: { errors },
  } = useFormContext<UserSignInFormState>();

  return (
    <form onSubmit={onSubmit}>
      <Grid sx={{ display: "flex" }} direction="column" gap="1px">
        <Controller
          control={control}
          name="email"
          render={({ field }) => (
            <CustomTextField
              label={"Email address"}
              placeholder={"example@email.com"}
              isPassword={false}
              disabled={false}
              type={"text"}
              rows={0}
              multiline={false}
              {...field}
            />
          )}
        />
        <span
          style={{ color: ErrorText, fontSize: "14px", fontWeight: "lighter" }}
        >
          {errors?.email?.message}
        </span>
        <Box sx={{ paddingBottom: "30px" }}>
          <RegularText
            text={"We will send you an email for verification."}
            color={OxfordBlue}
          />
        </Box>
        <PrimaryButton
          buttonName={"Continue"}
          type="submit"
          onClick={function (val: any): void {
            throw new Error("Function not implemented.");
          }}
          color={PrimaryButtonColor}
        />
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <RegularText text={"Already have an account?"} color={OxfordBlue} />
          &nbsp;
          <GhostButton
            buttonName={"Sign in"}
            color={""}
            onClick={() => {
              onSignIn();
            }}
          />
        </Box>
      </Grid>
    </form>
  );
};

export default SignUpForm;
