import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import LockIcon from "@mui/icons-material/Lock";
import { Formik } from "formik";
import image from "../assets/result.svg";
import Grid from "@mui/material/Grid";
import { registerSchema } from "../components/register/RegisterSchema";
import RegisterForm from "../components/register/RegisterForm";
import { Link, useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import useAuthCalls from "../hooks/useAuthCalls";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";

const Register = () => {
  const navigate = useNavigate();
  const { register } = useAuthCalls();
  const { currentUser, error } = useSelector((state) => state.auth);

  useEffect(() => {
    if (currentUser) {
      navigate("/stock");
      toastSuccessNotify("Sign-in is performed succesfuly");
    }
  }, [navigate, currentUser]);

  useEffect(() => {
    error && toastErrorNotify("Sign-up failed");
  }, [error]);

  return (
    <Container maxWidth="lg">
      <Grid
        container
        justifyContent="center"
        direction="row-reverse"
        rowSpacing={{ sm: 3 }}
        sx={{
          height: "100vh",
          p: 2,
        }}
      >
        <Grid item xs={12}>
          <Typography variant="h3" color="primary" align="center">
            STOCK APP
          </Typography>
        </Grid>

        <Grid item xs={12} sm={10} md={6}>
          <Avatar
            sx={{
              backgroundColor: "secondary.light",
              m: "auto",
              width: 40,
              height: 40,
            }}
          >
            <LockIcon size="30" />
          </Avatar>
          <Typography
            variant="h4"
            align="center"
            mb={2}
            color="secondary.light"
          >
            Register
          </Typography>

          <Formik
            initialValues={{
              username: "",
              first_name: "",
              last_name: "",
              email: "",
              password: "",
            }}
            validationSchema={registerSchema}
            onSubmit={(values, actions) => {
              register({ ...values, password2: values.password });
              actions.resetForm();
              actions.setSubmitting(false);
            }}
            component={(props) => <RegisterForm {...props} />}
          ></Formik>
          <Box sx={{ textAlign: "center", mt: 2 }}>
            <Link to="/">Do you have an account?</Link>
          </Box>
        </Grid>

        <Grid item xs={0} sm={7} md={6}>
          <Container>
            <img src={image} alt="" />
          </Container>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Register;
