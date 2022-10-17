import { Box, Grid } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import CustomModal from "../../../corecomponents/modal/modal";
import { SignInProps } from "../interface";
import SignInForm from "./sign-in-form";

const SignInView = (props: SignInProps) => {
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
      title={"Sign in to your account"}
    >
      <Box>
        <Grid sx={{ display: "flex" }} direction="column" gap="1px">
          <FormProvider {...methods}>
            <SignInForm onSubmit={handleSubmitFrom} onSignIn={onSignIn} />
          </FormProvider>
        </Grid>
      </Box>
    </CustomModal>
  );
};

export default SignInView;
