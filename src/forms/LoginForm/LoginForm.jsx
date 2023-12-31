import { Link, Typography, Stack } from "@mui/material";
import { Formik, Form } from "formik";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Oval } from "react-loader-spinner";
import { Input, Button } from "@/components";
import { login, setIsLoading } from "@/redux/slices/authSlice";
import validationSchema from "./validationSchema";
import { useRef, useState } from "react";
import OutlinedAlerts from "@/components/Alert/OutlinedAlerts";

const StyledStackSX = {
  direction: "column",
  justifyContent: "flex-start",
  p: "28px",
  bgcolor: "#2c2f33",
  borderRadius: { xs: 0, sm: 1 },
  maxWidth: {
    xs: "480px",
  },
  minWidth: {
    xs: "100vw",
    sm: "450px",
  },
  height: {
    xs: "100vh",
    sm: "auto",
  },
};

const StyledLink = {
  position: "absolute",
  left: 0,
  bottom: "-2px",
  textDecoration: "none",
  color: "#00a8fc",
  fontSize: "14px",
};

function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const [showAlert, setShowAlert] = useState(false);
  const errValue = useRef(null);

  const from = location.state?.from?.pathname || "/";
  const isLoading = useSelector((state) => state.auth.isLoading);

  const initialValues = {
    email: "test@test.com",
    password: "testpassword",
  };

  const handleSubmit = (values, actions) => {
    dispatch(setIsLoading(true));
    try {
      dispatch(login(values)).then((res) => {
        console.log(res);
        if (!res.payload) {
          dispatch(setIsLoading(false));
          setShowAlert(true);
          errValue.current = res.error.message;
          return new Error();
        }
        navigate(from, { replace: true });
        actions.resetForm();
        dispatch(setIsLoading(false));
      });
    } catch (err) {
      console.log(err);
      setShowAlert(true);
      errValue.current = err;
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {(form) => (
        <Form>
          <Stack sx={StyledStackSX}>
            <Typography
              component="h2"
              variant="h2"
              sx={{
                color: "#fff",
                textAlign: "center",
                mb: "4px",
                fontSize: "1.5rem",
              }}
            >
              Welcome back!
            </Typography>

            <Typography
              sx={{
                color: "#ffffffa9",
                textAlign: "center",
                mb: 3,
                fontSize: "1.025rem",
              }}
            >
              We&apos;re so exited to see you again!
            </Typography>

            <Input
              id="email"
              label="E-mail"
              type="email"
              name="email"
              required
            />
            <Stack sx={{ position: "relative", mb: 5 }}>
              <Input
                id="password"
                label="Password"
                type="password"
                name="password"
                required
              />
              <Link href="#" sx={StyledLink}>
                Forgot your password?
              </Link>
            </Stack>

            <Button
              disabled={!form.isValid || isLoading}
              sx={{ mb: 3 }}
              type="submit"
            >
              {isLoading ? (
                <span className="flex justify-center">
                  <Oval width={20} height={20} />
                </span>
              ) : (
                "Log In"
              )}
            </Button>

            {showAlert && <OutlinedAlerts error={errValue.current} />}

            <Typography sx={{ fontSize: "0.875rem", color: "#949ba4" }}>
              Need an account? &#32;
              <NavLink
                to="/register"
                className="text-sm font-medium text-[#00a8fc]"
              >
                Register
              </NavLink>
            </Typography>
          </Stack>
        </Form>
      )}
    </Formik>
  );
}

export default LoginForm;
