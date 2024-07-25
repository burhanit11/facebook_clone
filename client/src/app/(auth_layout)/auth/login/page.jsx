"use client";
import {
  Box,
  Button,
  Divider,
  Grid,
  LinearProgress,
  TextField,
} from "@mui/material";
import React, { createContext, useContext, useState } from "react";
import * as Yup from "yup";
import LoginIcon from "@mui/icons-material/Login";

import { Field, Form, Formik } from "formik";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid Email").required("Required"),
  password: Yup.string().required("Required"),
});

const Login = () => {
  return (
    <div>
      <Grid
        container
        spacing={0}
        sx={{
          alignItems: "center",
          justifyContent: "center",
          margin: "auto",
          height: "100vh",
        }}
      >
        <Grid item xs={12} md={6}>
          <div className="w-96 m-auto flex flex-col  justify-end ">
            <h1 className=" text-5xl font-bold text-primary pb-2">facebook</h1>
            <p className="text-xl text-gray-80">
              Facebook helps you connect and share with the people in your life.
            </p>
          </div>
        </Grid>

        <Grid item xs={12} md={6} justifyContent="center" alignItems="center">
          <Box
            sx={{
              width: {
                xs: "600px",
              },
              marginX: {
                xs: 2,
                md: 0,
              },
              display: "flex-col",
              alignItems: "center",
              justifyContent: "center",
              // height: "100vh",
            }}
          >
            <div
              className={`px-3 pt-1 pb-4 rounded-md shadow-xl border-2   w-96 `}
              elevation={4}
            >
              <Formik
                initialValues={{
                  email: "",
                  password: "",
                }}
                onSubmit={(values, { setSubmitting }) => {
                  handleLogin(values, setSubmitting);
                }}
                validationSchema={LoginSchema}
              >
                {({ isSubmitting }) => (
                  <Form>
                    <Box margin={1}>
                      <Field
                        margin="dense"
                        component={TextField}
                        name="email"
                        type="email"
                        label="Enter your email or usermame"
                        required
                        fullWidth
                      />
                    </Box>
                    <Box margin={1}>
                      <Field
                        margin="dense"
                        component={TextField}
                        name="password"
                        type="password"
                        label="Password"
                        required
                        fullWidth
                      />
                    </Box>
                    <Box margin={1}>
                      <Button
                        className="bg-primary text-bold"
                        type="submit"
                        fullWidth
                        variant="contained"
                        disabled={isSubmitting}
                      >
                        Login
                      </Button>
                      {isSubmitting && <LinearProgress className="mt-3" />}
                      <Button className="text-center " fullWidth sx={{ my: 1 }}>
                        Forgotten password?
                      </Button>
                      <Divider />
                      <Button
                        className="text-center bg-[#42b72a] hover:bg-[#28591e]"
                        variant="contained"
                        fullWidth
                        bgColor="#42b72a"
                        sx={{ mt: 2 }}
                      >
                        Create new account
                      </Button>
                    </Box>
                  </Form>
                )}
              </Formik>
            </div>

            <p className="pt-10">
              <b>Create a Page</b> Create a Page for a celebrity, brand or
              business.
            </p>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Login;
