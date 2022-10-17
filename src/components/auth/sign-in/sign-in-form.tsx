import { Box } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

import { PrimaryButton, GhostButton } from "../../../corecomponents/button/button";
import { OxfordBlue, PrimaryButtonColor, ErrorText } from "../../../corecomponents/color-constants";
import CustomTextField from "../../../corecomponents/text-field/text-field";
import { RegularText } from "../../../corecomponents/typography/typography";
import { SignInFormProps, UserSignInFormState } from "../interface";

const SignInForm = (props: SignInFormProps) => {
  const { onSubmit, onSignIn } = props;
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useFormContext<UserSignInFormState>();
  return (
    <form>
      <Box>
        <Controller
          control={control}
          name="email"
          render={({ field }) => (
            <CustomTextField
              {...field}
              label={"Email address"}
              placeholder={"Email address"}
              onBlur={undefined}
              isPassword={false}
              disabled={false}
              type={"text"}
              ref={undefined}
              rows={1}
              multiline={false}
            />
          )}
        />
        <span
          style={{
            color: ErrorText,
            fontSize: "14px",
            fontWeight: "lighter",
            fontFamily: "DM Sans",
            paddingBottom: "1rem",
          }}
        >
          {errors?.email?.message}
        </span>
      </Box>
      <Box py={1}>
        <Controller
          control={control}
          name="password"
          render={({ field }) => (
            <CustomTextField
              {...field}
              label={"Password"}
              placeholder={"Password"}
              onBlur={undefined}
              isPassword={true}
              disabled={false}
              type={"text"}
              ref={undefined}
              rows={1}
              multiline={false}
            />
          )}
        />

        <span
          style={{
            color: ErrorText,
            fontSize: "14px",
            fontWeight: "lighter",
            fontFamily: "DM Sans",
            paddingBottom: "1rem",
          }}
        >
          {errors?.password?.message}
        </span>
      </Box>

      <Box pb={3} sx={{ display: "flex" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <RegularText text={"Forgot password?"} color={OxfordBlue} />
        </Box>
        &nbsp;
        <GhostButton
          buttonName={"Reset"}
          onClick={() => {
          }}
          color={""}
        />
      </Box>

      <PrimaryButton
        buttonName={"Sign in"}
        type="submit"
        onClick={handleSubmit(onSubmit)}
        fullWidth
        color={PrimaryButtonColor}
      />

      <Box pt={1} sx={{ display: "flex", alignItems: "center" }}>
        <RegularText text={"New to TreeMatch?"} color={OxfordBlue} />
        &nbsp;
        <GhostButton
          buttonName={"Register now"}
          onClick={() => {
          }}
          color={""}
        />
      </Box>
    </form>
  );
};

export default SignInForm;
