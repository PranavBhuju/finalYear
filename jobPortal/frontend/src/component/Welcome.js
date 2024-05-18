import { Grid, Typography, Link } from "@mui/material";
import { Navigate, useNavigate } from "react-router-dom";
import isAuth from "../lib/isAuth";

const Title = (props) => (
  <Typography {...props} sx={{ fontWeight: "bold", margin: "20px 0", ...props.sx }} variant="h4" />
);

const LinkButton = (props) => (
  <Link
    {...props}
    variant="body1"
    underline="hover"
    sx={{
      color: "#006699",
      fontWeight: "bold",
      "&:hover": {
        opacity: 0.8,
      },
      ...props.sx,
    }} />
);


const Welcome = (props) => {
  let navigate = useNavigate();

  const navigateToSignup = (type) => {
    navigate("/signup", { state: { type: type } });
  };

  return (
    isAuth() ?
      <Navigate to="/home" /> : (
        <Grid
          container
          item
          direction="row"
          alignItems="center"
          justifyContent="space-around"
          justify="center"
          sx={{
            backgroundImage: "url(background_header.png)",
            backgroundSize: "contain",
          }}
        >
          <Grid item maxWidth="50%">
            <Title>Start the job that's right for you</Title>
            <LinkButton onClick={() => navigateToSignup('applicant')}>Find a job now <span>&#8594;</span></LinkButton>
          </Grid>
          <Grid item maxWidth="50%">
            <Title>Looking to hire?</Title>
            <LinkButton onClick={() => navigateToSignup('recruiter')}>Find the right candidate <span>&#8594;</span></LinkButton>
          </Grid>
        </Grid>
      )
  );
};

export const ErrorPage = (props) => {
  return (
    <Grid
      container
      item
      direction="column"
      alignItems="center"
      justify="center"
      style={{ padding: "30px", minHeight: "93vh" }}
    >
      <Grid item>
        <Typography variant="h2">Error 404</Typography>
      </Grid>
    </Grid>
  );
};

export default Welcome;
