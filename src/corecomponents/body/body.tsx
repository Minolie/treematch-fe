import { Grid } from "@mui/material";

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
          backgroundColor: "#16103F", ///D6D1F9
          height: "100vh",
        }}
        // pt={30}
      >
        <Grid
          item
          sx={{ backgroundColor: bgColor ?? "#16103F", height: "50vh", width: "auto" }}
        >
          {children}
        </Grid>
      </Grid>
    </div>
  );
};

export default Body;
