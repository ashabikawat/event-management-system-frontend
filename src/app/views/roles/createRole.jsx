"use client";
import React, { useEffect, useState } from "react";
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
import { axiosWrapper } from "@/utils/axiosWrapper";
import { menuEndpoints, roleEndpoints } from "@/utils/endpoints";
import { showError, showSuccess } from "@/utils/confirmationBox";

const CreateRole = ({ handleModal, toast, getRoles }) => {
  const [formValues, setFormValues] = useState({
    role: "",
    roleAccess: [],
  });

  const [menus, setMenus] = useState([]);

  const [errors, setErrors] = useState({});

  const getMenusList = async () => {
    try {
      const response = await axiosWrapper(menuEndpoints.GET_MENUS, {}, "get");
      setMenus(response.data.menus);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMenusList();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const saveRole = async () => {
    try {
      const payload = {
        role_name: formValues.role,
        menus: formValues.roleAccess,
      };

      const response = await axiosWrapper(
        roleEndpoints.CREATE_ROLES,
        payload,
        "post"
      );

      console.log(response.data.status);

      if (response.data.status === 200) {
        toast.current.show(showSuccess(response.data.message));
        handleModal();
        handleReset();
        getRoles();
      }
    } catch (error) {
      // console.log(error);
      if (error) {
        toast.current.show(showError(error.response.data.message));
        handleModal();
        handleReset();
      }
    }
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

    if (Object.keys(newError)?.length === 0) {
      saveRole();
    }
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
              multiple
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
              {menus?.map((menu) => (
                <MenuItem
                  value={menu.menu_id}
                  sx={{
                    fontFamily: "inherit",
                  }}
                >
                  {menu.menu_name}
                </MenuItem>
              ))}
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
