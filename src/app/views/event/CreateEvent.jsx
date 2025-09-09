"use client";
import { CloudUpload } from "@mui/icons-material";
import {
  Box,
  Button,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

const CreateEvent = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100% ",
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
            Create Event
          </Typography>
        </Box>
      </Box>

      <Box>
        <Grid container spacing={6}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                px: 2,
              }}
            >
              {/* event name */}
              <FormControl>
                <label
                  style={{
                    color: "#8D8D8D",
                    marginBottom: "10px",
                    fontSize: "14px",
                    fontWeight: "500",
                  }}
                >
                  Event name
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
              {/* upload image */}
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
                  bgcolor: "white",
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
              {/* venue type */}
              <FormControl>
                <FormLabel
                  sx={{
                    color: "#8D8D8D",
                    marginBottom: "10px",
                    fontSize: "14px",
                    fontWeight: "500",
                    fontFamily: "inherit",
                  }}
                >
                  Venue type
                </FormLabel>
                <RadioGroup row>
                  <FormControlLabel
                    value="online"
                    control={<Radio />}
                    label="Online"
                  />
                  <FormControlLabel
                    value="venue"
                    control={<Radio />}
                    label="Venue"
                  />
                </RadioGroup>
              </FormControl>
              {/* venue */}
              <FormControl>
                <label
                  style={{
                    color: "#8D8D8D",
                    marginBottom: "10px",
                    fontSize: "14px",
                    fontWeight: "500",
                  }}
                >
                  Venue
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
                  <MenuItem value="Comedy show">Comedy show</MenuItem>
                  <MenuItem
                    value="Music
"
                  >
                    Music
                  </MenuItem>
                </Select>
              </FormControl>
              {/* categories */}
              <FormControl>
                <label
                  style={{
                    color: "#8D8D8D",
                    marginBottom: "10px",
                    fontSize: "14px",
                    fontWeight: "500",
                  }}
                >
                  Category
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
                  <MenuItem value="Comedy show">Comedy show</MenuItem>
                  <MenuItem
                    value="Music
"
                  >
                    Music
                  </MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            {" "}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                px: 2,
              }}
            >
              {/* event description */}
              <FormControl>
                <label
                  style={{
                    color: "#8D8D8D",
                    marginBottom: "10px",
                    fontSize: "14px",
                    fontWeight: "500",
                  }}
                >
                  Event Description
                </label>
                <TextField
                  variant="outlined"
                  size="small"
                  multiline
                  rows={2}
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

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                {/* start date and time */}
                <FormControl>
                  <label
                    style={{
                      color: "#8D8D8D",
                      marginBottom: "10px",
                      fontSize: "14px",
                      fontWeight: "500",
                    }}
                  >
                    Start date and time
                  </label>
                  <TextField
                    type="datetime-local"
                    size="small"
                    variant="outlined"
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
                {/* end date and time */}
                <FormControl>
                  <label
                    style={{
                      color: "#8D8D8D",
                      marginBottom: "10px",
                      fontSize: "14px",
                      fontWeight: "500",
                    }}
                  >
                    End date and time
                  </label>
                  <TextField
                    type="datetime-local"
                    size="small"
                    variant="outlined"
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
                {/* event duration */}
                <FormControl>
                  <label
                    style={{
                      color: "#8D8D8D",
                      marginBottom: "10px",
                      fontSize: "14px",
                      fontWeight: "500",
                    }}
                  >
                    Event Duration
                  </label>
                  <TextField
                    type="number"
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

              {/* terms and conditions */}
              <FormControl>
                <label
                  style={{
                    color: "#8D8D8D",
                    marginBottom: "10px",
                    fontSize: "14px",
                    fontWeight: "500",
                  }}
                >
                  Terms and Conditions
                </label>
                <TextField
                  variant="outlined"
                  size="small"
                  multiline
                  rows={6}
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

              {/* faq */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: "blueviolet",
                  }}
                >
                  Add Faq
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: "blueviolet",
                  }}
                >
                  Add Carousel images
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: "26px",
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
            Create Event
          </Button>
          <Button
            variant="contained"
            size="small"
            sx={{
              fontFamily: "inherit",
            }}
          >
            Draft Event
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default CreateEvent;
