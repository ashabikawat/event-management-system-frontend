"use client";
import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";

const CreateRole = ({ handleModal }) => {
  const [formValues, setFormValues] = useState({
    role: "",
    roleAccess: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const validateData = (e) => {
    e.preventDefault();

    let newError = {};

    const { role, roleAccess } = formValues;

    if (!role) {
      newError.role = "Role name is required";
    }

    if (!roleAccess) {
      newError.roleAccess = "Role access is required";
    }

    setErrors(newError);
  };

  const handleReset = () => {
    setFormValues({ role: "", roleAccess: "" });
    setErrors({});
  };

  return (
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
            Add Role
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
            onClick={handleModal}
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
          <FormControl fullWidth>
            <label
              style={{
                color: "#8D8D8D",
                marginBottom: "10px",
                fontSize: "14px",
                fontWeight: "500",
              }}
            >
              Role name <span style={{ color: "red" }}>*</span>
            </label>
            <TextField
              variant="outlined"
              size="small"
              name="role"
              value={formValues.role}
              onChange={handleChange}
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
              error={errors.role}
              helperText={errors.role}
            />
          </FormControl>

          <FormControl fullWidth error={errors.roleAccess}>
            <label
              style={{
                color: "#8D8D8D",
                marginBottom: "10px",
                fontSize: "14px",
                fontWeight: "500",
              }}
            >
              Role access <span style={{ color: "red" }}>*</span>
            </label>
            <Select
              size="small"
              name="roleAccess"
              value={formValues.roleAccess}
              onChange={handleChange}
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
              <MenuItem
                value="admin"
                sx={{
                  fontFamily: "inherit",
                }}
              >
                Dashboard
              </MenuItem>
              <MenuItem
                value="admin"
                sx={{
                  fontFamily: "inherit",
                }}
              >
                User management
              </MenuItem>
              <MenuItem
                value="admin"
                sx={{
                  fontFamily: "inherit",
                }}
              >
                Role management
              </MenuItem>
            </Select>
            {errors.roleAccess && (
              <FormHelperText>{errors.roleAccess}</FormHelperText>
            )}
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
            onClick={handleReset}
          >
            Reset
          </Button>
          <Button
            variant="contained"
            size="small"
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
            onClick={validateData}
          >
            Create
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default CreateRole;
