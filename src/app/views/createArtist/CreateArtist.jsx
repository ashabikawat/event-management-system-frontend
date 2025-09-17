import { CloudUpload } from "@mui/icons-material";
import {
  Box,
  Button,
  FormControl,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

const CreateArtist = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        paddingY: "16px",
        overflow: "auto",
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
        <Box>
          <Typography fontWeight={600} fontFamily="inherit" fontSize="18px">
            Create Artist
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          bgcolor: "#FFFFFF",
          borderRadius: "16px",
          padding: "16px",
          minHeight: "500px",
        }}
      >
        <Box
          sx={{
            height: "100%",
            width: "100%",
            flexGrow: 1,
          }}
        >
          <Grid container spacing={3}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                  }}
                >
                  <label
                    style={{
                      color: "#8D8D8D",
                      marginBottom: "10px",
                      fontSize: "14px",
                      fontWeight: "500",
                    }}
                  >
                    Artist images <span style={{ color: "red" }}>*</span>
                  </label>
                  <Box
                    sx={{
                      border: "2px  dashed #ccc",
                      height: "250px",
                      width: "100%",
                      p: 4,
                      cursor: "pointer",
                      textAlign: "center",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexDirection: "column",
                      bgcolor: "#FAFAFA",
                      mt: "12px",
                    }}
                  >
                    <CloudUpload
                      sx={{
                        fontSize: "32px",
                      }}
                    />
                    <Typography
                      variant="body1"
                      color="textSecondary"
                      sx={{
                        fontFamily: "inherit",
                      }}
                    >
                      Click to upload images
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  mt: "10px",
                  display: "flex",
                  gap: "10px",
                  flexDirection: "column",
                }}
              >
                <Box>
                  <FormControl fullWidth>
                    <label
                      style={{
                        color: "#8D8D8D",
                        marginBottom: "10px",
                        fontSize: "14px",
                        fontWeight: "500",
                      }}
                    >
                      Artist name <span style={{ color: "red" }}>*</span>
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

                <Box>
                  <FormControl fullWidth>
                    <label
                      style={{
                        color: "#8D8D8D",
                        marginBottom: "10px",
                        fontSize: "14px",
                        fontWeight: "500",
                      }}
                    >
                      Artist description <span style={{ color: "red" }}>*</span>
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
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: "10px",
        }}
      >
        <Button
          variant="contained"
          size="small"
          sx={{
            fontFamily: "inherit",
          }}
        >
          Reset
        </Button>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
          }}
        >
          <Button
            variant="contained"
            size="small"
            sx={{
              fontFamily: "inherit",
            }}
          >
            Create Artist
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default CreateArtist;
