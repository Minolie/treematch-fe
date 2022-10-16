import {
  Box,
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  FormHelperText,
} from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import { AnswerProps } from "./interface";

const AnswerForm = (props: AnswerProps) => {
  const { answers } = props;
  const methods = useFormContext<AnswerProps>();
  const {
    control,
    formState: { errors },
  } = methods;

  console.log('errors', errors);

  return (
    <>
      <FormControl
        variant="standard"
        fullWidth
        error={errors?.answers !== undefined}
      >
        <Controller
          control={control}
          name="answers"
          render={({ field }) => (
            <RadioGroup
              value={field}
              onChange={(value) => field.onChange(value.target.value)}
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
            >
              <Box
                pl={22}
                pt={2}
                sx={{
                  justifyContent: "center",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {answers.map((item, i) => (
                  <FormControlLabel
                    value={item}
                    //   name={field.value}
                    control={
                      <Radio
                        sx={{
                          color: "blue",
                          "&.Mui-checked": {
                            color: "blue",
                          },
                        }}
                      />
                    }
                    label={item}
                  />
                ))}
              </Box>
            </RadioGroup>
          )}
        />
        <FormHelperText sx={{fontFamily: 'Lexend', paddingLeft: 22}}>
          {(errors?.answers?.message)}
        </FormHelperText>
      </FormControl>
    </>
  );
};
export default AnswerForm;
