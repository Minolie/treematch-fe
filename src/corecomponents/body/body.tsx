import { Grid } from "@mui/material";
import { BodyBgColor } from "../color-constants";

interface BodyProps {
  children: React.ReactNode;
  bgColor: string;
}

const Body = ({ children, bgColor }: BodyProps) => {
  return (
    <div>
      <Grid
        container
        spacing={0}
        sx={{
          alignContent: "center",
          justifyContent: "center",
          flexDirection: "column",
          backgroundColor: BodyBgColor,
          height: "100vh",
          padding: 10,
        }}
      >
        <Grid
          item
          sx={{
            backgroundColor: bgColor ?? BodyBgColor,
            height: "50vh",
            width: "auto",
          }}
        >
          {children}
        </Grid>
      </Grid>
    </div>
  );
};

export default Body;
