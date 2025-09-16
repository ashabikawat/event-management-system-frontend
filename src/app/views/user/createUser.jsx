"use client";
import { axiosWrapper } from "@/utils/axiosWrapper";
import { showError, showSuccess } from "@/utils/confirmationBox";
import { roleEndpoints, userEndpoints } from "@/utils/endpoints";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";

const CreateUser = ({
  setIsCreateUser,
  toast,
  getUser,
  editObject,
  setUpdateId,
  setEditObject,
}) => {
  const [roles, setRoles] = useState([]);
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [formValues, setFormValues] = useState({
    username: "",
    password: "",
    phone: "",
    email: "",
    name: "",
    role: "",
  });

  useEffect(() => {
    setFormValues({
      username: editObject?.user_name || "",
      password: "",
      phone: editObject?.mob_no || "",
      email: editObject?.email || "",
      name: editObject?.name || "",
      role: editObject?.role_id || "",
    });
  }, [editObject]);

  const validateData = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[1-9]\d{9}$/;

    let newErrors = {};

    const { username, password, phone, email, name, role } = formValues;

    if (!username) {
      newErrors.username = "Username is required";
    }

    if (!password && !Object.keys(editObject)?.length > 0) {
      newErrors.password = "Password is required";
    }

    if (phone && !phoneRegex.test(phone)) {
      newErrors.phone = "Phone number must be valid number";
    }

    if (email && !emailRegex.test(email)) {
      newErrors.email = "Email id must be valid id";
    }

    if (!name) {
      newErrors.name = "Name is required";
    }

    if (!role) {
      newErrors.role = "Role is required";
    }

    setErrors(newErrors);

    console.log("newErrors", newErrors);

    if (Object.keys(newErrors).length === 0) {
      saveUser();
    }
  };

  const saveUser = async () => {
    try {
      let response;

      if (Object.keys(editObject)?.length > 0) {
        const payload = {
          password: formValues.password,
          name: formValues.name,
          email: formValues.email || null,
          mob: formValues.phone || null,
          role_id: formValues.role,
          user_id: editObject?.user_id,
        };
        console.log(payload);
        response = await axiosWrapper(
          userEndpoints.UPDATE_USER,
          payload,
          "patch"
        );
      } else {
        const payload = {
          user_name: formValues.username,
          password: formValues.password,
          name: formValues.name,
          email: formValues.email || null,
          mob: formValues.phone || null,
          role_id: formValues.role,
        };
        response = await axiosWrapper(
          userEndpoints.CREATE_USER,
          payload,
          "post"
        );
      }

      setIsCreateUser(false);

      console.log(response);

      if (response.data.status === 200) {
        toast.current.show(showSuccess(response.data.message));
        handleReset();
        getUser();
      }

      // if (response.data.status === 400) {
      //   toast.current.show(showError(response.data.message));
      //   setIsCreateUser(false);
      //   return;
      // }
    } catch (error) {
      console.log("error", error);
      if (error) {
        toast.current.show(showError(error.response.data.message));
        setIsCreateUser(false);
        return;
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleReset = () => {
    setFormValues({
      username: "",
      password: "",
      phone: "",
      email: "",
      name: "",
      role: "",
    });
    setErrors({});
    setUpdateId(null);
    setEditObject({});

    setIsCreateUser(false);
  };

  useEffect(() => {
    getRoles();
  }, []);

  const getRoles = async () => {
    try {
      const response = await axiosWrapper(roleEndpoints.GET_ROLES, {}, "get");
      setRoles(response.data.roles);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          bgcolor: "rgba(0,0,0,0.5)",
          zIndex: 700,
        }}
      >
        <Box
          sx={{
            bgcolor: "white",
            minWidth: "600px",
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            zIndex: 1001,
            p: 4,
            borderRadius: "10px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "30px",
            }}
          >
            <Typography fontWeight={600} fontFamily="inherit" fontSize="18px">
              {Object.keys(editObject)?.length > 0 ? "Update User" : "Add User"}
            </Typography>
            <span
              style={{
                backgroundColor: "red",
                color: "white",
                padding: "2px 6px",
                borderRadius: "20px",
                border: "1px solid #F8FAFB",
                cursor: "pointer",
              }}
              className="close-btn"
              onClick={() => {
                setIsCreateUser(false);
                setEditObject({});
                setUpdateId(null);
              }}
            >
              {" "}
              <i
                class="ri-close-fill"
                style={{
                  fontSize: "16px",
                  fontWeight: "500",
                }}
              ></i>
            </span>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "space-between",
              gap: "30px",
            }}
          >
            {/* username */}
            <FormControl fullWidth>
              <label
                style={{
                  color: "#8D8D8D",
                  marginBottom: "10px",
                  fontSize: "14px",
                  fontWeight: "500",
                }}
              >
                Username <span style={{ color: "red" }}>*</span>
              </label>
              <TextField
                variant="outlined"
                value={formValues.username}
                onChange={handleChange}
                name="username"
                size="small"
                sx={{
                  borderRadius: "10px",
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "10px", // applies to the outer border
                    bgcolor: "#FAFAFA",
                  },
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderRadius: "10px", // ensures the outline itself has rounded corners
                  },
                  ".MuiInputBase-input": {
                    fontSize: "16px",
                    fontFamily: "Mona Sans",
                  },
                }}
                error={errors.username}
                helperText={errors.username}
                disabled={Object.keys(editObject)?.length > 0}
              />
            </FormControl>

            {/* password */}
            <FormControl
              fullWidth
              error={errors.password && !Object.keys(editObject)?.length > 0}
            >
              <label
                style={{
                  color: "#8D8D8D",
                  marginBottom: "10px",
                  fontSize: "14px",
                  fontWeight: "500",
                }}
              >
                Password <span style={{ color: "red" }}>*</span>
              </label>
              <OutlinedInput
                onChange={handleChange}
                value={formValues.password}
                name="password"
                // variant="outlined"
                type={isShowPassword ? "type" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setIsShowPassword(!isShowPassword)}
                      edge="end"
                    >
                      {isShowPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                size="small"
                sx={{
                  bgcolor: "#FAFAFA",
                  borderRadius: "10px",
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "10px", // applies to the outer border
                    bgcolor: "#FAFAFA",
                  },
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderRadius: "10px", // ensures the outline itself has rounded corners
                  },
                  ".MuiInputBase-input": {
                    fontSize: "16px",
                    fontFamily: "Mona Sans",
                  },
                }}
              />
              {errors.password && !Object.keys(editObject)?.length > 0 && (
                <FormHelperText>{errors.password}</FormHelperText>
              )}
            </FormControl>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "space-between",
              gap: "30px",
              marginTop: "14px",
            }}
          >
            {/* name */}
            <FormControl fullWidth>
              <label
                style={{
                  color: "#8D8D8D",
                  marginBottom: "10px",
                  fontSize: "14px",
                  fontWeight: "500",
                }}
              >
                Display name <span style={{ color: "red" }}>*</span>
              </label>
              <TextField
                value={formValues.name}
                onChange={handleChange}
                name="name"
                variant="outlined"
                size="small"
                sx={{
                  borderRadius: "10px",
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "10px", // applies to the outer border
                    bgcolor: "#FAFAFA",
                  },
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderRadius: "10px", // ensures the outline itself has rounded corners
                  },
                  ".MuiInputBase-input": {
                    fontSize: "16px",
                    fontFamily: "Mona Sans",
                  },
                }}
                error={errors.name}
                helperText={errors.name}
              />
            </FormControl>

            {/* role */}
            <FormControl fullWidth error={errors.role}>
              <label
                style={{
                  color: "#8D8D8D",
                  marginBottom: "10px",
                  fontSize: "14px",
                  fontWeight: "500",
                }}
              >
                Role <span style={{ color: "red" }}>*</span>
              </label>
              <Select
                size="small"
                onChange={handleChange}
                name="role"
                value={formValues.role || ""}
                sx={{
                  bgcolor: "#FAFAFA",
                  borderRadius: "10px",
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "10px", // applies to the outer border
                  },
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderRadius: "10px", // ensures the outline itself has rounded corners
                  },
                  ".MuiInputBase-input": {
                    fontSize: "16px",
                    fontFamily: "Mona Sans",
                  },
                }}
              >
                {roles?.map((role) => (
                  <MenuItem
                    value={role.role_id}
                    sx={{
                      fontFamily: "inherit",
                    }}
                  >
                    {role.role_name}
                  </MenuItem>
                ))}
              </Select>

              {errors.role && <FormHelperText>{errors.role}</FormHelperText>}
            </FormControl>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              gap: "30px",
              marginTop: "14px",
              alignItems: "flex-start",
            }}
          >
            {/* phone number */}
            <FormControl fullWidth>
              <label
                style={{
                  color: "#8D8D8D",
                  marginBottom: "10px",
                  fontSize: "14px",
                  fontWeight: "500",
                }}
              >
                Phone no
              </label>
              <TextField
                value={formValues.phone}
                variant="outlined"
                size="small"
                type="number"
                name="phone"
                onChange={handleChange}
                sx={{
                  // height: "70px",
                  borderRadius: "10px",
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "10px", // applies to the outer border
                    bgcolor: "#FAFAFA",
                  },
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderRadius: "10px", // ensures the outline itself has rounded corners
                  },
                  ".MuiInputBase-input": {
                    fontSize: "16px",
                    fontFamily: "Mona Sans",
                  },
                }}
                error={errors.phone}
                helperText={errors.phone}
              />
            </FormControl>

            {/* email */}
            <FormControl fullWidth>
              <label
                style={{
                  color: "#8D8D8D",
                  marginBottom: "10px",
                  fontSize: "14px",
                  fontWeight: "500",
                }}
              >
                Email
              </label>
              <TextField
                value={formValues.email}
                variant="outlined"
                name="email"
                onChange={handleChange}
                size="small"
                sx={{
                  borderRadius: "10px",
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "10px", // applies to the outer border
                    bgcolor: "#FAFAFA",
                  },
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderRadius: "10px", // ensures the outline itself has rounded corners
                  },
                  ".MuiInputBase-input": {
                    fontSize: "16px",
                    fontFamily: "Mona Sans",
                  },
                }}
                error={errors.email}
                helperText={errors.email}
              />
            </FormControl>
          </Box>

          <Box
            sx={{
              marginTop: "24px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Button
              variant="contained"
              size="small"
              onClick={handleReset}
              sx={{
                bgcolor: "white",
                color: "black",
                border: "1px solid #F0F0F0",
                boxShadow: 0,
                // fontWeight: "500",
                fontFamily: "Mona Sans",
                padding: "6px 22px",
                textTransform: "capitalize",
                borderRadius: "8px",
                // fontSize: "16px",
                "&:hover": {
                  bgcolor: "#F5F4F7",
                  boxShadow: 2,
                },
              }}
            >
              Reset
            </Button>
            <Button
              variant="contained"
              size="small"
              onClick={validateData}
              sx={{
                bgcolor: "green",
                color: "#FFFFFF",
                boxShadow: 0,
                fontWeight: "500",
                fontFamily: "Mona Sans",
                textTransform: "capitalize",
                padding: "6px 22px",
                borderRadius: "8px",
                "&:hover": {
                  boxShadow: 2,
                },
              }}
            >
              {Object.keys(editObject)?.length > 0 ? "Update" : "Create"}
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default CreateUser;
