import React from "react";
import {
  Box,
  Button,
  FormControl,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";

const CreateRole = ({ handleModal }) => {
  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        bgcolor: "rgba(0,0,0,0.5)",
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
              backgroundColor: "#F9F9F9",
              padding: "2px 6px",
              borderRadius: "20px",
              border: "1px solid #F8FAFB",
              cursor: "pointer",
            }}
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
            alignItems: "center",
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
              Role name
            </label>
            <TextField
              variant="outlined"
              size="small"
              sx={{
                bgcolor: "#FAFAFA",
                borderRadius: "10px",
                "& .MuiOutlinedInput-root": {
                  borderRadius: "10px", // applies to the outer border
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  borderRadius: "10px", // ensures the outline itself has rounded corners
                },
              }}
            />
          </FormControl>

          <FormControl fullWidth>
            <label
              style={{
                color: "#8D8D8D",
                marginBottom: "10px",
                fontSize: "14px",
                fontWeight: "500",
              }}
            >
              Role access
            </label>
            <Select
              size="small"
              sx={{
                bgcolor: "#FAFAFA",
                borderRadius: "10px",
                "& .MuiOutlinedInput-root": {
                  borderRadius: "10px", // applies to the outer border
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  borderRadius: "10px", // ensures the outline itself has rounded corners
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
              border: "1px solid #D8D8D9",
              boxShadow: 0,
              fontWeight: "500",
              fontFamily: "inherit",
            }}
          >
            Reset
          </Button>
          <Button
            variant="contained"
            size="small"
            sx={{
              bgcolor: "#28A745",
              color: "#FFFFFF",
              boxShadow: 0,
              fontWeight: "500",
              fontFamily: "inherit",
            }}
          >
            Create
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default CreateRole;
