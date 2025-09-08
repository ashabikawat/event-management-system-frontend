import { Close } from "@mui/icons-material";
import { Box, FormControl, TextField, Typography } from "@mui/material";
import React from "react";

const CreateUser = () => {
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
            marginBottom: "20px",
          }}
        >
          <Typography fontWeight={600} fontFamily="inherit">
            Add User
          </Typography>
          <span
            style={{
              backgroundColor: "#F9F9F9",
              padding: "2px 6px",
              borderRadius: "20px",
              border: "1px solid #F8FAFB",
            }}
          >
            {" "}
            <i
              class="ri-close-fill"
              style={{
                fontSize: "16px",
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
                color: "#9C9C9C",
                marginBottom: "10px",
              }}
            >
              Username
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
                color: "#9C9C9C",
                marginBottom: "10px",
              }}
            >
              Email
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
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "30px",
            marginTop: "20px",
          }}
        >
          <FormControl fullWidth>
            <label
              style={{
                color: "#9C9C9C",
                marginBottom: "10px",
                fontSize: "16px",
              }}
            >
              Username
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
                color: "#9C9C9C",
                marginBottom: "10px",
              }}
            >
              Email
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
        </Box>
      </Box>
    </Box>
  );
};

export default CreateUser;
