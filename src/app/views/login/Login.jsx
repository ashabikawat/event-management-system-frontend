"use client";
import React, { useState } from "react";
import AccountCircle from "@mui/icons-material/AccountCircle";

import {
  Box,
  Button,
  FormControl,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import loginImage from "../../../../public/login-page-illustartor.png";
import { Lock } from "@mui/icons-material";
import { axiosWrapper } from "@/utils/axiosWrapper";
import { login } from "@/utils/endpoints";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setToken, addAuthDetails } from "@/store/authSlice";

const Login = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const [formValues, setFormValues] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleFormChange = (e) => {
    const { name, value } = e.target;

    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    let newErrors = {};

    if (!formValues.username) {
      newErrors.username = "Please enter username";
    }
    if (!formValues.password) {
      newErrors.password = "Please enter password";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    try {
      const payload = {
        user_name: formValues.username,
        password: formValues.password,
      };

      const response = await axiosWrapper(login.LOGIN, payload);
      if (response.data.status === 200) {
        dispatch(addAuthDetails(response.data.userDetails));
        dispatch(setToken([response.data.token, response.data.menus]));
        router.push("/dashboard");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Grid
        container
        sx={{
          bgcolor: "#F8FFFF",
          height: "100vh",
          width: "100vw",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            height: "100%",
            width: "100%",
            padding: "20px ",
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <Box
            sx={{
              height: "550px",
              width: { xs: "300px", md: "450px" },
              border: "2px solid #A8E2EA",
              borderRadius: "30px",
              bgcolor: "white",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginLeft: { xs: "0px", md: "100px" },
              padding: "30px 50px",
              // justifyContent: "center",
            }}
          >
            <Typography
              fontWeight="bold"
              variant="h5"
              fontFamily="inherit"
              textAlign="center"
              marginBottom="40px"
            >
              Login
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                justifyContent: "center",
                gap: "25px",
                width: "100%",
              }}
            >
              <FormControl fullWidth>
                <TextField
                  sx={{
                    color: "black",
                    "& .MuiOutlinedInput-root": {
                      backgroundColor: "#f5f5f5",
                      borderRadius: "12px",
                      "& fieldset": {
                        border: "1px solid #1AC0CC", // default border
                        borderRadius: "12px",
                      },
                      "&:hover fieldset": {
                        border: "1px solid #1AC0CC", // hover border
                      },
                      "&.Mui-focused fieldset": {
                        border: "px solid #1AC0CC", // focused border
                      },
                    },
                  }}
                  error={errors.username}
                  helperText={errors.username || ""}
                  slotProps={{
                    input: {
                      startAdornment: (
                        <InputAdornment position="start">
                          <AccountCircle sx={{ color: "#1AC0CC" }} />
                        </InputAdornment>
                      ),
                    },
                  }}
                  id="username"
                  variant="outlined"
                  placeholder="Username"
                  name="username"
                  value={formValues.username}
                  onChange={handleFormChange}

                  // size="small"
                />
              </FormControl>

              <FormControl fullWidth>
                <TextField
                  sx={{
                    color: "black",
                    "& .MuiOutlinedInput-root": {
                      backgroundColor: "#f5f5f5",
                      borderRadius: "12px",
                      "& fieldset": {
                        borderRadius: "12px",
                        border: "1px solid #1AC0CC", // default border
                      },
                      "&:hover fieldset": {
                        border: "1px solid #1AC0CC", // hover border
                      },
                      "&.Mui-focused fieldset": {
                        border: "px solid #1AC0CC", // focused border
                      },
                    },
                  }}
                  slotProps={{
                    input: {
                      startAdornment: (
                        <InputAdornment position="start">
                          <Lock sx={{ color: "#1AC0CC" }} />
                        </InputAdornment>
                      ),
                    },
                  }}
                  id="password"
                  variant="outlined"
                  placeholder="Password"
                  name="password"
                  value={formValues.password}
                  onChange={handleFormChange}
                  error={errors.password}
                  helperText={errors.password || ""}
                  // size="small"
                />
              </FormControl>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "flex-end",
                width: "100%",
              }}
            >
              <Typography
                sx={{
                  fontSize: "14px",
                  marginTop: "10px",
                }}
              >
                Forgot password?
              </Typography>
            </Box>

            <Button
              onClick={handleLogin}
              variant="contained"
              sx={{
                bgcolor: "#000931",
                color: "white",
                width: "100%",
                padding: "10px 10px",
                borderRadius: "10px",
                fontSize: "14px",
                textTransform: "capitalize",
                marginTop: "30px",
              }}
            >
              Login
            </Button>

            <Box mt={6}>
              <Typography
                sx={{
                  color: "gray ",
                  fontSize: "13px",
                  textAlign: "center",
                }}
              >
                Or login with:
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "30px",
                  marginTop: "10px",
                }}
              >
                <span
                  style={{
                    border: "1px solid #ccc",
                    padding: "4px 12px",
                    borderRadius: "10px",
                  }}
                >
                  <i
                    class="ri-facebook-circle-fill"
                    style={{
                      color: "#108EF2",
                      fontSize: "22px",
                    }}
                  ></i>
                </span>

                <span
                  style={{
                    border: "1px solid #ccc",
                    padding: "4px 12px",
                    borderRadius: "10px",
                  }}
                >
                  <i
                    class="ri-twitter-fill"
                    style={{
                      color: "#46ABDF",
                      fontSize: "20px",
                    }}
                  ></i>
                </span>

                <span
                  style={{
                    border: "1px solid #ccc",
                    padding: "4px 12px",
                    borderRadius: "10px",
                  }}
                >
                  <i
                    class="ri-google-fill"
                    style={{
                      fontSize: "20px",
                    }}
                  ></i>
                </span>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              display: { xs: "none", md: "block" },
            }}
          >
            <Image
              alt="login image"
              src={loginImage}
              height={600}
              width={600}
              style={{ transform: "scaleX(-1)" }}
            />
          </Box>
        </Box>
      </Grid>
    </>
  );
};

export default Login;
