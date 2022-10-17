import { Box, Grid } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";

import CustomModal from "../../../corecomponents/modal/modal";
import { SignInProps } from "../interface";
import SignUpForm from "./sign-up-form";

const SignUpView = (props: SignInProps) => {
  const { open, onClose, onSignIn } = props;
  const methods = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleSubmitFrom = () => {};

  return (
    <CustomModal
      open={open}
      onModalClose={onClose}
      message={""}
      actions={undefined}
      footer={undefined}
      title={"Welcome to TreeMatch"}
    >
      <Box>
        <Grid sx={{ display: "flex" }} direction="column" gap="1px">
          <FormProvider {...methods}>
            <SignUpForm onSubmit={handleSubmitFrom} onSignIn={onSignIn} />
          </FormProvider>
        </Grid>
      </Box>
    </CustomModal>
  );
};

export default SignUpView;
